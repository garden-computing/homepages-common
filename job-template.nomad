job "homepage-garden$BRANCH_SUFFIX" {
  datacenters = ["eu-central", "us-east"]

  group "static" {
    count = 2

    network {
      port "http" {}
    }

    constraint {
      attribute = "${node.class}"
      operator  = "="
      value     = "edge"
    }

    spread {
      attribute = "${node.datacenter}"
      weight    = 100
    }

    task "caddy" {
      driver = "docker"

      config {
        image = "$DOCKER_TAG"
        ports = ["http"]

        auth = {
          username = "$DOCKER_USER"
          password = "$DOCKER_PASSWORD"
        }

        mount {
          type   = "bind"
          source = "configs"
          target = "/etc/caddy"
        }
      }

      service {
        tags = ["public"]
        meta {
          public_name = "${BRANCH_SUBDOMAIN}homepage-garden"
        }
        port = "http"
        provider = "consul"
      }

      resources {
        cpu    = 50 # MHz
        memory = 50 # MB
      }

      template {
        data = <<EOF
          {
            debug
          }

          http://:{{ env "NOMAD_PORT_http" }} {
            file_server {
                root /usr/share/caddy/
            }
          }

        EOF

        destination = "configs/Caddyfile"
        change_mode = "restart"
      }
    }
  }
}
# deploy bump 1
