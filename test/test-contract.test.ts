import { launchTestNode } from 'fuels/test-utils';

import { TestContractAbi__factory } from '../src/sway-api/factories/TestContractAbi__factory';
import bytecode from '../src/sway-api/TestContractAbi.hex';

import { describe, test, expect } from 'vitest';

describe('Test Contract', () => {
  test('deploy and call', async () => {
    using launched = await launchTestNode({
      contractsConfigs: [
        {
          deployer: TestContractAbi__factory,
          bytecode,
        },
      ],
    });

    const {
      contracts: [contract],
      provider,
      wallets,
    } = launched;

    const one = await contract.functions.get_count().call();
    expect(one.value.toNumber()).toBe(0);
    const two = await contract.functions.increment_counter(5).call();
    expect(two.value.toNumber()).toBe(5);
    const three = await contract.functions.get_count().call();
    expect(three.value.toNumber()).toBe(5);

    expect(provider).toBeDefined();
    expect(wallets).toBeDefined();
  });
});
