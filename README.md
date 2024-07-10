## Repro steps
1. `pnpm install`
1. `pnpm test`

## Steps Followed

1. Installed project via [CLI](https://docs.fuel.network/docs/fuels-ts/creating-a-fuel-dapp/) - `pnpm create fuels@0.90.0`
1. Built contract - `forc build`
1. Ran typegen `pnpm fuels typegen -i ./sway-programs/contract/out/debug/test-contract-abi.json -o ./src/sway-api`
1. Added testing dep - `pnpm add -D vitest`
1. Created a test and run successfully - `test/test-contract.test.ts`

```sh
daniel@MacBook-Pro-5: ~/Documents/Development/Fuel/examples/create-fuels-launch-node main!
$ pnpm test                                                                                                                                                               [10:22:26]

> template-nextjs@0.1.3 test /Users/daniel/Documents/Development/Fuel/examples/create-fuels-launch-node
> vitest --run


 RUN  v2.0.1 /Users/daniel/Documents/Development/Fuel/examples/create-fuels-launch-node

 ✓ test/test-contract.test.ts (1)
   ✓ Test Contract (1)
     ✓ deploy and call

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  10:23:22
   Duration  1.02s (transform 43ms, setup 0ms, collect 300ms, tests 209ms, environment 0ms, prepare 47ms)
```