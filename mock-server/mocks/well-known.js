module.exports = {
  build: (app) => {
    app.get('/.well-known/openid-configuration', (req, res) => {
      res.send({
        "issuer": "http://localhost:3003",
        "authorization_endpoint": "http://localhost:3003/authorize",
        "token_endpoint": "http://localhost:3003/v2/oauth/token",
        "userinfo_endpoint": "http://localhost:3003/v2/users/me",
        "revocation_endpoint": "http://localhost:3003/v2/oauth/token/revoke",
        "end_session_endpoint": "http://localhost:3003/logout",
        "jwks_uri": "http://localhost:3003/.well-known/jwks.json",
        "scopes_supported": [
          "birthday",
          "bookings:read",
          "bookings:write",
          "configuration",
          "discord",
          "email",
          "flight_plans:read",
          "flight_plans:write",
          "friends:read",
          "friends:write",
          "location",
          "openid",
          "profile",
          "supervisor",
          "tracker",
          "training"
        ],
        "response_types_supported": [
          "code",
          "token",
          "id_token"
        ],
        "grant_types_supported": [
          "authorization_code",
          "refresh_token",
          "password",
          "client_credentials"
        ],
        "subject_types_supported": [
          "public"
        ],
        "id_token_signing_alg_values_supported": [
          "RS512"
        ],
        "id_token_encryption_alg_values_supported": [],
        "id_token_encryption_enc_values_supported": [],
        "token_endpoint_auth_methods_supported": [
          "client_secret_basic",
          "client_secret_post"
        ],
        "token_endpoint_auth_signing_alg_values_supported": [
          "RS512"
        ],
        "code_challenge_methods_supported": [
          "plain",
          "S256"
        ],
        "claims_parameter_supported": false,
        "request_parameter_supported": false,
        "request_uri_parameter_supported": false
      });
    });
  }
}
