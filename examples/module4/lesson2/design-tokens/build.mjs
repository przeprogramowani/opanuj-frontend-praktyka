import StyleDictionary from 'style-dictionary';

// Create a new StyleDictionary instance
const sd = new StyleDictionary('./config.json');

// Wait for initialization to complete before accessing tokens or building
async function build() {
  // Wait for initialization to complete
  await sd.hasInitialized;

  // Build all platforms
  await sd.buildAllPlatforms();
}

// Run the build process
build().catch((err) => {
  console.error('Error building style dictionary:', err);
  process.exit(1);
});
