import CustomContextPadProvider from './CustomContextPadProvider';
import CustomElementFactory from './CustomElementFactory';
import CustomOrderingProvider from './CustomOrderingProvider';
import CustomPalette from './CustomPalette';
import CustomRenderer from './CustomRenderer';
import CustomRules from './CustomRules';
import CustomUpdater from './CustomUpdater';
import CustomPathMap from './CustomPathMap';
import BpmnRenderer from './../../bpmn-js/lib/draw/BpmnRenderer';
import PopupMenuModule from './../../../bpmn/diagram-js/lib/features/popup-menu/';
import ReplaceModule from './../../../bpmn/bpmn-js/lib/features/replace';
import BpmnFactory from './../../bpmn-js/lib/features/modeling/BpmnFactory';

import ReplaceMenuProvider from './../../bpmn-js/lib/features/popup-menu/ReplaceMenuProvider';
import LabelEditingProvider from './../../bpmn-js/lib/features/label-editing/LabelEditingProvider';
import LabelEditingPreview from './../../bpmn-js/lib/features/label-editing/LabelEditingPreview';
import TextRenderer from './../../bpmn-js/lib/draw/TextRenderer';

export default {
	__depends__: [
    PopupMenuModule,
    ReplaceModule
  ],
  __init__: [
    'contextPadProvider',
    'customOrderingProvider',
    'customRenderer',
    'customRules',
    'customUpdater',
    'paletteProvider',
	'customPathMap',
	'bpmnRenderer',
	'replaceMenuProvider',
	'labelEditingProvider',
    'labelEditingPreview'
  ],
  contextPadProvider: [ 'type', CustomContextPadProvider ],
  customOrderingProvider: [ 'type', CustomOrderingProvider ],
  customRenderer: [ 'type', CustomRenderer ],
  customRules: [ 'type', CustomRules ],
  customUpdater: [ 'type', CustomUpdater ],
  elementFactory: [ 'type', CustomElementFactory ],
  paletteProvider: [ 'type', CustomPalette ],
  customPathMap: [ 'type', CustomPathMap ],
  bpmnRenderer: [ 'type', BpmnRenderer ],
  replaceMenuProvider: [ 'type', ReplaceMenuProvider ],
  labelEditingProvider: [ 'type', LabelEditingProvider ],
  labelEditingPreview: [ 'type', LabelEditingPreview ],
  textRenderer: [ 'type', TextRenderer ],
  bpmnFactory: [ 'type', BpmnFactory ]
};
