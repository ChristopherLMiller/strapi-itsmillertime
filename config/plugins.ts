export default ({ env }) => ({
  sentry: {
    enabled: true,
    config: {
      dsn: env('SENTRY_DSN'),
      sendMetadata: true,
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
