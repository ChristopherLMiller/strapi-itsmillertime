export default ({ env }) => ({
  sentry: {
    enabled: true,
    config: {
      dsn: env('SENTRY_DSN'),
      sendMetadata: true,
    },
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },
  blurhash: {
    enabled: env.bool('BLURHASH_ENABLED', false),
    config: {
      regenerateOnUpdate: true,
      forceRegenerateOnUpdate: false,
    },
  },
  email: {
    config: {
      provider: 'strapi-provider-email-resend',
      providerOptions: {
        apiKey: env('RESEND_API_KEY'),
      },
      settings: {
        defaultFrom: env('RESEND_DEFAULT_FROM'),
        defaultReplyTo: env('RESEND_DEFAULT_REPLY_TO'),
      },
    },
  },
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::post.post',
          published: {
            url: `${env('FRONTEND_URL')}/articles/{slug}`,
          },
        },
        {
          uid: 'api::page.page',
          published: {
            url: `${env('FRONTEND_URL')}/{slug}`,
          },
        },
      ],
    },
  },
  redis: {
    enabled: env.bool('REDIS_ENABLED', false),
    config: {
      settings: {
        debug: false,
        enableRedlock: true,
      },
      connections: {
        default: {
          connection: {
            host: env('REDIS_HOST'),
            username: env('REDIS_USERNAME'),
            port: env('REDIS_PORT'),
            db: 0,
            password: env('REDIS_PASSWORD'),
            tls: {},
          },
          settings: {
            debug: false,
          },
        },
      },
    },
  },
  upload: {
    config: {
      provider: 'strapi-provider-cloudflare-r2',
      providerOptions: {
        accessKeyId: env('CF_ACCESS_KEY_ID'),
        secretAccessKey: env('CF_ACCESS_SECRET'),
        endpoint: env('CF_ENDPOINT'),
        params: {
          Bucket: env('CF_BUCKET'),
          bucket: env('CF_BUCKET'),
        },
        cloudflarePublicAccessUrl: env('CF_PUBLIC_ACCESS_URL'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
