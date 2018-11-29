# Executed by yarn
rm -rf dist
graphql codegen
ts-node scripts/generateTypeDefs.ts
mkdir -p ./dist/generateTypeDefs
cp ./src/generated/schema.graphql ./dist/generated/schema.graphql
tsc