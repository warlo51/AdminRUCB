import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {colorInput} from '@sanity/color-input'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',

  title:import.meta.env.SANITY_STUDIO_TITLE,

  projectId: import.meta.env.SANITY_STUDIO_PROJECTID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,

  plugins: [deskTool(),colorInput(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})

