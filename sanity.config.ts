import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import { simplerColorInput } from 'sanity-plugin-simpler-color-input'


const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',

  title:import.meta.env.SANITY_STUDIO_TITLE,

  projectId: import.meta.env.SANITY_STUDIO_PROJECTID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,

  plugins: [deskTool(),simplerColorInput({
    defaultColorList: [
      { label: 'Blanc', value: '#ffffff' },
      { label: 'Noir', value: '#333333' },
      { label: 'Orange', value: '#e58c2d' },
      { label: 'Bleu', value: '#135ae0' },
      { label: 'Rouge', value: '#ed0505' },
      { label: 'Custom...', value: 'custom' },
    ],
  }), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})
