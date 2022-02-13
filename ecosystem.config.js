module.exports = {
  apps: [
    {
      name: "dot8-followup-node",
      script: "npm",
      args:"start",
      env_prod: {
        NODE_ENV: "prod",        
        DATA_BASE_URL: "mysql://dot8:JNxawpfx7R7x@172.30.20.141/actions_dot8",
        DATA_BASE_DIALECT: "mysql",
        PORT: 5558,
        JWT_SECRET: "S98dh#$k2l+85dg<njbdXz",
        KEY: "02b58caf2107783584d13405f42e5f54",
        TOKEN: "fb3e77df9376c756ee289b125e98ee0d032a5b5cc5d418e8ec5deab4f3a3965f",
      },
      env_dev: {
        NODE_ENV: "dev",
        DATA_BASE_URL: "mysql://dot8:tc05FwKeRJGbXELy0soN@dot8-prod-cluster.cluster-ce49llmpmswn.us-west-2.rds.amazonaws.com/actions_dot8",
        DATA_BASE_DIALECT: "mysql",
        PORT: 5559,
        JWT_SECRET: "S98dh#$k2l+85dg<njbdXz",
        KEY: "02b58caf2107783584d13405f42e5f54",
        TOKEN: "fb3e77df9376c756ee289b125e98ee0d032a5b5cc5d418e8ec5deab4f3a3965f",
      },
    },
  ],
}
