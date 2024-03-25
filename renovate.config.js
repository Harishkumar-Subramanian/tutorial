module.exports = {
  hostRules: [
    {
      hostType: 'docker',
      baseUrl: 'https://trimbletransportationcloud.azurecr.io',
      username: process.env.OCI_REGISTRY_USERNAME,
      password: process.env.OCI_REGISTRY_PASSWORD,
    },
  ],
  packageRules: [
    {
      datasources: ['helm'],
      registryUrls: ['oci://trimbletransportationcloud.azurecr.io'],
      packageNames: ['my-helm-chart'],
      enabled: true,
    },
  ],
  customManagers: [
    {
      fileMatch: ['^apps/.*/.*/values\\.yaml$'],
      matchStrings: ['^helm:\\n\\s*targetRevision: (?<currentValue>.*)$'],
      datasourceTemplate: 'helm',
    },
  ],
};
