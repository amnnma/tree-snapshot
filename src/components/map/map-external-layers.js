/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line no-use-before-define
export default [
  {
    id: 'Land-rights_1',
    name: 'Land rights [DEPRECATED]',
    slug: 'Land-rights_1',
    source: {
      type: 'vector',
      provider: {
        type: 'carto',
        account: 'wri-01',
        layers: [
          {
            options: {
              sql:
                'SELECT the_geom_webmercator, cartodb_id, name, country, legal_term, legal_reco as legal_recognition, ROUND(area_ha::text::float) AS area_ha from gfw_land_rights',
              type: 'cartodb'
            }
          }
        ]
      }
    },
    render: {
      layers: [
        {
          type: 'fill',
          'source-layer': 'layer0',
          paint: { 'fill-opacity': 0.7, 'fill-color': '#3BB2D0' }
        },
        {
          type: 'line',
          'source-layer': 'layer0',
          paint: {
            'line-opacity': 1,
            'line-color': '#3BB2D0',
            'line-width': 1
          }
        }
      ]
    },
    type: 'vector',
    version: '3.0',
    id: '0b9f0100-ce5b-430f-ad8f-3363efa05481',
    slug: 'overall-environmental-democracy-index-score',
    source: 'resource-watch'
  },
  {
    id: 'Tree-cover-loss-2001-2019',
    name: 'Tree cover loss - 2001-2019',
    slug: 'Tree-cover-loss-2001-2019',
    type: 'raster',
    source: {
      maxzoom: 12,
      minzoom: 2,
      tiles: [
        'https://tiles.globalforestwatch.org/umd_tree_cover_loss/v1.7/tcd_30/{z}/{x}/{y}.png'
      ],
      type: 'raster'
    },
    decodeParams: {
      startYear: 2001,
      endYear: 2019
    },
    decodeFunction: `\n      // values for creating power scale, domain (input), and range (output)\n
      float domainMin = 0.;\n
      float domainMax = 255.;\n
      float rangeMin = 0.;\n
      float rangeMax = 255.;\n\n
      float exponent = zoom < 13. ? 0.3 + (zoom - 3.) / 20. : 1.;\n
      float intensity = color.r * 255.;\n\n
      // get the min, max, and current values on the power scale\n
      float minPow = pow(domainMin, exponent - domainMin);\n
      float maxPow = pow(domainMax, exponent);\n
      float currentPow = pow(intensity, exponent);\n\n
      // get intensity value mapped to range\n
      float scaleIntensity = ((currentPow - minPow) / (maxPow - minPow) * (rangeMax - rangeMin)) + rangeMin;\n
      // a value between 0 and 255\n
      alpha = zoom < 13. ? scaleIntensity / 255. : color.g;\n\n
      float year = 2000.0 + (color.b * 255.);\n
      // map to years\n
      if (year >= startYear && year <= endYear && year >= 2001.) {\n
        color.r = 220. / 255.;\n
        color.g = (72. - zoom + 102. - 3. * scaleIntensity / zoom) / 255.;\n
        color.b = (33. - zoom + 153. - intensity / zoom) / 255.;\n
      } else {\n
        alpha = 0.;\n
      }\n`
  },
  {
    id: 'raster-test',
    type: 'layer',
    attributes: {
      name: 'Tree Cover Loss test',
      slug: 'Tree-Cover-Loss-test',
      dataset: '0448c79d-0ee0-42ff-9331-aeee70cef301',
      description:
        'Areas of gross tree cover loss from 2001 to 2009 with at least 30% canopy density.',
      application: ['rw'],
      iso: [],
      provider: 'leaflet',
      userId: '58fa22c54eecd907310778cd',
      default: false,
      protected: false,
      published: true,
      env: 'production',
      layerConfig: {
        type: 'tileLayer',
        service: 'leaflet',
        url:
          'https://production-api.globalforestwatch.org/v1/true-color-tiles/loss/{z}/{x}/{y}?startYear=2001&endYear=2009',
        body: {
          format: 'image/png',
          maxZoom: 13,
          attribution: '2016 wri/google/Hansen',
          transparent: true
        },
        timeline: true,
        order: 2009,
        dateTime: '2009-01-01',
        timelineLabel: '2009',
        layerType: 'raster'
      },
      legendConfig: {
        type: 'basic',
        items: [
          {
            name: 'Tree cover loss',
            color: '#DA6497'
          }
        ]
      },
      interactionConfig: {
        output: []
      },
      applicationConfig: {},
      staticImageConfig: {},
      createdAt: '2020-02-14T14:04:58.747Z',
      updatedAt: '2020-02-14T14:04:58.748Z'
    },
    id: '0448c79d-0ee0-42ff-9331-aeee70cef301',
    slug: 'tree-cover',
    source: 'resource-watch'
    
  }
];