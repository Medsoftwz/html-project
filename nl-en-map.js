/* 
 * NL → EN kerntermen
 * Doel: Nederlandstalige invoer mappen naar Engelstalige ICD-11-termen
 * Opzet: bewust beperkt (80/20), geen automatische vertaling
 */

const nlEnMap = {

  // === Algemene ziektebegrippen ===
  ziekte:           ['disease', 'disorder'],
  aandoening:   ['condition', 'disorder'],
  syndroom:     ['syndrome'],
  
  // === Specifieke ziektebegrippen ===
  artrose:         ['osteoarthritis'],
  suikerziekte:  ['diabetes', 'mellitus'],
  jicht:             ['gout'],
  wervel:          ['vertebra', 'vertebral'],
  maagzweer:   ['peptic', 'gastric', 'ulcer'],
  
    // === Oncologie ===
  kanker:       ['cancer', 'carcinoma', 'neoplasm'],
  tumor:        ['tumor', 'neoplasm'],
  gezwel:       ['tumor', 'neoplasm'],
  uitzaaiing:   ['metastasis', 'metastatic'],
  kwaadaardig:  ['malignant'],
  goedaardig:   ['benign'],

  // === Anatomie (hoog gebruik) ===
  hart:         ['heart', 'cardiac'],
  lever:        ['liver', 'hepatic'],
  nier:          ['kidney', 'renal'],
  prostaat:    ['prostate'],
  hersenen:   ['brain', 'cerebral'],
  borst:         ['breast', 'mammary'],
  galblaas:    ['gallbladder', 'gall'],
  galweg:      ['biliary'],
  blaas:        ['bladder'],

  // === Infectie / ontsteking ===
  infectie:     ['infection'],
  ontsteking:   ['inflammation', 'itis'],

  // === Cardiovasculair / neuro ===
  infarct:      ['infarction'],
  beroerte:     ['stroke', 'cerebrovascular']
};
