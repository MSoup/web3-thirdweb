import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main() {
  // Paste in the address from when you created the bundle collection module
  const bundleModuleAddress = '0x97d978B202F93CD15DE9acADd46ba2FF9877bD0b';
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log('Creating NFT batch...');

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: 'Normal Corgi',
        description: 'A pretty Corgi!',
        image: readFileSync('./assets/Corgi-1.jpeg'),
        properties: {
          rarity: 'common',
          fanciness: 5,
        }
      },
      supply: 100,
    },
    {
      metadata: {
        name: 'Happy Corgi',
        description: 'A happy Corgi!',
        image: readFileSync('./assets/Corgi-2.jpeg'),
        properties: {
          rarity: 'common',
          fanciness: 5,
        }
      },
      supply: 100,
    },
    {
      metadata: {
        name: 'Rare Corgi',
        description: 'A rare Corgi!',
        image: readFileSync('./assets/Corgi-3.jpeg'),
        properties: {
          rarity: 'a bit rare',
          fanciness: 8,
        }
      },
      supply: 70,
    },
    {
      metadata: {
        name: 'Baby Corgi',
        description: 'A baby Corgi!',
        image: readFileSync('./assets/Corgi-4.jpeg'),
        properties: {
          rarity: 'a bit rare',
          fanciness: 7,
        }
      },
      supply: 70,
    },
    {
      metadata: {
        name: 'Clean Corgi',
        description: 'A pretty clean corgi!',
        image: readFileSync('./assets/Corgi-5.jpeg'),
        properties: {
          rarity: 'rare',
          fanciness: 7,
        }
      },
      supply: 40,
    },
    {
      metadata: {
        name: 'Sleepy Corgi',
        description: 'A super sleepy corgi!',
        image: readFileSync('./assets/Corgi-6.jpeg'),
        properties: {
          rarity: 'super rare!',
          fanciness: 10,
        }
      },
      supply: 20,
    }
  ]);

  console.log('NFTs created!')
  console.log(JSON.stringify(created, null, 2));
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}