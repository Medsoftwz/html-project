window.wzTree = [

{ terms: ["Infectiologie"], code: "1" },
{ terms: ["Oncologie"], code: "2" },
{ terms: ["Hematologie"], code: "3" },
{ terms: ["Immunologie"], code: "4" },
{ terms: ["Genetica"], code: "7" },

  // 1A0 Bacteriële infecties
{ terms: ["Bepaalde infectieuze of parasitaire ziekten"], code: "1A" },
    { code: "1A0", terms: ["Bacteriële infecties"] },
  
    { code: "1A00", terms: ["Sepsis"] },
	  
    { code: "1A01", terms: ["Bacteriële huidinfecties"] },
      { code: "1A010", terms: ["Impetigo"] },
      { code: "1A011", terms: ["Cellulitis"] },
      { code: "1A012", terms: ["Erysipelas"] },
      { code: "1A018", terms: ["Overige bacteriële huidinfecties"] },
	  
    { code: "1A02", terms: ["Bacteriële luchtweginfecties"] },
      { code: "1A020", terms: ["Pneumonie (bacterieel)"] },
      { code: "1A021", terms: ["Bronchitis (bacterieel)"] },
	  { code: "1A028", terms: ["Overige bacteriële luchtweginfecties"] },
	  
    { code: "1A03", terms: ["Bacteriële gastro‑intestinale infecties"] },
      { code: "1A030", terms: ["Salmonella‑infectie"] },
      { code: "1A031", terms: ["Campylobacter‑infectie"] },
      { code: "1A032", terms: ["Shigella‑infectie"] },
	  { code: "1A038", terms: ["Overige bacteriële gastro‑intestinale infecties"] },

  // 1A1 Virale infecties
  { code: "1A1", terms: ["Virale infecties"] },
  
    { code: "1A10", terms: ["Influenza"] },
	
    { code: "1A11", terms: ["Respiratoire virale infecties"] },
      { code: "1A110", terms: ["RSV‑infectie"] },
      { code: "1A111", terms: ["Rhinovirusinfectie"] },
	  
    { code: "1A12", terms: ["Herpesvirussen"] },
	  
    { code: "1A13", terms: ["Virale hepatitis"] },
	  
	{ code: "1A18", terms: ["Overige virale infecties"] },

  // 1A2 Schimmelinfecties
  { code: "1A2", terms: ["Schimmelinfecties"] },
  
    { code: "1A20", terms: ["Oppervlakkige schimmelinfecties"] },
      { code: "1A200", terms: ["Dermatofytosen (tinea)"] },
      { code: "1A201", terms: ["Candida‑infecties"] },
	  
    { code: "1A21", terms: ["Systemische schimmelinfecties"] },
      { code: "1A210", terms: ["Aspergillose"] },
      { code: "1A211", terms: ["Cryptokokkose"] },
      { code: "1A212", terms: ["Histoplasmose"] },
	  
	{ code: "1A28", terms: ["Overige schimmelinfecties"] },

  // 1A3 Parasitair veroorzaakte ziekten
  { code: "1A3", terms: ["Parasitair veroorzaakte ziekten"] },
    { code: "1A30", terms: ["Protozoaire infecties"] },
      { code: "1A300", terms: ["Malaria"] },
      { code: "1A301", terms: ["Toxoplasmose"] },
      { code: "1A302", terms: ["Giardiasis"] },
    { code: "1A31", terms: ["Helminthiasis (worminfecties)"] },
      { code: "1A310", terms: ["Ascariasis"] },
      { code: "1A311", terms: ["Taeniasis"] },
      { code: "1A312", terms: ["Schistosomiasis"] },
    { code: "1A32", terms: ["Ectoparasitaire infecties"] },
      { code: "1A320", terms: ["Scabiës"] },
      { code: "1A321", terms: ["Pediculosis (luizen)"] },
	  
	{ code: "1A38", terms: ["Overige pParasitaire ziekten"] },

  // 1A4 Zoonosen
  { code: "1A4", terms: ["Zoonosen"] },
    { code: "1A40", terms: ["Rabiës"] },
    { code: "1A41", terms: ["Brucellose"] },
    { code: "1A42", terms: ["Leptospirose"] },
    { code: "1A43", terms: ["Q‑koorts"] },

  // 1A5 Seksueel overdraagbare infecties
  { code: "1A5", terms: ["Seksueel overdraagbare infecties"] },
    { code: "1A50", terms: ["Chlamydia"] },
    { code: "1A51", terms: ["Gonorroe"] },
    { code: "1A52", terms: ["Syfilis"] },
    { code: "1A53", terms: ["HIV‑infectie"] },
    { code: "1A54", terms: ["Trichomoniasis"] },


  // 1A7 Infecties van onbekende of gemengde oorsprong
  { code: "1A7", terms: ["Infecties van onbekende of gemengde oorsprong"] },
    { code: "1A70", terms: ["Koorts van onbekende oorsprong (FUO)"] },
    { code: "1A71", terms: ["Gemengde infecties"] },


  // 1A9 Overige & Complicaties van infectieuze of parasitaire ziekten
  { code: "1A9", terms: ["Overige infectieuze ziekten"] },
    { code: "1A90", terms: ["Zeldzame infecties"] },
    { code: "1A91", terms: ["Opportunistische infecties"] },
	
    { code: "1A92", terms: ["Complicaties van infectieuze procedures"] },
	
	{ code: "1A96", terms: ["Complicaties van infecties"] },
    { code: "1A961", terms: ["Sepsiscomplicaties"] },
    { code: "1A962", terms: ["Postvirale syndromen"] },
    { code: "1A963", terms: ["Chronische infectiegerelateerde schade"] },
	
  { code: "1A97", terms: ["Postinfectieuze en immuungemedieerde syndromen"] },
    { code: "1A971", terms: ["Reumatische koorts"] },
    { code: "1A972", terms: ["Postinfectieuze glomerulonefritis"] },
    { code: "1A973", terms: ["Guillain‑Barré syndroom (postinfectieus)"] },

{ terms: ["Neoplasmata"], code: "2A" },

  // 2A0 Goedaardige neoplasmata
  { code: "2A0", terms: ["Goedaardige neoplasmata"] },
    { code: "2A00", terms: ["Goedaardige huidtumoren"] },
      { code: "2A000", terms: ["Naevus (moedervlek)"] },
      { code: "2A001", terms: ["Lipoom"] },
      { code: "2A002", terms: ["Seborrheïsche keratose"] },
    { code: "2A01", terms: ["Goedaardige bindweefseltumoren"] },
      { code: "2A010", terms: ["Fibroom"] },
      { code: "2A011", terms: ["Hemangioom"] },
    { code: "2A02", terms: ["Goedaardige bot- en kraakbeentumoren"] },
      { code: "2A020", terms: ["Osteoom"] },
      { code: "2A021", terms: ["Chondroom"] },
    { code: "2A03", terms: ["Goedaardige orgaanspecifieke tumoren"] },
      { code: "2A030", terms: ["Adenoom"] },
      { code: "2A031", terms: ["Poliep (benigne)"] },

  // 2A1 Premaligne laesies
  { code: "2A1", terms: ["Premaligne laesies"] },
    { code: "2A10", terms: ["Actinische keratose"] },
    { code: "2A11", terms: ["Cervicale dysplasie (CIN)"] },
    { code: "2A12", terms: ["Colorectale adenomen"] },
    { code: "2A13", terms: ["Barrett‑slijmvlies met dysplasie"] },

  // 2A2 Maligne neoplasmata (solide tumoren)
  { code: "2A2", terms: ["Maligne neoplasmata - Solide tumoren)"] },
  
    { code: "2A2A", terms: ["Huid tumoren"] },
	
    { code: "2A2C", terms: ["Bot tumoren"] },
    
	{ code: "2A2E", terms: ["Klier tumoren"] },
		
	{ code: "2A2G", terms: ["Hersen tumoren"] },
	
    { code: "2A2H", terms: ["Oog tumoren"] },
	
    { code: "2A2K", terms: ["NKO tumoren"] },
 
    { code: "2A2L", terms: ["Long tumoren"] },

    { code: "2A2M", terms: ["Borst tumoren"] },

    { code: "2A2P", terms: ["Gastro‑intestinale tumoren"] },

    { code: "2A2Q", terms: ["Genitale tumoren"] },

    { code: "2A2U", terms: ["Urologische tumoren"] },
	
    { code: "2A2Z", terms: ["Tumoren NNO"] },
	
    // 2A3 Hematologische maligniteiten
  { code: "2A3", terms: ["Hematologische maligniteiten"] },
    { code: "2A30", terms: ["Leukemieën"] },
      { code: "2A300", terms: ["Acute myeloïde leukemie (AML)"] },
      { code: "2A301", terms: ["Acute lymfatische leukemie (ALL)"] },
      { code: "2A302", terms: ["Chronische myeloïde leukemie (CML)"] },
      { code: "2A303", terms: ["Chronische lymfatische leukemie (CLL)"] },
    { code: "2A31", terms: ["Lymfomen"] },
      { code: "2A310", terms: ["Hodgkin‑lymfoom"] },
      { code: "2A311", terms: ["Non‑Hodgkin‑lymfoom"] },
    { code: "2A32", terms: ["Multipel myeloom"] },
	
	  // 2A7 Functionele tumoren
  { code: "2A4", terms: ["Functionele tumoren"] },
    { code: "2A40", terms: ["Neuro‑endocriene tumoren (NET)"] },
    { code: "2A41", terms: ["Carcinoïd tumoren"] },

  // 2A6 Metastasen
  { code: "2A6", terms: ["Metastasen"] },
    { code: "2A60", terms: ["Botmetastasen"] },
    { code: "2A61", terms: ["Longmetastasen"] },
    { code: "2A62", terms: ["Levermetastasen"] },
    { code: "2A63", terms: ["Hersenmetastasen"] },

  // 2A8 Complicaties van neoplasmata
  { code: "2A8", terms: ["Complicaties van neoplasmata"] },
    { code: "2A80", terms: ["Tumorlysis‑syndroom"] },
    { code: "2A81", terms: ["Paraneoplastische syndromen"] },

  // 2A9 Overige neoplasmata
  { code: "2A9", terms: ["Overige neoplasmata"] },
    { code: "2A91", terms: ["Goedaardige tumoren NNO"] },
    { code: "2A92", terms: ["Maligne tumoren NNO"] },
    { code: "2A95", terms: ["Metastase zonder bekende primaire tumor"] },
    { code: "2A96", terms: ["Neoplasma NNO"] },

{ terms: ["Ziekten van het bloed of bloedvormende organen"], code: "3A" },

  // 3A0 Anemieën
  { code: "3A0", terms: ["Anemieën"] },

  // 3A1 Stollingsstoornissen
  { code: "3A1", terms: ["Stollingsstoornissen"] },
    { code: "3A10", terms: ["Hemofilie"] },
    { code: "3A11", terms: ["Ziekte van Von Willebrand"] },
    { code: "3A12", terms: ["Trombocytopenie"] },
    { code: "3A14", terms: ["Trombofilie"] },

  // 3A2 Leukocytaire aandoeningen
  { code: "3A2", terms: ["Leukocytaire aandoeningen"] },
    { code: "3A20", terms: ["Leukopenie"] },
    { code: "3A21", terms: ["Leukocytose"] },
    { code: "3A22", terms: ["Neutropenie"] },
    { code: "3A23", terms: ["Eosinofilie"] },
    { code: "3A24", terms: ["Monocytose"] },

  // 3A3 Aandoeningen van het beenmerg
  { code: "3A3", terms: ["Aandoeningen van het beenmerg"] },
    { code: "3A30", terms: ["Myelodysplastische syndromen (MDS)"] },
    { code: "3A31", terms: ["Myeloproliferatieve aandoeningen (MPN)"] },
      { code: "3A310", terms: ["Polycythaemia vera"] },
      { code: "3A311", terms: ["Essentiële trombocytose"] },
      { code: "3A312", terms: ["Primair myelofibrose"] },
    { code: "3A32", terms: ["Aplastische anemie (beenmergfalen)"] },

  // 3A4 Hemoglobinopathieën
  { code: "3A4", terms: ["Hemoglobinopathieën"] },
    { code: "3A40", terms: ["Sikkelcelziekte"] },
    { code: "3A41", terms: ["Thalassemieën"] },

  // 3A5 Aandoeningen van plasma-eiwitten
  { code: "3A5", terms: ["Aandoeningen van plasma-eiwitten"] },
    { code: "3A50", terms: ["Monoklonale gammopathieën"] },
    { code: "3A51", terms: ["Hypogammaglobulinemie"] },
    { code: "3A52", terms: ["Hypergammaglobulinemie"] },

  // 3A6 Aandoeningen van milt en lymfatisch systeem
  { code: "3A6", terms: ["Aandoeningen van milt en lymfatisch systeem"] },
    { code: "3A60", terms: ["Splenomegalie"] },
    { code: "3A61", terms: ["Hyposplenie / Asplenie"] },
    { code: "3A62", terms: ["Lymfadenopathie"] },

  // 3A7 Hematologische complicaties
  { code: "3A7", terms: ["Hematologische complicaties"] },
    { code: "3A70", terms: ["Hemolytische crises"] },
    { code: "3A71", terms: ["Hyperviscositeitssyndroom"] },
    { code: "3A72", terms: ["Transfusiegerelateerde complicaties"] },

  // 3A8 Overige bloedziekten
  { code: "3A8", terms: ["Overige bloedziekten"] },

{ terms: ["Ziekten van het immuunsysteem"], code: "4A" },

  // 4A0 Primaire immuundeficiënties
  { code: "4A0", terms: ["Primaire immuundeficiënties"] },
    { code: "4A00", terms: ["Antilichaamdeficiënties"] },
      { code: "4A000", terms: ["Selectieve IgA-deficiëntie"] },
      { code: "4A001", terms: ["Common variable immunodeficiency (CVID)"] },
    { code: "4A01", terms: ["Cellulaire immuundeficiënties"] },
      { code: "4A010", terms: ["Severe combined immunodeficiency (SCID)"] },
      { code: "4A011", terms: ["DiGeorge-syndroom"] },
    { code: "4A02", terms: ["Fagocytendefecten"] },
      { code: "4A020", terms: ["Chronische granulomateuze ziekte"] },
    { code: "4A03", terms: ["Complementdeficiënties"] },

  // 4A1 Secundaire immuundeficiënties
  { code: "4A1", terms: ["Secundaire immuundeficiënties"] },
    { code: "4A10", terms: ["Immuundeficiëntie door infecties"] },
      { code: "4A100", terms: ["HIV-geassocieerde immuundeficiëntie"] },
    { code: "4A11", terms: ["Immuundeficiëntie door medicatie"] },
      { code: "4A110", terms: ["Corticosteroïd-geïnduceerde immuunsuppressie"] },
      { code: "4A111", terms: ["Chemotherapie-geïnduceerde immuunsuppressie"] },
    { code: "4A12", terms: ["Immuundeficiëntie door ondervoeding"] },

  // 4A2 Auto-immuunziekten (systemisch)
  { code: "4A2", terms: ["Auto-immuunziekten (systemisch)"] },
    { code: "4A20", terms: ["Systemische lupus erythematodes (SLE)"] },
    { code: "4A21", terms: ["Sjögren-syndroom"] },
    { code: "4A22", terms: ["Systemische sclerose"] },
    { code: "4A23", terms: ["Mixed connective tissue disease (MCTD)"] },
    { code: "4A24", terms: ["Vasculitis geassocieerd met auto-immuniteit"] },

  // 4A3 Auto-immuunziekten (orgaanspecifiek)
  { code: "4A3", terms: ["Auto-immuunziekten (orgaanspecifiek)"] },
    { code: "4A30", terms: ["Auto-immuun hemolytische anemie"] },
    { code: "4A31", terms: ["Auto-immuun trombocytopenie"] },
    { code: "4A32", terms: ["Auto-immuun thyroïditis (Hashimoto)"] },
    { code: "4A33", terms: ["Ziekte van Graves"] },
    { code: "4A34", terms: ["Coeliakie (auto-immuun enteropathie)"] },

  // 4A4 Allergische aandoeningen
  { code: "4A4", terms: ["Allergische aandoeningen"] },
    { code: "4A40", terms: ["Allergische rinitis"] },
    { code: "4A41", terms: ["Astma (allergisch)"] },
    { code: "4A42", terms: ["Atopisch eczeem"] },
    { code: "4A43", terms: ["Voedselallergieën"] },
    { code: "4A44", terms: ["Anafylaxie"] },

  // 4A5 Immunologische overgevoeligheidsreacties
  { code: "4A5", terms: ["Immunologische overgevoeligheidsreacties"] },
    { code: "4A50", terms: ["Type I overgevoeligheid (IgE-gemedieerd)"] },
    { code: "4A51", terms: ["Type II overgevoeligheid (cytotoxisch)"] },
    { code: "4A52", terms: ["Type III overgevoeligheid (immuuncomplexen)"] },
    { code: "4A53", terms: ["Type IV overgevoeligheid (T-cel gemedieerd)"] },

  // 4A6 Cytokine- en immuunregulatiestoornissen
  { code: "4A6", terms: ["Cytokine- en immuunregulatiestoornissen"] },
    { code: "4A60", terms: ["Cytokine release syndroom"] },
    { code: "4A61", terms: ["Hemofagocytaire lymfohistiocytose (HLH)"] },
    { code: "4A62", terms: ["Macrofagenactivatiesyndroom"] },

  // 4A7 Transplantatie-gerelateerde immuunziekten
  { code: "4A7", terms: ["Transplantatie-gerelateerde immuunziekten"] },
    { code: "4A70", terms: ["Afstotingsreacties"] },
      { code: "4A700", terms: ["Acute afstoting"] },
      { code: "4A701", terms: ["Chronische afstoting"] },
    { code: "4A71", terms: ["Graft-versus-host disease (GVHD)"] },

  // 4A8 Immunologische complicaties
    { code: "4A8", terms: ["Immunologische complicaties"] },
    { code: "4A80", terms: ["Immuungerelateerde bijwerkingen van medicatie"] },
    { code: "4A81", terms: ["Immuungerelateerde orgaanschade"] },

  // 4A9 Overige immuunziekten
  { code: "4A9", terms: ["Overige immuunziekten"] },
    { code: "4A90", terms: ["Zeldzame immuunziekten"] },
    { code: "4A91", terms: ["Immuunziekte N.O.S."] },

// Hoofdstuk 05 — Endocriene ziekten

{ terms: ["Endocrinologie"], code: "5" },

{ terms: ["Endocriene stoornissen"], code: "5A" },

    { code: "5A0", terms: ["Hypothalamus–hypofyse-as"] },

        { code: "5A00", terms: ["Hypothalamusstoornissen"] },
            { code: "5A000", terms: ["Congenitale hypothalamusstoornissen"] },
            { code: "5A001", terms: ["Verkregen hypothalamusdisfunctie"] },
            { code: "5A002", terms: ["Infiltratieve of inflammatoire hypothalamusziekten"] },
            { code: "5A003", terms: ["Hypothalamustumoren"] },

        { code: "5A01", terms: ["Hypofysestoornissen"] },
            { code: "5A010", terms: ["Hypopituïtarisme"] },
                { code: "5A0100", terms: ["Pan‑hypopituïtarisme"] },
                { code: "5A0101", terms: ["Partieel hypopituïtarisme"] },

            { code: "5A011", terms: ["Hypofyse‑hypersecretiesyndromen"] },
                { code: "5A0110", terms: ["Hyperprolactinemie / prolactinoom"] },
                { code: "5A0111", terms: ["Acromegalie / GH‑exces"] },
                { code: "5A0112", terms: ["ACTH‑exces (Cushing disease)"] },
                { code: "5A0113", terms: ["TSH‑producerend adenoom"] },

            { code: "5A012", terms: ["Niet‑functionerende hypofyse‑adenomen"] },
            { code: "5A013", terms: ["Hypofysitis (auto‑immuun, IgG4, postpartum)"] },
            { code: "5A014", terms: ["Centraal diabetes insipidus"] },
            { code: "5A015", terms: ["SIADH"] },

    { code: "5A1", terms: ["Schildklierziekten"] },

        { code: "5A10", terms: ["Hypothyreoïdie"] },
            { code: "5A100", terms: ["Primaire hypothyreoïdie"] },
            { code: "5A101", terms: ["Secundaire/tertiaire hypothyreoïdie"] },
            { code: "5A102", terms: ["Hypothyreoïdie NNO"] },
			
        { code: "5A11", terms: ["Hyperthyreoïdie"] },
            { code: "5A110", terms: ["Graves‑hyperthyreoïdie"] },
            { code: "5A111", terms: ["Toxisch nodus / multinodulair"] },
            { code: "5A112", terms: ["Thyroïditis‑geïnduceerde hyperthyreoïdie"] },
			{ code: "5A114", terms: ["Hyperthyreoïdie NNO"] },
			
        { code: "5A12", terms: ["Thyroïditiden"] },
            { code: "5A120", terms: ["Hashimoto‑thyroïditis"] },
            { code: "5A121", terms: ["Subacute thyroïditis (De Quervain)"] },
            { code: "5A122", terms: ["Riedel‑thyroïditis"] },
            { code: "5A123", terms: ["Acute infectieuze thyroïditis"] },

        { code: "5A13", terms: ["Nodulaire schildklierziekten"] },
            { code: "5A130", terms: ["Solitair nodus"] },
            { code: "5A131", terms: ["Multinodulair"] },

    { code: "5A2", terms: ["Bijschildklierziekten"] },

        { code: "5A20", terms: ["Hyperparathyreoïdie"] },
            { code: "5A200", terms: ["Primaire hyperparathyreoïdie"] },
            { code: "5A201", terms: ["Secundaire hyperparathyreoïdie"] },
            { code: "5A202", terms: ["Tertiaire hyperparathyreoïdie"] },

        { code: "5A21", terms: ["Hypoparathyreoïdie"] },
            { code: "5A210", terms: ["Postchirurgisch"] },
            { code: "5A211", terms: ["Auto‑immuun"] },

        { code: "5A22", terms: ["Pseudohypoparathyreoïdie"] },

    { code: "5A3", terms: ["Bijnierziekten"] },

        { code: "5A30", terms: ["Bijniercortex"] },
            { code: "5A300", terms: ["Hypercortisolisme (Cushing syndroom)"] },
            { code: "5A301", terms: ["Hypocortisolisme (Addison, secundair/tertiair)"] },

            { code: "5A302", terms: ["Hyperaldosteronisme"] },
                { code: "5A3020", terms: ["Primair hyperaldosteronisme"] },
                { code: "5A3021", terms: ["Secundair hyperaldosteronisme"] },

            { code: "5A303", terms: ["Congenitale bijnierhyperplasie"] },
                { code: "5A3030", terms: ["21‑hydroxylasedeficiëntie"] },
                { code: "5A3031", terms: ["11β‑hydroxylasedeficiëntie"] },
                { code: "5A303X", terms: ["Andere CAH‑varianten"] },

        { code: "5A31", terms: ["Bijniermerg"] },
            { code: "5A310", terms: ["Feochromocytoom"] },
            { code: "5A311", terms: ["Paraganglioom"] },
            { code: "5A312", terms: ["Catecholamine‑dysregulatie"] },

    { code: "5A4", terms: ["Endocriene pancreasziekten"] },

        { code: "5A40", terms: ["Diabetes mellitus"] },
            { code: "5A400", terms: ["Type 1 diabetes"] },
            { code: "5A401", terms: ["Type 2 diabetes"] },
            { code: "5A402", terms: ["Specifieke vormen (MODY, LADA, genetisch)"] },
            { code: "5A403", terms: ["Zwangerschapsdiabetes"] },

        { code: "5A41", terms: ["Hypoglykemieën"] },
            { code: "5A410", terms: ["Insulinoom"] },
            { code: "5A411", terms: ["Iatrogene hypoglykemie"] },
            { code: "5A412", terms: ["Reactieve hypoglykemie"] },

        { code: "5A42", terms: ["Pancreatische NETs"] },
            { code: "5A420", terms: ["Insulinoom"] },
            { code: "5A421", terms: ["Glucagonoom"] },
            { code: "5A422", terms: ["VIPoom"] },
            { code: "5A423", terms: ["Gastrinoom"] },
            { code: "5A424", terms: ["Somatostatinoom"] },

    { code: "5A5", terms: ["Gonadale endocriene ziekten"] },

        { code: "5A50", terms: ["Ovariële endocriene ziekten"] },
            { code: "5A500", terms: ["Ovariële insufficiëntie"] },
            { code: "5A501", terms: ["PCOS"] },
            { code: "5A502", terms: ["Hyperandrogenisme"] },

        { code: "5A51", terms: ["Testiculaire endocriene ziekten"] },
            { code: "5A510", terms: ["Primair hypogonadisme"] },
            { code: "5A511", terms: ["Secundair hypogonadisme"] },
            { code: "5A512", terms: ["Androgeenresistentie"] },

    // 5A6 Multiglandulaire/systemische endocriene ziekten
    { code: "5A6", terms: ["Multiglandulaire en systemische endocriene ziekten"] },

        { code: "5A60", terms: ["Multiple endocrine neoplasia (MEN)"] },
            { code: "5A600", terms: ["MEN1"] },
            { code: "5A601", terms: ["MEN2A"] },
            { code: "5A602", terms: ["MEN2B"] },

        { code: "5A61", terms: ["Auto-immuun poly-endocriene syndromen"] },
            { code: "5A610", terms: ["APS1"] },
            { code: "5A611", terms: ["APS2"] },

        { code: "5A62", terms: ["Infiltratieve endocriene ziekten"] },
        { code: "5A63", terms: ["Paraneoplastische endocriene syndromen"] },

    // 5A7 Externe oorzaken
    { code: "5A7", terms: ["Endocriene ziekten door externe factoren"] },
        { code: "5A70", terms: ["Iatrogene endocriene stoornissen"] },
        { code: "5A71", terms: ["Exogene hormooninname"] },
        { code: "5A72", terms: ["Endocriene disruptoren"] },

    // 5A8 Calcium-fosfaat en botmetabolisme
    { code: "5A8", terms: ["Calcium‑fosfaat‑ en botmetabolisme"] },
        { code: "5A80", terms: ["Osteoporose"] },
        { code: "5A81", terms: ["Osteomalacie / vitamine D‑deficiëntie"] },
        { code: "5A82", terms: ["Hypercalciëmie"] },
        { code: "5A83", terms: ["Hypocalciëmie"] },
        { code: "5A84", terms: ["Fosfaatstoornissen"] },
		
	{ code: "5A9", terms: ["Overige endocriene stoornissen en ziekten"] },

// NUTRITIONELE STOORNISSEN
{ code: "5B", terms: ["Nutritionele stoornis"] },

    { code: "5B1", terms: ["Ondervoeding"] },
        { code: "5B11", terms: ["Eiwit-energieondervoeding"] },
        { code: "5B12", terms: ["Micronutriënttekorten"] },
        { code: "5B19", terms: ["Overige vormen van ondervoeding"] },

    { code: "5B2", terms: ["Overvoeding"] },
        { code: "5B21", terms: ["Obesitas"] },
        { code: "5B22", terms: ["Hypervitaminosen"] },
        { code: "5B29", terms: ["Overige vormen van overvoeding"] },

    { code: "5B9", terms: ["Overige nutritionele stoornissen"] },

// METABOLE STOORNISSEN
{ code: "5C", terms: ["Metabole stoornis"] },

    // Koolhydraatmetabolisme
    { code: "5C1", terms: ["Stoornis in koolhydraatmetabolisme"] },
        { code: "5C11", terms: ["Diabetes mellitus"] },
        { code: "5C12", terms: ["Hypoglykemie"] },
        { code: "5C13", terms: ["Glycogeenstapelingsziekten"] },
        { code: "5C19", terms: ["Overige stoornissen in koolhydraatmetabolisme"] },

    // Vetmetabolisme
    { code: "5C2", terms: ["Stoornis in vetmetabolisme"] },
        { code: "5C21", terms: ["Dyslipidemie"] },
        { code: "5C22", terms: ["Vetzuuroxidatiestoornissen"] },
        { code: "5C23", terms: ["Lipoproteïnenstoornissen"] },
        { code: "5C29", terms: ["Overige stoornissen in vetmetabolisme"] },

    // Eiwit- en aminozuurmetabolisme
    { code: "5C3", terms: ["Stoornis in eiwit- en aminozuurmetabolisme"] },
        { code: "5C31", terms: ["Aminozuurmetabolisme (bv. PKU)"] },
        { code: "5C32", terms: ["Ureumcyclusstoornissen"] },
        { code: "5C33", terms: ["Organische acidemieën"] },
        { code: "5C39", terms: ["Overige stoornissen in eiwit- en aminozuurmetabolisme"] },

    // Elektrolyten en mineralen
    { code: "5C4", terms: ["Stoornis in elektrolyt- en mineraalhuishouding"] },
        { code: "5C41", terms: ["Natriumstoornissen"] },
        { code: "5C42", terms: ["Kaliumstoornissen"] },
        { code: "5C43", terms: ["Calciumstoornissen"] },
        { code: "5C44", terms: ["Magnesiumstoornissen"] },
        { code: "5C45", terms: ["Fosfaatstoornissen"] },
        { code: "5C46", terms: ["Zuur-base-stoornissen"] },
        { code: "5C49", terms: ["Overige elektrolyt- en mineraalstoornissen"] },

    // Endocrien-metabool
    { code: "5C5", terms: ["Endocrien-metabole stoornis"] },
        { code: "5C51", terms: ["Schildklierstoornissen"] },
        { code: "5C52", terms: ["Bijnierstoornissen"] },
        { code: "5C53", terms: ["Parathyreoïdstoornissen"] },
        { code: "5C54", terms: ["GH-gerelateerde stoornissen"] },
        { code: "5C59", terms: ["Overige endocrien-metabole stoornissen"] },

    // Mitochondriaal
    { code: "5C6", terms: ["Mitochondriale metabole stoornis"] },
        { code: "5C61", terms: ["MELAS"] },
        { code: "5C62", terms: ["MERRF"] },
        { code: "5C63", terms: ["Leigh-syndroom"] },
        { code: "5C69", terms: ["Overige mitochondriale stoornissen"] },

    // Metalen
    { code: "5C7", terms: ["Stoornis in metaalmetabolisme"] },
        { code: "5C71", terms: ["Hemochromatose"] },
        { code: "5C72", terms: ["Wilson-ziekte"] },
        { code: "5C73", terms: ["Menkes-ziekte"] },
        { code: "5C74", terms: ["Porfyrieën"] },
        { code: "5C79", terms: ["Overige stoornissen in metaalmetabolisme"] },

    // Metabole botziekten
    { code: "5C8", terms: ["Metabole botziekte"] },
        { code: "5C81", terms: ["Osteoporose"] },
        { code: "5C82", terms: ["Osteomalacie / rachitis"] },
        { code: "5C83", terms: ["Renale osteodystrofie"] },
        { code: "5C84", terms: ["Paget-ziekte"] },
        { code: "5C89", terms: ["Overige metabole botziekten"] },

    { code: "5C9", terms: ["Overige metabole stoornissen"] },


  // P — Psychiatrie
  
  { code: "6", terms: ["Psychiatrie"] },
  { code: "6A", terms: ["Psychische stoornissen (ICD‑11 6A)"] },
    { code: "6A0", terms: ["Stemmingsstoornissen"] },
      { code: "6A00", terms: ["Depressieve episode"] },
      { code: "6A01", terms: ["Bipolaire stoornis"] },

    { code: "6A1", terms: ["Angst- en paniekstoornissen"] },
      { code: "6A10", terms: ["Gegeneraliseerde angststoornis"] },
      { code: "6A11", terms: ["Paniekstoornis"] },
      { code: "6A12", terms: ["Fobieën"] },

    { code: "6A2", terms: ["Obsessief-compulsieve en verwante stoornissen"] },
      { code: "6A20", terms: ["Obsessief-compulsieve stoornis (OCD)"] },
      { code: "6A21", terms: ["Body dysmorphic disorder"] },

    { code: "6A3", terms: ["Trauma- en stressorstoornissen"] },
      { code: "6A30", terms: ["PTSS"] },
      { code: "6A31", terms: ["Acute stressstoornis"] },

    { code: "6A4", terms: ["Psychotische stoornissen"] },
      { code: "6A40", terms: ["Schizofrenie"] },
      { code: "6A41", terms: ["Schizoaffectieve stoornis"] },

    { code: "6A5", terms: ["Gedrags- en impulsstoornissen"] },
      { code: "6A50", terms: ["Oppositioneel-opstandige stoornis (ODD)"] },
      { code: "6A51", terms: ["Normoverschrijdende gedragsstoornis"] },

    { code: "6A6", terms: ["Somatische-symptoomstoornissen"] },
      { code: "6A60", terms: ["Somatische-symptoomstoornis"] },
      { code: "6A61", terms: ["Ziekteangststoornis"] },

    { code: "6A7", terms: ["Persoonlijkheidsstoornissen"] },
	  
{ terms: ["Cluster A-persoonlijkheidsstoornissen - Het 'vreemde' cluster"], code: "6A70" },
{ terms: ["Paranoïde persoonlijkheidsstoornis (F60.0)"], code: "6A701" },
{ terms: ["Schizoïde persoonlijkheidsstoornis (F60.1)"], code: "6A702" },
{ terms: ["Schizotypische persoonlijkheidsstoornis (F21)"], code: "6A703" },

{ terms: ["Cluster B-persoonlijkheidsstoornissen - Het 'dramatische' cluster"], code: "6A71" },
{ terms: ["Antisociale/Dissociale persoonlijkheidsstoornis (F60.2)"], code: "6A711" },
{ terms: ["Borderline persoonlijkheidsstoornis (F60.3)"], code: "6A712" },
{ terms: ["Emotioneel instabiele persoonlijkheidsstoornis (F60.3)"], code: "6A713" },
{ terms: ["Histrionische/Theatrale/Hysterische persoonlijkheidsstoornis (F60.4)"], code: "6A714" },
{ terms: ["Narcistische persoonlijkheidsstoornis (F60.81)"], code: "6A715" },

{ terms: ["Cluster C-persoonlijkheidsstoornissen - Het 'angstige' cluster"], code: "6A72" },
{ terms: ["Vermijdende/Ontwijkende/Angstige persoonlijkheidsstoornis (F60.6)"], code: "6A721" },
{ terms: ["Afhankelijke/Dependent persoonlijkheidsstoornis (F60.7)"], code: "6A722" },
{ terms: ["Dwangmatige/Anankastische persoonlijkheidsstoornis (F60.5)"], code: "6A723" },
{ terms: ["Obsessieve-Compulsieve persoonlijkheidsstoornis (F60.5)"], code: "6A724" },

{ terms: ["Overige specifieke persoonlijkheidsstoornissen"], code: "6A73" },
{ terms: ["Excentrieke Persoonlijkheid"], code: "6A731" },
{ terms: ["Onstabiele/Haltlose/Stuurlose persoonlijkheid"], code: "6A732" },
{ terms: ["Onvolwasssen persoonlijkheid"], code: "6A733" },
{ terms: ["Psychoneurotische persoonlijkheid"], code: "6A734" },
{ terms: ["Passief-Agressieve persoonlijkheid"], code: "6A735" },
	  
    { code: "6A8", terms: ["Verslavingsstoornissen"] },
      { code: "6A80", terms: ["Stoornis in alcoholgebruik"] },
      { code: "6A81", terms: ["Stoornis in cannabisgebruik"] },
      { code: "6A82", terms: ["Stoornis in stimulantia‑gebruik"] },
      { code: "6A83", terms: ["Stoornis in opioïdengebruik"] },

  // =====================================================
  // PB — Slaap‑waakstoornissen (ICD‑11 7A)
  // =====================================================
  { code: "6B", terms: ["Slaap‑waakstoornissen (ICD‑11 7A)"] },

    { code: "6B0", terms: ["Insomniastoornissen"] },
      { code: "6B00", terms: ["Chronische insomnia"] },

    { code: "6B1", terms: ["Hypersomniastoornissen"] },
      { code: "6B10", terms: ["Idiopathische hypersomnie"] },

    { code: "6B2", terms: ["Circadianeritmestoornissen"] },
      { code: "6B20", terms: ["Vertraagde slaapfase"] },

    { code: "6B3", terms: ["Parasomnieën"] },
      { code: "6B30", terms: ["Nachtmerries"] },
      { code: "6B31", terms: ["Slaapwandelen"] },

  // =====================================================
  // PC — Kinderpsychiatrie (neuro‑ontwikkelingsstoornissen)
  // =====================================================
  { code: "6C", terms: ["Kinderpsychiatrie – Neuro‑ontwikkelingsstoornissen"] },

    { code: "6C0", terms: ["Autismespectrumstoornissen"] },
      { code: "6C00", terms: ["Autismespectrumstoornis"] },

    { code: "6C1", terms: ["Aandachts- en hyperactiviteitsstoornissen"] },
      { code: "6C10", terms: ["ADHD – gecombineerd beeld"] },
      { code: "6C11", terms: ["ADHD – onoplettend beeld"] },
      { code: "6C12", terms: ["ADHD – hyperactief‑impulsief beeld"] },

    { code: "6C2", terms: ["Leerstoornissen"] },
      { code: "6C20", terms: ["Leesstoornis"] },
      { code: "6C21", terms: ["Rekenstoornis"] },
      { code: "6C22", terms: ["Schriftelijke uitdrukkingsstoornis"] },

    { code: "6C3", terms: ["Ticstoornissen"] },
      { code: "6C30", terms: ["Gilles de la Tourette"] },
      { code: "6C31", terms: ["Persisterende ticstoornis"] },
      { code: "6C32", terms: ["Voorlopige ticstoornis"] },

    { code: "6C4", terms: ["Motorische ontwikkelingsstoornissen"] },
      { code: "6C40", terms: ["Coördinatieontwikkelingsstoornis"] },
      { code: "6C41", terms: ["Stereotiepe bewegingsstoornis"] },

    { code: "6C5", terms: ["Zindelijkheidsstoornissen"] },
      { code: "6C50", terms: ["Enuresis"] },
      { code: "6C51", terms: ["Encopresis"] },
	  
  { terms: ["DSM-classificatie (zie ook dsm-boom)"], code: "6D" },
  { terms: ["Neurobiologische ontwikkelingsstoornissen"], code: "6DA" },
  { terms: ["Schizofreniespectrum- en andere psychotische stoornissen"], code: "6DB" },
  { terms: ["Bipolaire-stemmingsstoornissen"], code: "6DC" },
  { terms: ["Depressieve stemmingsstoornissen"], code: "6DD" },
  { terms: ["Angststoornissen"], code: "6DE" },
  { terms: ["Obsessieve-compulsieve en verwante stoornissen"], code: "6DF" },
  { terms: ["Trauma- en stressorgerelateerde stoornissen"], code: "6DG" },
  { terms: ["Dissociatieve stoornissen"], code: "6DH" },
  { terms: ["Somatisch-symptoomstoornis en verwante stoornissen"], code: "6DI" },
  { terms: ["Voedings- en eetstoornissen"], code: "6DJ" },
  { terms: ["Stoornissen in de zindelijkheid"], code: "6DK" },
  { terms: ["Slaap-waakstoornissen"], code: "6DL" },
  { terms: ["Seksuele disfuncties"], code: "6DM" },
  { terms: ["Genderdysforie"], code: "6DN" },
  { terms: ["Disruptieve-, impulsbeheersings- en andere gedragsstoornissen"], code: "6DO" },
  { terms: ["Middelgerelateerde en verslavingsstoornissen"], code: "6DP" },
  { terms: ["Neurocognitieve stoornissen"], code: "6DQ" },
  { terms: ["Persoonlijkheidsstoornissen"], code: "6DR" },
  { terms: ["Parafiele stoornissen"], code: "6DS" },
  { terms: ["Overige psychische stoornissen"], code: "6DT" },
  { terms: ["Bewegingsstoornissen en andere bijwerkingen van medicatie"], code: "6DU" },
  { terms: ["Andere problemen die een reden van zorg kunnen zijn"], code: "6DV" },

{ terms: ["Neurologie"], code: "8A" },

  // 8A0 Cerebrovasculaire aandoeningen
  { code: "8A0", terms: ["Cerebrovasculaire aandoeningen"] },
    { code: "8A00", terms: ["Ischemisch CVA"] },
      { code: "8A000", terms: ["Herseninfarct"] },
      { code: "8A001", terms: ["TIA"] },
    { code: "8A01", terms: ["Hemorragisch CVA"] },
      { code: "8A010", terms: ["Intracerebrale bloeding"] },
      { code: "8A011", terms: ["Subarachnoïdale bloeding"] },
    { code: "8A02", terms: ["Cerebrale veneuze trombose"] },

  // 8A1 Neurodegeneratieve aandoeningen
  { code: "8A1", terms: ["Neurodegeneratieve aandoeningen"] },
    { code: "8A10", terms: ["Ziekte van Alzheimer"] },
    { code: "8A11", terms: ["Ziekte van Parkinson"] },
    { code: "8A13", terms: ["Amyotrofische laterale sclerose (ALS)"] },
    { code: "8A14", terms: ["Huntington"] },
    { code: "8A15", terms: ["Frontotemporale dementie"] },

  // 8A2 Epilepsie en aanvallen
  { code: "8A2", terms: ["Epilepsie en aanvallen"] },
    { code: "8A20", terms: ["Epilepsie"] },
      { code: "8A200", terms: ["Focale epilepsie"] },
      { code: "8A201", terms: ["Gegeneraliseerde epilepsie"] },
      { code: "8A202", terms: ["Epilepsiesyndromen"] },
    { code: "8A21", terms: ["Koortsstuipen"] },
    { code: "8A22", terms: ["Status epilepticus"] },

  // 8A3 Infecties van het zenuwstelsel
  { code: "8A3", terms: ["Infecties van het zenuwstelsel"] },
    { code: "8A30", terms: ["Meningitis"] },
      { code: "8A300", terms: ["Bacteriële meningitis"] },
      { code: "8A301", terms: ["Virale meningitis"] },
    { code: "8A31", terms: ["Encefalitis"] },
      { code: "8A310", terms: ["Virale encefalitis"] },
      { code: "8A311", terms: ["Auto-immuun encefalitis"] },
    { code: "8A32", terms: ["Myelitis"] },

  // 8A4 Neuromusculaire aandoeningen
  { code: "8A4", terms: ["Neuromusculaire aandoeningen"] },
    { code: "8A40", terms: ["Myasthenia gravis"] },
    { code: "8A41", terms: ["Spierdystrofieën"] },
      { code: "8A410", terms: ["Duchenne spierdystrofie"] },
      { code: "8A411", terms: ["Becker spierdystrofie"] },
    { code: "8A42", terms: ["Spinale spieratrofie (SMA)"] },
    { code: "8A43", terms: ["Metabole myopathieën"] },

  // 8A5 Perifere zenuwaandoeningen
  { code: "8A5", terms: ["Perifere zenuwaandoeningen"] },
    { code: "8A50", terms: ["Polyneuropathie"] },
      { code: "8A500", terms: ["Diabetische polyneuropathie"] },
      { code: "8A501", terms: ["Alcoholische polyneuropathie"] },
    { code: "8A51", terms: ["Mononeuropathieën"] },
      { code: "8A510", terms: ["Carpaletunnelsyndroom"] },
      { code: "8A511", terms: ["Ulnaris neuropathie"] },
    { code: "8A52", terms: ["Guillain-Barré syndroom"] },

  // 8A6 Bewegingsstoornissen
  { code: "8A6", terms: ["Bewegingsstoornissen"] },
    { code: "8A60", terms: ["Tremor"] },
    { code: "8A61", terms: ["Dystonie"] },
    { code: "8A62", terms: ["Tics en Tourette"] },
    { code: "8A63", terms: ["Ataxie"] },

  // 8A7 Hoofdpijn- en pijnsyndromen
  { code: "8A7", terms: ["Hoofdpijn- en pijnsyndromen"] },
    { code: "8A70", terms: ["Migraine"] },
    { code: "8A71", terms: ["Clusterhoofdpijn"] },
    { code: "8A72", terms: ["Spanningshoofdpijn"] },
    { code: "8A73", terms: ["Neuralgie"] },
      { code: "8A730", terms: ["Trigeminusneuralgie"] },

  // 8A8 Structurele en traumatische aandoeningen
  { code: "8A8", terms: ["Structurele en traumatische aandoeningen"] },
    { code: "8A80", terms: ["Hersentumoren (benigne)"] },
    { code: "8A81", terms: ["Hersentumoren (maligne)"] },
    { code: "8A82", terms: ["Traumatisch hersenletsel (TBI)"] },
      { code: "8A820", terms: ["Commotio cerebri"] },
      { code: "8A821", terms: ["Contusio cerebri"] },
    { code: "8A83", terms: ["Ruggenmergletsel"] },

  // 8A9 Overige neurologische aandoeningen
  { code: "8A9", terms: ["Overige neurologische aandoeningen"] },
    { code: "8A90", terms: ["Hydrocefalie"] },
    { code: "8A91", terms: ["Cerebrale parese"] },
    { code: "8A92", terms: ["Zeldzame neurologische syndromen"] },

{ terms: ["Oftalmologie"], code: "9A" },

  // 9A0 Aandoeningen van oogleden en orbita
  { code: "9A0", terms: ["Aandoeningen van oogleden en orbita"] },
    { code: "9A00", terms: ["Blefaritis"] },
    { code: "9A01", terms: ["Chalazion"] },
    { code: "9A02", terms: ["Hordeolum (strontje)"] },
    { code: "9A03", terms: ["Ptosis"] },
    { code: "9A04", terms: ["Entropion"] },
    { code: "9A05", terms: ["Ectropion"] },
    { code: "9A06", terms: ["Orbitale cellulitis"] },

  // 9A1 Conjunctivale aandoeningen
  { code: "9A1", terms: ["Conjunctivale aandoeningen"] },
    { code: "9A10", terms: ["Conjunctivitis"] },
      { code: "9A100", terms: ["Virale conjunctivitis"] },
      { code: "9A101", terms: ["Bacteriële conjunctivitis"] },
      { code: "9A102", terms: ["Allergische conjunctivitis"] },
    { code: "9A11", terms: ["Pterygium"] },
    { code: "9A12", terms: ["Pinguecula"] },

  // 9A2 Corneale aandoeningen
  { code: "9A2", terms: ["Corneale aandoeningen"] },
    { code: "9A20", terms: ["Keratitis"] },
      { code: "9A200", terms: ["Bacteriële keratitis"] },
      { code: "9A201", terms: ["Virale keratitis (HSV)"] },
      { code: "9A202", terms: ["Fungale keratitis"] },
    { code: "9A21", terms: ["Keratoconus"] },
    { code: "9A22", terms: ["Corneale dystrofieën"] },
    { code: "9A23", terms: ["Corneale erosies"] },

  // 9A3 Sclerale en uveale aandoeningen
  { code: "9A3", terms: ["Sclerale en uveale aandoeningen"] },
    { code: "9A30", terms: ["Uveïtis"] },
      { code: "9A300", terms: ["Anterior uveïtis"] },
      { code: "9A301", terms: ["Posterior uveïtis"] },
      { code: "9A302", terms: ["Panuveïtis"] },
    { code: "9A31", terms: ["Scleritis"] },
    { code: "9A32", terms: ["Episcleritis"] },

  // 9A4 Cataract en lensafwijkingen
  { code: "9A4", terms: ["Cataract en lensafwijkingen"] },
    { code: "9A40", terms: ["Cataract"] },
      { code: "9A400", terms: ["Nucleair cataract"] },
      { code: "9A401", terms: ["Corticaal cataract"] },
      { code: "9A402", terms: ["Subcapsulair cataract"] },
    { code: "9A41", terms: ["Aangeboren cataract"] },
    { code: "9A42", terms: ["Lensluxatie"] },

  // 9A5 Glaucoom en oogdrukstoornissen
  { code: "9A5", terms: ["Glaucoom en oogdrukstoornissen"] },
    { code: "9A50", terms: ["Primair openkamerhoekglaucoom"] },
    { code: "9A51", terms: ["Gesloten kamerhoekglaucoom"] },
    { code: "9A52", terms: ["Normotensief glaucoom"] },
    { code: "9A53", terms: ["Oculaire hypertensie"] },

  // 9A6 Netvlies- en glasvochtaandoeningen
  { code: "9A6", terms: ["Netvlies- en glasvochtaandoeningen"] },
    { code: "9A60", terms: ["Netvliesloslating"] },
    { code: "9A61", terms: ["Maculadegeneratie (AMD)"] },
      { code: "9A610", terms: ["Droge AMD"] },
      { code: "9A611", terms: ["Natte AMD"] },
    { code: "9A62", terms: ["Diabetische retinopathie"] },
    { code: "9A63", terms: ["Retinale veneuze occlusie"] },
    { code: "9A64", terms: ["Retinale arteriële occlusie"] },
    { code: "9A65", terms: ["Glasvochtbloeding"] },

  // 9A7 Oogspier- en oogbewegingsstoornissen
  { code: "9A7", terms: ["Oogspier- en oogbewegingsstoornissen"] },
    { code: "9A70", terms: ["Strabisme"] },
      { code: "9A700", terms: ["Esotropie"] },
      { code: "9A701", terms: ["Exotropie"] },
    { code: "9A71", terms: ["Nystagmus"] },
    { code: "9A72", terms: ["Oculomotore neuropathieën"] },

  // 9A8 Optische zenuwaandoeningen
  { code: "9A8", terms: ["Optische zenuwaandoeningen"] },
    { code: "9A80", terms: ["Opticusneuritis"] },
    { code: "9A81", terms: ["Opticusatrofie"] },
    { code: "9A82", terms: ["Compressieve opticusneuropathie"] },

  // 9A9 Overige oogaandoeningen
  { code: "9A9", terms: ["Overige oogaandoeningen"] },
    { code: "9A90", terms: ["Droge ogen (keratoconjunctivitis sicca)"] },
    { code: "9A91", terms: ["Oogpijn"] },
    { code: "9A92", terms: ["Visusstoornissen N.O.S."] },

{ terms: ["Neus- keel en oorziekten | Stomatologie - ORL",], code: "A" },

  { code: "AA", terms: ["Ziekten van het oor"] },
  // AA0 Aandoeningen van de uitwendige gehoorgang
  { code: "AA0", terms: ["Aandoeningen van de uitwendige gehoorgang"] },
    { code: "AA00", terms: ["Otitis externa"] },
      { code: "AA000", terms: ["Acute otitis externa"] },
      { code: "AA001", terms: ["Chronische otitis externa"] },
    { code: "AA01", terms: ["Cerumenimpactie"] },
    { code: "AA02", terms: ["Exostosen van de gehoorgang"] },

  // AA1 Aandoeningen van het trommelvlies
  { code: "AA1", terms: ["Aandoeningen van het trommelvlies"] },
    { code: "AA10", terms: ["Trommelvliesperforatie"] },
    { code: "AA11", terms: ["Trommelvliesatrofie"] },
    { code: "AA12", terms: ["Myringitis"] },

  // AA2 Middenoorontstekingen
  { code: "AA2", terms: ["Middenoorontstekingen"] },
    { code: "AA20", terms: ["Acute otitis media"] },
    { code: "AA21", terms: ["Chronische otitis media"] },
    { code: "AA22", terms: ["Otitis media met effusie"] },
    { code: "AA23", terms: ["Cholesteatoom"] },

  // AA3 gehoorverlies
  
{ code: "AA3", terms: ["Gehoorverlies"] },

{ code: "AA31", terms: ["Congenitale geleidingsdoofheid"] },
{ code: "AA32", terms: ["Verworven geleidingsdoofheid"] },

{ code: "AA33", terms: ["Congenitale perceptie doofheid"] },
{ code: "AA34", terms: ["Verworven perceptiedoofheid - sensorineuraal gehoorverlies"] },

{ code: "AA35", terms: ["Congenitaal gemengd gehoorverlies"] },
{ code: "AA36", terms: ["Verworven gemengd gehoorverlies"] },

{ code: "AA38", terms: ["Overige vormen van gehoorverlies"] },

  // AA5 Vestibulair syndroom - Vertigo
  
  { code: "AA5", terms: ["Evenwicht - Balans - Coördinatie"] }, 
  
  { code: "AA50", terms: ["Perifeer vestibulair syndroom"] },
 
  { code: "AA51", terms: ["Centraal vestibulair syndroom"] },
   
  { code: "AA54", terms: ["Vertigo"] },
	 
  // AA6 Aandoeningen van de buis van Eustachius
  { code: "AA6", terms: ["Aandoeningen van de buis van Eustachius"] },
    { code: "AA60", terms: ["Dysfunctie van de buis van Eustachius"] },
    { code: "AA61", terms: ["Obstructie van de buis van Eustachius"] },

  // AA7 Oortumoren
  { code: "AA7", terms: ["Oortumoren"] },
    { code: "AA70", terms: ["Goedaardige oortumoren"] },
      { code: "AA700", terms: ["Glomustumor"] },
    { code: "AA71", terms: ["Maligne oortumoren"] },

  // AA8 Postoperatieve en procedurele aandoeningen
  { code: "AA8", terms: ["Postoperatieve en procedurele aandoeningen"] },
    { code: "AA80", terms: ["Complicaties na tympanoplastiek"] },
    { code: "AA81", terms: ["Complicaties na cochleaire implantatie"] },

  // AA9 Overige ooraandoeningen
  { code: "AA9", terms: ["Overige ooraandoeningen"] },
    { code: "AA90", terms: ["Tinnitus"] },
    { code: "AA91", terms: ["Hyperacusis"] },
    { code: "AA92", terms: ["Oorpijn N.O.S."] },
	
	// AB Neus en sinussen

  { code: "AB", terms: ["Neus en sinussen"] },
    { code: "AB0", terms: ["Rinitis"] },
      { code: "AB00", terms: ["Allergische rinitis"] },
      { code: "AB01", terms: ["Niet-allergische rinitis"] },
    { code: "AB1", terms: ["Sinusitis"] },
      { code: "AB10", terms: ["Acute sinusitis"] },
      { code: "AB11", terms: ["Chronische sinusitis"] },
      { code: "AB12", terms: ["Poliepen van de sinussen"] },
    { code: "AB2", terms: ["Neusobstructie"] },
      { code: "AB20", terms: ["Septumdeviatie"] },
      { code: "AB21", terms: ["Hypertrofie van de conchae"] },
    { code: "AB3", terms: ["Neusbloedingen"] },
      { code: "AB30", terms: ["Epistaxis anterior"] },
      { code: "AB31", terms: ["Epistaxis posterior"] },
    { code: "AB4", terms: ["Neustumoren"] },
      { code: "AB40", terms: ["Benigne neustumoren"] },
      { code: "AB41", terms: ["Maligne neustumoren"] },

  // AC Keel, farynx en larynx
  { code: "AC", terms: ["Keel, farynx en larynx"] },
    { code: "AC0", terms: ["Faryngitis"] },
      { code: "AC00", terms: ["Acute faryngitis"] },
      { code: "AC01", terms: ["Chronische faryngitis"] },
    { code: "AC1", terms: ["Tonsillaire aandoeningen"] },
      { code: "AC10", terms: ["Tonsillitis"] },
      { code: "AC11", terms: ["Peritonsillair abces"] },
    { code: "AC2", terms: ["Laryngitis"] },
      { code: "AC20", terms: ["Acute laryngitis"] },
      { code: "AC21", terms: ["Chronische laryngitis"] },
    { code: "AC3", terms: ["Stembandstoornissen"] },
      { code: "AC30", terms: ["Stembandnoduli"] },
      { code: "AC31", terms: ["Stembandparalyse"] },
    { code: "AC4", terms: ["Larynxtumoren"] },
      { code: "AC40", terms: ["Benigne larynxtumoren"] },
      { code: "AC41", terms: ["Larynxcarcinoom"] },

  // AD Mond, tanden en speekselklieren (stomatologie)
  { code: "AD", terms: ["Mond, tanden en speekselklieren"] },
    { code: "AD0", terms: ["Mondslijmvliesaandoeningen"] },
      { code: "AD00", terms: ["Stomatitis"] },
      { code: "AD01", terms: ["Aften"] },
      { code: "AD02", terms: ["Orale candidiasis"] },
    { code: "AD1", terms: ["Tandheelkundige aandoeningen"] },
      { code: "AD10", terms: ["Caries"] },
      { code: "AD11", terms: ["Pulpitis"] },
      { code: "AD12", terms: ["Parodontitis"] },
    { code: "AD2", terms: ["Speekselkliertumoren en -aandoeningen"] },
      { code: "AD20", terms: ["Sialolithiasis"] },
      { code: "AD21", terms: ["Sialadenitis"] },
      { code: "AD22", terms: ["Speekselkliertumoren"] },

  // AE Mastoïd en temporale botziekten
  { code: "AE", terms: ["Mastoïd en temporale botziekten"] },
    { code: "AE0", terms: ["Mastoiditis"] },
      { code: "AE00", terms: ["Acute mastoiditis"] },
      { code: "AE01", terms: ["Chronische mastoiditis"] },
    { code: "AE1", terms: ["Complicaties van middenoorziekten"] },
      { code: "AE10", terms: ["Petrositis"] },
      { code: "AE11", terms: ["Intracraniële complicaties"] },
    { code: "AE2", terms: ["Temporale botafwijkingen"] },
      { code: "AE20", terms: ["Osteitis van het temporale bot"] },
      { code: "AE21", terms: ["Goedaardige tumoren van het temporale bot"] },
      { code: "AE22", terms: ["Maligne tumoren van het temporale bot"] },	

{ terms: ["Ziekten van het circulatiesysteem | Cardiologie"], code: "BA" },

// Hoofdstuk BA — Hart- en vaatziekten

  { terms: ["Hartziekten | Cardiologie"], code: "BA0" },

  { code: "BA00", terms: ["Ischemische hartziekten"] },
    { code: "BA000", terms: ["Stabiele angina pectoris"] },
    { code: "BA001", terms: ["Instabiele angina pectoris"] },
    { code: "BA002", terms: ["Myocardinfarct"] },
    { code: "BA0020", terms: ["STEMI"] },
    { code: "BA0021", terms: ["NSTEMI"] },
    { code: "BA003", terms: ["Chronische ischemische hartziekte"] },

  { code: "BA01", terms: ["Hartfalen"] },
    { code: "BA010", terms: ["Acuut hartfalen"] },
	{ code: "BA011", terms: ["Hartfalen linker ventrikel"] },
    { code: "BA012", terms: ["Hartfalen rechter ventrikel"] },
	{ code: "BA018", terms: ["Congestief hartfalen"] },
	{ code: "BA019", terms: ["Overige vormen van hartfalen"] },

  { code: "BA02", terms: ["Cardiomyopathieën"] },
    { code: "BA020", terms: ["Dilaterende cardiomyopathie"] },
    { code: "BA021", terms: ["Hypertrofische cardiomyopathie"] },
    { code: "BA022", terms: ["Restrictieve cardiomyopathie"] },
    { code: "BA023", terms: ["Aritmogene RV cardiomyopathie"] },
    { code: "BA024", terms: ["Peripartum cardiomyopathie"] },
    { code: "BA025", terms: ["Tako‑tsubo cardiomyopathie"] },

  { code: "BA03", terms: ["Kleplijden"] },
    { code: "BA030", terms: ["Aortaklepstenose"] },
    { code: "BA031", terms: ["Aortaklepinsufficiëntie"] },
    { code: "BA032", terms: ["Mitrale stenose"] },
    { code: "BA033", terms: ["Mitrale insufficiëntie"] },
    { code: "BA034", terms: ["Tricuspidalisklepinsufficiëntie"] },
    { code: "BA035", terms: ["Pulmonalisklepafwijkingen"] },
    { code: "BA036", terms: ["Endocarditis"] },

  { code: "BA04", terms: ["Hartritmestoornissen"] },
  
    { code: "BA040", terms: ["Supraventriculaire bradycardie"] },
	
	{ code: "BA041", terms: ["Supraventriculaire tachycardie"] },
	  { code: "BA0410", terms: ["Atriumfibrilleren"] },
      { code: "BA0411", terms: ["Atriumflutter"] },
      { code: "BA0412", terms: ["AVNRT / AVRT"] },
	  { code: "BA0419", terms: ["Overige supraventriculaire tachycardie"] },
	
	{ code: "BA042", terms: ["Ritme stoornis thv. atrioventriculaire junctie"] },
		{ code: "BA0421", terms: ["Junctionele ritmes"] },
		{ code: "BA0422", terms: ["Junctionele extrasystolen"] },
		{ code: "BA0423", terms: ["Junctionele tachycardieën"] },
		{ code: "BA0424", terms: ["AV-nodale re-entry tachycardie"] },
		{ code: "BA0429", terms: ["Overige ritmestoornis thv. atrioventriculaire junctie"] },
	
    { code: "BA044", terms: ["Ventriculaire ritmestoornissen"] },
      { code: "BA0441", terms: ["Ventriculaire tachycardie"] },
      { code: "BA0442", terms: ["Ventriculaire fibrillatie"] },
	  { code: "BA0443", terms: ["Ventriculaire premature depolarisatie"] },
      { code: "BA0444", terms: ["Re-entry ventriculaire aritmie"] },
	  { code: "BA0449", terms: ["Overige ventriculaire ritmestoornissen"] },
	  
    { code: "BA045", terms: ["Geleidingsstoornissen"] },
      { code: "BA0451", terms: ["Atrioventriculaire blok"] },
      { code: "BA0454", terms: ["Bundeltakblok"] },
	  { code: "BA0459", terms: ["Overige geleidingsstoornissen"] },
	  
   { code: "BA046", terms: ["Hartaritmie van genetische oorsprong"] },
   { code: "BA047", terms: ["Disfunctie of verwikkeling pacemaker"] },
   
   { code: "BA049", terms: ["Overige vormen van hartritmestoornissen"] },
   	  
  { code: "BA05", terms: ["Pericardiale aandoeningen"] },
    { code: "BA050", terms: ["Acuut pericarditis"] },
    { code: "BA051", terms: ["Chronisch pericarditis"] },
    { code: "BA052", terms: ["Pericardiale effusie"] },
    { code: "BA053", terms: ["Harttamponade"] },
    { code: "BA054", terms: ["Constrictieve pericarditis"] },

  { code: "BA06", terms: ["Aangeboren hartafwijkingen"] },
    { code: "BA060", terms: ["VSD"] },
    { code: "BA061", terms: ["ASD"] },
    { code: "BA062", terms: ["PDA"] },
    { code: "BA063", terms: ["Tetralogie van Fallot"] },
    { code: "BA064", terms: ["Transpositie van de grote vaten"] },
    { code: "BA065", terms: ["Coarctatio aortae"] },

  { code: "BA07", terms: ["Overige hartziekten"] },
    { code: "BA070", terms: ["Myocarditis"] },
    { code: "BA071", terms: ["Cardiale tumoren"] },
    { code: "BA072", terms: ["Cardiale betrokkenheid bij systemische ziekten"] },
    { code: "BA073", terms: ["Complicaties van cardiale procedures"] },

  // BA10 Hypertensieve ziekten
  
    { terms: ["Vaatziekten"], code: "BA1" },

    { code: "BA10", terms: ["Hypertensieve ziekten"] },
    { code: "BA100", terms: ["Primaire hypertensie"] },
    { code: "BA101", terms: ["Secundaire hypertensie"] },
    { code: "BA102", terms: ["Hypertensieve crisis"] },

  // BA11 Atherosclerose
  { code: "BA11", terms: ["Atherosclerose"] },
    { code: "BA110", terms: ["Atherosclerose van grote arteriën"] },
    { code: "BA111", terms: ["Atherosclerose van perifere arteriën"] },
    { code: "BA112", terms: ["Atherosclerose van viscerale arteriën"] },

  // BA12 Aneurysmata en dissecties
  { code: "BA12", terms: ["Aneurysmata en dissecties"] },
    { code: "BA120", terms: ["Aorta-aneurysma"] },
    { code: "BA121", terms: ["Aortadissectie"] },
    { code: "BA122", terms: ["Perifere aneurysmata"] },

  // BA13 Perifere arteriële ziekten (PAD)
  { code: "BA13", terms: ["Perifere arteriële ziekten"] },
    { code: "BA130", terms: ["Claudicatio intermittens"] },
    { code: "BA131", terms: ["Kritieke ischemie"] },
    { code: "BA132", terms: ["Acute arteriële occlusie"] },

  // BA14 Veneuze ziekten
  { code: "BA14", terms: ["Veneuze ziekten"] },
    { code: "BA140", terms: ["Varices"] },
    { code: "BA141", terms: ["Chronische veneuze insufficiëntie"] },
    { code: "BA142", terms: ["Diepe veneuze trombose (DVT)"] },
    { code: "BA143", terms: ["Longembolie (PE)"] },
    { code: "BA144", terms: ["Oppervlakkige tromboflebitis"] },

  // BA15 Lymfatische ziekten
  { code: "BA15", terms: ["Lymfatische ziekten"] },
    { code: "BA150", terms: ["Lymfoedeem (primair)"] },
    { code: "BA151", terms: ["Lymfoedeem (secundair)"] },
    { code: "BA152", terms: ["Lymfangitis"] },

  // BA16 Vasculitis
  { code: "BA16", terms: ["Vasculitis"] },
    { code: "BA160", terms: ["Grote-vat vasculitis"] },
      { code: "BA1600", terms: ["Reuscelarteriitis"] },
      { code: "BA1601", terms: ["Takayasu-arteriitis"] },
    { code: "BA161", terms: ["Middelgrote-vat vasculitis"] },
      { code: "BA1610", terms: ["Polyarteritis nodosa"] },
      { code: "BA1611", terms: ["Kawasaki-ziekte"] },
    { code: "BA162", terms: ["Kleine-vat vasculitis"] },
      { code: "BA1620", terms: ["ANCA-geassocieerde vasculitis"] },
      { code: "BA1621", terms: ["IgA‑vasculitis (Henoch–Schönlein)"] },
      { code: "BA1622", terms: ["Cryoglobulinemische vasculitis"] },

  // BA17 Microvasculaire aandoeningen
  { code: "BA17", terms: ["Microvasculaire aandoeningen"] },
    { code: "BA170", terms: ["Microangiopathie"] },
    { code: "BA171", terms: ["Endotheeldisfunctie"] },

  // BA18 Overige vasculaire aandoeningen
  { code: "BA18", terms: ["Overige vasculaire aandoeningen"] },
    { code: "BA180", terms: ["Raynaud‑fenomeen"] },
    { code: "BA181", terms: ["Trombangiitis obliterans (Buerger)"] },
    { code: "BA182", terms: ["Vasculaire malformaties"] },
    { code: "BA183", terms: ["Complicaties van vasculaire procedures"] },

// BA2 Atherosclerose
{ code: "BA2",  terms: ["Atherosclerose"] },
  { code: "BA20", terms: ["Atherosclerose van grote arteriën"] },
  { code: "BA21", terms: ["Atherosclerose van perifere arteriën"] },
  { code: "BA22", terms: ["Atherosclerose van viscerale arteriën"] },

  // BA3 Aneurysmata en dissecties
  { code: "BA3", terms: ["Aneurysmata en dissecties"] },
    { code: "BA30", terms: ["Aorta-aneurysma"] },
      { code: "BA300", terms: ["Abdominaal aorta-aneurysma (AAA)"] },
      { code: "BA301", terms: ["Thoracaal aorta-aneurysma"] },
    { code: "BA31", terms: ["Aortadissectie"] },
      { code: "BA310", terms: ["Type A dissectie"] },
      { code: "BA311", terms: ["Type B dissectie"] },
    { code: "BA32", terms: ["Perifere aneurysmata"] },
      { code: "BA320", terms: ["Poplitea-aneurysma"] },
      { code: "BA321", terms: ["Iliaca-aneurysma"] },

  // BA4 Perifere arteriële ziekten (PAD)
  { code: "BA4", terms: ["Perifere arteriële ziekten"] },
    { code: "BA40", terms: ["Claudicatio intermittens"] },
    { code: "BA41", terms: ["Kritieke ledematen ischemie"] },
    { code: "BA42", terms: ["Acute arteriële occlusie"] },
    { code: "BA43", terms: ["Viscerale arteriële occlusies"] },

  // BA5 Veneuze ziekten
  { code: "BA5", terms: ["Veneuze ziekten"] },
    { code: "BA50", terms: ["Varices"] },
    { code: "BA51", terms: ["Chronische veneuze insufficiëntie"] },
    { code: "BA52", terms: ["Diepe veneuze trombose (DVT)"] },
    { code: "BA53", terms: ["Longembolie (PE)"] },
    { code: "BA54", terms: ["Oppervlakkige tromboflebitis"] },

  // BA6 Lymfatische ziekten
  { code: "BA6", terms: ["Lymfatische ziekten"] },
    { code: "BA60", terms: ["Primair lymfoedeem"] },
    { code: "BA61", terms: ["Secundair lymfoedeem"] },
    { code: "BA62", terms: ["Lymfangitis"] },
    { code: "BA63", terms: ["Lymfatische malformaties"] },

  // BA7 Vasculitis
  { code: "BA7", terms: ["Vasculitis"] },

    { code: "BA70", terms: ["Grote-vat vasculitis"] },
      { code: "BA700", terms: ["Reuscelarteriitis (GCA)"] },
      { code: "BA701", terms: ["Takayasu-arteriitis"] },

    { code: "BA71", terms: ["Middelgrote-vat vasculitis"] },
      { code: "BA710", terms: ["Polyarteritis nodosa"] },
      { code: "BA711", terms: ["Kawasaki-ziekte"] },

    { code: "BA72", terms: ["Kleine-vat vasculitis"] },
      { code: "BA720", terms: ["ANCA-geassocieerde vasculitis"] },
      { code: "BA721", terms: ["IgA‑vasculitis (Henoch–Schönlein)"] },
      { code: "BA722", terms: ["Cryoglobulinemische vasculitis"] },

  // BA8 Microvasculaire aandoeningen
  { code: "BA8", terms: ["Microvasculaire aandoeningen"] },
    { code: "BA80", terms: ["Microangiopathie"] },
    { code: "BA81", terms: ["Endotheeldisfunctie"] },
    { code: "BA82", terms: ["Capillaire lekkage syndroom"] },

  // BA9 Overige vasculaire aandoeningen
  { code: "BA9", terms: ["Overige vasculaire aandoeningen"] },
    { code: "BA90", terms: ["Raynaud-fenomeen"] },
    { code: "BA91", terms: ["Trombangiitis obliterans (Buerger)"] },
    { code: "BA92", terms: ["Vasculaire malformaties"] },
    { code: "BA93", terms: ["Complicaties van vasculaire procedures"] },

{ terms: ["Ziekten van het ademhalingssysteem | Pneumologie"], code: "CA" },

  // CA0 Bovenste luchtwegaandoeningen
  { code: "CA0", terms: ["Bovenste luchtwegaandoeningen"] },
    { code: "CA00", terms: ["Rinitis"] },
      { code: "CA000", terms: ["Allergische rinitis"] },
      { code: "CA001", terms: ["Niet‑allergische rinitis"] },
    { code: "CA01", terms: ["Sinusitis"] },
      { code: "CA010", terms: ["Acute sinusitis"] },
      { code: "CA011", terms: ["Chronische sinusitis"] },
    { code: "CA02", terms: ["Faryngitis"] },
    { code: "CA03", terms: ["Laryngitis"] },
    { code: "CA04", terms: ["Bovenste luchtwegobstructie"] },

  // CA1 Infecties van de onderste luchtwegen
  { code: "CA1", terms: ["Infecties van de onderste luchtwegen"] },
    { code: "CA10", terms: ["Acute bronchitis"] },
    { code: "CA11", terms: ["Bronchiolitis"] },
    { code: "CA12", terms: ["Pneumonie"] },
      { code: "CA120", terms: ["Community‑acquired pneumonie (CAP)"] },
      { code: "CA121", terms: ["Hospital‑acquired pneumonie (HAP)"] },
      { code: "CA122", terms: ["Atypische pneumonie"] },
    { code: "CA13", terms: ["Tuberculose van de longen"] },
    { code: "CA14", terms: ["Schimmelinfecties van de longen"] },

  // CA2 Obstructieve longziekten
  { code: "CA2", terms: ["Obstructieve longziekten"] },
    { code: "CA20", terms: ["Astma"] },
      { code: "CA200", terms: ["Allergisch astma"] },
      { code: "CA201", terms: ["Niet‑allergisch astma"] },
      { code: "CA202", terms: ["Ernstig astma"] },
      { code: "CA209", terms: ["Astma NNO"] },
	  
    { code: "CA21", terms: ["COPD"] },
      { code: "CA210", terms: ["Chronische bronchitis"] },
      { code: "CA211", terms: ["Emfyseem"] },
    { code: "CA22", terms: ["Bronchiëctasieën"] },

  // CA3 Interstitiële longziekten (ILD)
  { code: "CA3", terms: ["Interstitiële longziekten"] },
    { code: "CA30", terms: ["Idiopathische pulmonale fibrose (IPF)"] },
    { code: "CA31", terms: ["Sarcoïdose van de longen"] },
    { code: "CA32", terms: ["Hypersensitiviteitspneumonitis"] },
    { code: "CA33", terms: ["Pneumoconiosen"] },
      { code: "CA330", terms: ["Silicose"] },
      { code: "CA331", terms: ["Asbestose"] },
      { code: "CA332", terms: ["Kolenstoflong"] },
    { code: "CA34", terms: ["IL‑gerelateerde auto‑immuunziekten"] },

  // CA4 Pleura‑aandoeningen
  { code: "CA4", terms: ["Pleura‑aandoeningen"] },
    { code: "CA40", terms: ["Pleura‑effusie"] },
    { code: "CA41", terms: ["Pneumothorax"] },
      { code: "CA410", terms: ["Spontane pneumothorax"] },
      { code: "CA411", terms: ["Traumatische pneumothorax"] },
    { code: "CA42", terms: ["Empyeem"] },

  // CA5 Pulmonale vasculaire aandoeningen
  { code: "CA5", terms: ["Pulmonale vasculaire aandoeningen"] },
    { code: "CA50", terms: ["Pulmonale hypertensie"] },
      { code: "CA500", terms: ["Pulmonale arteriële hypertensie (PAH)"] },
      { code: "CA501", terms: ["PH door linkerhartziekte"] },
      { code: "CA502", terms: ["PH door longziekte of hypoxie"] },
      { code: "CA503", terms: ["Chronische trombo‑embolische PH (CTEPH)"] },
    { code: "CA51", terms: ["Longembolie"] },
    { code: "CA52", terms: ["Pulmonale vasculitis"] },

  // CA6 Longtumoren
  { code: "CA6", terms: ["Longtumoren"] },
    { code: "CA60", terms: ["Niet‑kleincellig longcarcinoom (NSCLC)"] },
      { code: "CA600", terms: ["Adenocarcinoom"] },
      { code: "CA601", terms: ["Plaveiselcelcarcinoom"] },
      { code: "CA602", terms: ["Grootcellig carcinoom"] },
    { code: "CA61", terms: ["Kleincellig longcarcinoom (SCLC)"] },
    { code: "CA62", terms: ["Goedaardige longtumoren"] },
    { code: "CA63", terms: ["Carcinoïd tumoren"] },

  // CA7 Aandoeningen van de luchtwegen en thoraxwand
  { code: "CA7", terms: ["Aandoeningen van luchtwegen en thoraxwand"] },
    { code: "CA70", terms: ["Tracheale aandoeningen"] },
      { code: "CA700", terms: ["Tracheomalacie"] },
      { code: "CA701", terms: ["Tracheale stenose"] },
    { code: "CA71", terms: ["Bronchiale stenose"] },
    { code: "CA72", terms: ["Thoraxwandafwijkingen"] },
      { code: "CA720", terms: ["Pectus excavatum"] },
      { code: "CA721", terms: ["Pectus carinatum"] },

  // CA8 Slaapgerelateerde ademhalingsstoornissen
  { code: "CA8", terms: ["Slaapgerelateerde ademhalingsstoornissen"] },
    { code: "CA80", terms: ["Obstructief slaapapneusyndroom (OSAS)"] },
    { code: "CA81", terms: ["Centrale slaapapneu"] },
    { code: "CA82", terms: ["Hypoventilatiesyndromen"] },

  // CA9 Overige ademhalingsziekten
  { code: "CA9", terms: ["Overige ademhalingsziekten"] },
    { code: "CA90", terms: ["Aspiratie‑aandoeningen"] },
    { code: "CA91", terms: ["Inhalatie‑trauma (rook, chemicaliën)"] },
    { code: "CA92", terms: ["Bronchospasme niet elders geclassificeerd"] },
    { code: "CA93", terms: ["Complicaties van respiratoire procedures"] },

{ terms: ["Ziekten van het spijsverteringsstelsel | Gastroenterologie"], code: "DA" },

  // DA0 Oesofageale aandoeningen
  { code: "DA0", terms: ["Slokdarm aandoeningen"] },
  
  { code: "DA00", terms: ["Oesofagitis"] },
 
    { code: "DA02", terms: ["Slokdarm zweer of  perforatie"] },
	
	{ code: "DA03", terms: ["Stoornis oesofageale motiliteit - Slokdarm peristalsis"] },
	  
    { code: "DA04", terms: ["Gastro‑oesofageale refluxziekte (GERD)"] },
 	  
    { code: "DA06", terms: ["Anatomische afwijking slokdarm"] },
	{ code: "DA062", terms: ["Verworven afwijking slokdarm"] },
	{ code: "DA061", terms: ["Aangeboren afwijking (structurele) slokdarm"] },
		
    { code: "DA07", terms: ["Vasculaire stoornis slokdarm"] },
	
    { code: "DA08", terms: ["Slokdarm neoplasma"] },

  // DA1 Maag‑ en duodenumziekten
  { code: "DA1", terms: ["Maag‑ en duodenumziekten"] },
    { code: "DA10", terms: ["Gastritis"] },
      { code: "DA100", terms: ["Acute gastritis"] },
      { code: "DA101", terms: ["Chronische gastritis"] },
    { code: "DA11", terms: ["Peptisch ulcus"] },
      { code: "DA110", terms: ["Maagulcus"] },
      { code: "DA111", terms: ["Duodenumulcus"] },
    { code: "DA12", terms: ["Functionele dyspepsie"] },
    { code: "DA13", terms: ["Gastroparese"] },
    { code: "DA14", terms: ["Maag‑ en duodenumtumoren"] },

  // DA2 Leverziekten
  { code: "DA2", terms: ["Leverziekten"] },
    { code: "DA20", terms: ["Acute hepatitis"] },
      { code: "DA200", terms: ["Virale hepatitis"] },
      { code: "DA201", terms: ["Toxische hepatitis"] },
    { code: "DA21", terms: ["Chronische hepatitis"] },
    { code: "DA22", terms: ["Levercirrose"] },
    { code: "DA23", terms: ["Leverfalen"] },
    { code: "DA24", terms: ["Niet‑alcoholische leververvetting (NAFLD)"] },
    { code: "DA25", terms: ["Alcoholische leverziekte"] },
    { code: "DA26", terms: ["Leverfibrose"] },
    { code: "DA27", terms: ["Leverneoplasieën"] },

  // DA3 Galblaas‑ en galwegziekten
  { code: "DA3", terms: ["Galblaas‑ en galwegziekten"] },
    { code: "DA30", terms: ["Cholelithiasis (galstenen)"] },
    { code: "DA31", terms: ["Cholecystitis"] },
      { code: "DA310", terms: ["Acute cholecystitis"] },
      { code: "DA311", terms: ["Chronische cholecystitis"] },
    { code: "DA32", terms: ["Choledocholithiasis"] },
    { code: "DA33", terms: ["Cholangitis"] },
    { code: "DA34", terms: ["Galwegobstructie"] },

  // DA4 Pancreasaandoeningen

  { code: "DA4", terms: ["Pancreasaandoeningen"] },
    { code: "DA40", terms: ["Acute pancreatitis"] },
    { code: "DA41", terms: ["Chronische pancreatitis"] },
    { code: "DA42", terms: ["Pancreasinsufficiëntie"] },
	{ code: "DA43", terms: ["Pancreascysten"] },
    { code: "DA48", terms: ["Pancreastumoren"] },
	{ code: "DA481", terms: ["Benigne pancreastumoren"] },
	{ code: "DA482", terms: ["Maligne pancreastumoren"] },

  // DA5 Dunne darm aandoeningen
  { code: "DA5", terms: ["Dunne darm aandoeningen"] },
    { code: "DA50", terms: ["Malabsorptiesyndromen"] },
      { code: "DA500", terms: ["Coeliakie"] },
      { code: "DA501", terms: ["Lactose‑intolerantie"] },
    { code: "DA51", terms: ["Enteritis"] },
      { code: "DA510", terms: ["Infectieuze enteritis"] },
      { code: "DA511", terms: ["Chronische enteritis"] },
    { code: "DA52", terms: ["Dunne darmobstructie"] },
    { code: "DA53", terms: ["Dunne darm ischemie"] },

  // DA6 Colon en rectum aandoeningen
  { code: "DA6", terms: ["Colon‑ en rectumaandoeningen"] },
    { code: "DA60", terms: ["Colitis"] },
      { code: "DA600", terms: ["Infectieuze colitis"] },
      { code: "DA601", terms: ["Microscopische colitis"] },
    { code: "DA61", terms: ["Inflammatoire darmziekten (IBD)"] },
      { code: "DA610", terms: ["Ziekte van Crohn"] },
      { code: "DA611", terms: ["Colitis ulcerosa"] },
    { code: "DA62", terms: ["Prikkelbare darm syndroom (PDS/IBS)"] },
    { code: "DA63", terms: ["Diverticulaire aandoeningen"] },
      { code: "DA630", terms: ["Diverticulose"] },
      { code: "DA631", terms: ["Diverticulitis"] },
    { code: "DA64", terms: ["Colon‑ en rectumtumoren"] },

  // DA7 Anale aandoeningen
  { code: "DA7", terms: ["Anale aandoeningen"] },
    { code: "DA70", terms: ["Aambeien (hemorroïden)"] },
    { code: "DA71", terms: ["Anale fissuren"] },
    { code: "DA72", terms: ["Anale fistels"] },
    { code: "DA73", terms: ["Anale abcessen"] },

  // DA8 Peritoneale aandoeningen
  { code: "DA8", terms: ["Peritoneale aandoeningen"] },
    { code: "DA80", terms: ["Peritonitis"] },
      { code: "DA800", terms: ["Primaire peritonitis"] },
      { code: "DA801", terms: ["Secundaire peritonitis"] },
    { code: "DA81", terms: ["Ascites"] },
    { code: "DA82", terms: ["Peritoneale carcinomatose"] },

  // DA9 Overige spijsverteringsziekten
  { code: "DA9", terms: ["Overige spijsverteringsziekten"] },
    { code: "DA90", terms: ["Gastro‑intestinale bloedingen"] },
    { code: "DA91", terms: ["Gastro‑intestinale perforaties"] },
    { code: "DA92", terms: ["Gastro‑intestinale ischemie"] },
    { code: "DA93", terms: ["Complicaties van gastro‑intestinale procedures"] },

{ terms: ["Ziekten van de huid | Dermatologie"], code: "EA" },

  // EA0 Dermatitis en eczeem
  { code: "EA0", terms: ["Dermatitis en eczeem"] },
    { code: "EA00", terms: ["Atopisch eczeem"] },
    { code: "EA01", terms: ["Contactdermatitis"] },
      { code: "EA010", terms: ["Allergische contactdermatitis"] },
      { code: "EA011", terms: ["Irritatieve contactdermatitis"] },
    { code: "EA02", terms: ["Seborroïsch eczeem"] },
    { code: "EA03", terms: ["Nummulair eczeem"] },
    { code: "EA04", terms: ["Dyshidrotisch eczeem"] },

  // EA1 Infectieuze huidziekten
  { code: "EA1", terms: ["Infectieuze huidziekten"] },
    { code: "EA10", terms: ["Bacteriële huidinfecties"] },
      { code: "EA100", terms: ["Impetigo"] },
      { code: "EA101", terms: ["Cellulitis"] },
      { code: "EA102", terms: ["Erysipelas"] },
      { code: "EA103", terms: ["Furunkels en karbunkels"] },
    { code: "EA11", terms: ["Virale huidinfecties"] },
      { code: "EA110", terms: ["Herpes simplex"] },
      { code: "EA111", terms: ["Herpes zoster"] },
      { code: "EA112", terms: ["Verrucae (wratten)"] },
    { code: "EA12", terms: ["Schimmelinfecties"] },
      { code: "EA120", terms: ["Dermatofytosen (tinea)"] },
      { code: "EA121", terms: ["Candida‑infecties"] },
    { code: "EA13", terms: ["Parasitaire huidinfecties"] },
      { code: "EA130", terms: ["Scabiës"] },
      { code: "EA131", terms: ["Pediculosis (luizen)"] },

  // EA2 Psoriasis en papulosquameuze aandoeningen
  { code: "EA2", terms: ["Psoriasis en papulosquameuze aandoeningen"] },
    { code: "EA20", terms: ["Psoriasis vulgaris"] },
    { code: "EA21", terms: ["Guttate psoriasis"] },
    { code: "EA22", terms: ["Pustuleuze psoriasis"] },
    { code: "EA23", terms: ["Erythrodermische psoriasis"] },
    { code: "EA24", terms: ["Lichen planus"] },

  // EA3 Urticaria en angio‑oedeem
  { code: "EA3", terms: ["Urticaria en angio‑oedeem"] },
    { code: "EA30", terms: ["Acute urticaria"] },
    { code: "EA31", terms: ["Chronische spontane urticaria"] },
    { code: "EA32", terms: ["Fysische urticaria"] },
    { code: "EA33", terms: ["Angio‑oedeem"] },

  // EA4 Auto‑immuun en bullaeuze huidziekten
  { code: "EA4", terms: ["Auto‑immuun en bullaeuze huidziekten"] },
    { code: "EA40", terms: ["Pemphigus vulgaris"] },
    { code: "EA41", terms: ["Bullous pemphigoid"] },
    { code: "EA42", terms: ["Dermatitis herpetiformis"] },
    { code: "EA43", terms: ["Lineaire IgA‑dermatose"] },

  // EA5 Pigmentstoornissen
  { code: "EA5", terms: ["Pigmentstoornissen"] },
    { code: "EA50", terms: ["Vitiligo"] },
    { code: "EA51", terms: ["Melasma"] },
    { code: "EA52", terms: ["Post‑inflammatoire hyperpigmentatie"] },
    { code: "EA53", terms: ["Hypopigmentatie anderszins"] },

  // EA6 Huidtumoren (benigne en maligne)
  { code: "EA6", terms: ["Huidtumoren"] },
    { code: "EA60", terms: ["Benigne huidtumoren"] },
      { code: "EA600", terms: ["Naevus (moedervlek)"] },
      { code: "EA601", terms: ["Lipoom"] },
      { code: "EA602", terms: ["Seborrheïsche keratose"] },
    { code: "EA61", terms: ["Premaligne huidafwijkingen"] },
      { code: "EA610", terms: ["Actinische keratose"] },
      { code: "EA611", terms: ["Morbus Bowen"] },
    { code: "EA62", terms: ["Maligne huidtumoren"] },
      { code: "EA620", terms: ["Basocellulair carcinoom"] },
      { code: "EA621", terms: ["Plaveiselcelcarcinoom"] },
      { code: "EA622", terms: ["Melanoom"] },

  // EA7 Haren, nagels en adnexen
  { code: "EA7", terms: ["Aandoeningen van haren, nagels en adnexen"] },
    { code: "EA70", terms: ["Alopecia"] },
      { code: "EA700", terms: ["Alopecia areata"] },
      { code: "EA701", terms: ["Androgenetische alopecia"] },
    { code: "EA71", terms: ["Nagelaandoeningen"] },
      { code: "EA710", terms: ["Onychomycose"] },
      { code: "EA711", terms: ["Onycholysis"] },
    { code: "EA72", terms: ["Zweetklieraandoeningen"] },
      { code: "EA720", terms: ["Hyperhidrose"] },
      { code: "EA721", terms: ["Hidradenitis suppurativa"] },

  // EA8 Bindweefsel‑ en subcutane aandoeningen
  { code: "EA8", terms: ["Bindweefsel‑ en subcutane aandoeningen"] },
    { code: "EA80", terms: ["Panniculitis"] },
    { code: "EA81", terms: ["Sclerodermie (cutaan)"] },
    { code: "EA82", terms: ["Lipo‑atrofie en lipo‑hypertrofie"] },

  // EA9 Overige huidziekten
  { code: "EA9", terms: ["Overige huidziekten"] },
    { code: "EA90", terms: ["Pruritus"] },
    { code: "EA91", terms: ["Xerosis cutis (droge huid)"] },
    { code: "EA92", terms: ["Huidatrofie"] },
    { code: "EA93", terms: ["Complicaties van dermatologische procedures"] },

{ terms: ["Ziekten van het musculoskeletaal systeem | Reumatologie"], code: "F" },

{ terms: ["Ziekten van het bewegingsapparaat"], code: "FA" },
  // FA0 Artropathieën
  { code: "FA0", terms: ["Artropathieën"] },
    { code: "FA00", terms: ["Artrose"] },
      { code: "FA000", terms: ["Heupartrose"] },
      { code: "FA001", terms: ["Knieartrose"] },
      { code: "FA002", terms: ["Hand- en vingerartrose"] },
    { code: "FA01", terms: ["Artritis"] },
      { code: "FA010", terms: ["Acute artritis"] },
      { code: "FA011", terms: ["Chronische artritis"] },
    { code: "FA02", terms: ["Jicht en kristalartropathieën"] },
      { code: "FA020", terms: ["Jicht"] },
      { code: "FA021", terms: ["Pseudojicht (CPPD)"] },
    { code: "FA03", terms: ["Infectieuze artritis"] },

  // FA1 Reumatische aandoeningen
  { code: "FA1", terms: ["Reumatische aandoeningen"] },
    { code: "FA10", terms: ["Reumatoïde artritis"] },
    { code: "FA11", terms: ["Spondylo‑artritis"] },
      { code: "FA110", terms: ["Axiale spondylo‑artritis"] },
      { code: "FA111", terms: ["Artritis psoriatica"] },
    { code: "FA12", terms: ["Systemische lupus erythematodes (SLE)"] },
    { code: "FA13", terms: ["Sjögren‑syndroom"] },
    { code: "FA14", terms: ["Systemische sclerose"] },
    { code: "FA15", terms: ["Vasculitis geassocieerd met reuma"] },

  // FA2 Weke‑delen aandoeningen
  { code: "FA2", terms: ["Weke‑delen aandoeningen"] },
    { code: "FA20", terms: ["Tendinopathieën"] },
      { code: "FA200", terms: ["Achilles tendinopathie"] },
      { code: "FA201", terms: ["Rotator cuff tendinopathie"] },
    { code: "FA21", terms: ["Bursitis"] },
      { code: "FA210", terms: ["Subacromiale bursitis"] },
      { code: "FA211", terms: ["Trochanter major bursitis"] },
    { code: "FA22", terms: ["Enthesopathieën"] },
    { code: "FA23", terms: ["Myofasciale pijnsyndromen"] },

  // FA3 Botziekten
  { code: "FA3", terms: ["Botziekten"] },
    { code: "FA30", terms: ["Osteoporose"] },
    { code: "FA31", terms: ["Osteomalacie"] },
    { code: "FA32", terms: ["Ziekte van Paget"] },
    { code: "FA33", terms: ["Osteomyelitis"] },
    { code: "FA34", terms: ["Botcysten en benigne botlaesies"] },

  // FA4 Wervelkolomaandoeningen
  { code: "FA4", terms: ["Wervelkolomaandoeningen"] },
    { code: "FA40", terms: ["Lumbago"] },
    { code: "FA41", terms: ["Cervicalgie"] },
    { code: "FA42", terms: ["Dorsalgie"] },
    { code: "FA43", terms: ["Hernia nuclei pulposi"] },
      { code: "FA430", terms: ["Lumbale hernia"] },
      { code: "FA431", terms: ["Cervicale hernia"] },
    { code: "FA44", terms: ["Spondylolisthesis"] },
    { code: "FA45", terms: ["Spinale stenose"] },

  // FA5 Aandoeningen van spieren
  { code: "FA5", terms: ["Aandoeningen van spieren"] },
    { code: "FA50", terms: ["Myositis"] },
      { code: "FA500", terms: ["Polymyositis"] },
      { code: "FA501", terms: ["Dermatomyositis"] },
    { code: "FA51", terms: ["Spieratrofie"] },
    { code: "FA52", terms: ["Spierkrampen en spasmen"] },
    { code: "FA53", terms: ["Metabole myopathieën"] },

  // FA6 Aandoeningen van ligamenten en gewrichtskapsels
  { code: "FA6", terms: ["Aandoeningen van ligamenten en gewrichtskapsels"] },
    { code: "FA60", terms: ["Ligamentaire letsels"] },
      { code: "FA600", terms: ["Voorste kruisband letsel"] },
      { code: "FA601", terms: ["Enkelband letsel"] },
    { code: "FA61", terms: ["Gewrichtskapselafwijkingen"] },

  // FA7 Traumatische letsels van het bewegingsapparaat
  { code: "FA7", terms: ["Traumatische letsels van het bewegingsapparaat"] },
    { code: "FA70", terms: ["Fracturen"] },
      { code: "FA700", terms: ["Heupfractuur"] },
      { code: "FA701", terms: ["Polsfractuur"] },
      { code: "FA702", terms: ["Wervelfractuur"] },
    { code: "FA71", terms: ["Luxaties"] },
    { code: "FA72", terms: ["Spier‑ en peesscheuren"] },

  // FA8 Aangeboren aandoeningen van het bewegingsapparaat
  { code: "FA8", terms: ["Aangeboren aandoeningen van het bewegingsapparaat"] },
    { code: "FA80", terms: ["Heupdysplasie"] },
    { code: "FA81", terms: ["Klompvoet"] },
    { code: "FA82", terms: ["Scoliose (congenitaal)"] },

  // FA9 Overige aandoeningen van het bewegingsapparaat
  { code: "FA9", terms: ["Overige aandoeningen van het bewegingsapparaat"] },
    { code: "FA90", terms: ["Fibromyalgie"] },
    { code: "FA91", terms: ["Complex regionaal pijnsyndroom (CRPS)"] },
    { code: "FA92", terms: ["Hypermobiliteitssyndromen"] },
    { code: "FA93", terms: ["Complicaties van orthopedische procedures"] },

{ terms: ["Aangeboren afwijkingen van het bewegingstelsel"], code: "FB" },

  // FB0 Aangeboren afwijkingen van botten
  { code: "FB0", terms: ["Aangeboren afwijkingen van botten"] },
    { code: "FB00", terms: ["Aangeboren heupdysplasie"] },
    { code: "FB01", terms: ["Aangeboren scoliose"] },
    { code: "FB02", terms: ["Aangeboren kyfose"] },
    { code: "FB03", terms: ["Aangeboren tibia- of fibula-afwijkingen"] },

  // FB1 Aangeboren afwijkingen van gewrichten
  { code: "FB1", terms: ["Aangeboren afwijkingen van gewrichten"] },
    { code: "FB10", terms: ["Congenitale contracturen"] },
    { code: "FB11", terms: ["Arthrogryposis multiplex congenita"] },
    { code: "FB12", terms: ["Congenitale luxaties"] },

  // FB2 Aangeboren afwijkingen van spieren en pezen
  { code: "FB2", terms: ["Aangeboren afwijkingen van spieren en pezen"] },
    { code: "FB20", terms: ["Congenitale spierhypoplasie"] },
    { code: "FB21", terms: ["Congenitale peesverkortingen"] },

  // FB3 Aangeboren afwijkingen van de voet
  { code: "FB3", terms: ["Aangeboren voetafwijkingen"] },
    { code: "FB30", terms: ["Klompvoet (talipes equinovarus)"] },
    { code: "FB31", terms: ["Platvoet (congenitaal)"] },
    { code: "FB32", terms: ["Holvoet (pes cavus)"] },

  // FB9 Overige aangeboren afwijkingen van het bewegingsapparaat
  { code: "FB9", terms: ["Overige aangeboren afwijkingen van het bewegingsapparaat"] },
    { code: "FB90", terms: ["Skeletdysplasieën"] },
    { code: "FB91", terms: ["Congenitale bindweefselafwijkingen"] },
	
{ terms: ["Ziekten van het urogenitale systeem | Urologie"], code: "GA" },

  // GA0 Nierziekten
  { code: "GA0", terms: ["Nierziekten"] },
    { code: "GA00", terms: ["Acute nierziekten"] },
      { code: "GA000", terms: ["Acute nierinsufficiëntie (AKI)"] },
      { code: "GA001", terms: ["Acute tubulusnecrose"] },
    { code: "GA01", terms: ["Chronische nierziekten (CKD)"] },
      { code: "GA010", terms: ["CKD stadium 1–2"] },
      { code: "GA011", terms: ["CKD stadium 3–4"] },
      { code: "GA012", terms: ["Eindstadium nierfalen (ESRD)"] },
    { code: "GA02", terms: ["Glomerulaire aandoeningen"] },
      { code: "GA020", terms: ["Glomerulonefritis"] },
      { code: "GA021", terms: ["Nefrotisch syndroom"] },
    { code: "GA03", terms: ["Tubulo‑interstitiële aandoeningen"] },
      { code: "GA030", terms: ["Interstitiële nefritis"] },
      { code: "GA031", terms: ["Pyelonefritis"] },
    { code: "GA04", terms: ["Cysten en structurele nierafwijkingen"] },
      { code: "GA040", terms: ["Polycysteuze nierziekte"] },
      { code: "GA041", terms: ["Enkelvoudige niercysten"] },

  // GA1 Ureter‑ en nierbekkenaandoeningen
  { code: "GA1", terms: ["Ureter‑ en nierbekkenaandoeningen"] },
    { code: "GA10", terms: ["Ureterstenen"] },
    { code: "GA11", terms: ["Ureterstricturen"] },
    { code: "GA12", terms: ["Hydronefrose"] },
    { code: "GA13", terms: ["Pyelum‑ureterovergangsstenose"] },

  // GA2 Blaasaandoeningen
  { code: "GA2", terms: ["Blaasaandoeningen"] },
    { code: "GA20", terms: ["Cystitis"] },
      { code: "GA200", terms: ["Acute cystitis"] },
      { code: "GA201", terms: ["Chronische cystitis"] },
    { code: "GA21", terms: ["Overactieve blaas"] },
    { code: "GA22", terms: ["Neurogene blaas"] },
    { code: "GA23", terms: ["Blaasretentie"] },
    { code: "GA24", terms: ["Blaastumoren"] },

  // GA3 Urethrale aandoeningen
  { code: "GA3", terms: ["Urethrale aandoeningen"] },
    { code: "GA30", terms: ["Urethritis"] },
      { code: "GA300", terms: ["Gonorroe‑urethritis"] },
      { code: "GA301", terms: ["Chlamydia‑urethritis"] },
    { code: "GA31", terms: ["Urethrale stricturen"] },
    { code: "GA32", terms: ["Urethrale divertikels"] },

  // GA4 Prostaataandoeningen
  { code: "GA4", terms: ["Prostaataandoeningen"] },
    { code: "GA40", terms: ["Benigne prostaathyperplasie (BPH)"] },
    { code: "GA41", terms: ["Prostatitis"] },
      { code: "GA410", terms: ["Acute prostatitis"] },
      { code: "GA411", terms: ["Chronische prostatitis"] },
    { code: "GA42", terms: ["Prostaatcarcinoom"] },

  // GA5 Mannelijke genitale aandoeningen
  { code: "GA5", terms: ["Mannelijke genitale aandoeningen"] },
    { code: "GA50", terms: ["Testiculaire aandoeningen"] },
      { code: "GA500", terms: ["Orchitis"] },
      { code: "GA501", terms: ["Epididymitis"] },
      { code: "GA502", terms: ["Testiculaire torsie"] },
    { code: "GA51", terms: ["Peniele aandoeningen"] },
      { code: "GA510", terms: ["Phimosis"] },
      { code: "GA511", terms: ["Peyronie‑ziekte"] },
    { code: "GA52", terms: ["Mannelijke infertiliteit"] },

  // GA6 Vrouwelijke genitale aandoeningen
  { code: "GA6", terms: ["Vrouwelijke genitale aandoeningen"] },
    { code: "GA60", terms: ["Vaginale aandoeningen"] },
      { code: "GA600", terms: ["Vaginitis"] },
      { code: "GA601", terms: ["Bacteriële vaginose"] },
      { code: "GA602", terms: ["Candida‑vaginitis"] },
    { code: "GA61", terms: ["Cervicale aandoeningen"] },
      { code: "GA610", terms: ["Cervicitis"] },
      { code: "GA611", terms: ["Cervicale dysplasie"] },
    { code: "GA62", terms: ["Uteriene aandoeningen"] },
      { code: "GA620", terms: ["Endometritis"] },
      { code: "GA621", terms: ["Endometriose"] },
      { code: "GA622", terms: ["Myomen (fibromen)"] },
    { code: "GA63", terms: ["Ovariële aandoeningen"] },
      { code: "GA630", terms: ["Ovariële cysten"] },
      { code: "GA631", terms: ["Ovariële torsie"] },
      { code: "GA632", terms: ["Ovariële tumoren"] },

  // GA7 Seksueel overdraagbare aandoeningen (urogenitaal)
  { code: "GA7", terms: ["Seksueel overdraagbare aandoeningen (urogenitaal)"] },
    { code: "GA70", terms: ["Chlamydia‑infectie"] },
    { code: "GA71", terms: ["Gonorroe"] },
    { code: "GA72", terms: ["Syfilis (urogenitale manifestaties)"] },
    { code: "GA73", terms: ["Trichomoniasis"] },
    { code: "GA74", terms: ["Genitale herpes"] },

  // GA8 Urogenitale tumoren
  { code: "GA8", terms: ["Urogenitale tumoren"] },
    { code: "GA80", terms: ["Niertumoren"] },
    { code: "GA81", terms: ["Ureter‑ en pyelumtumoren"] },
    { code: "GA82", terms: ["Blaastumoren"] },
    { code: "GA83", terms: ["Prostaatcarcinoom"] },
    { code: "GA84", terms: ["Testistumoren"] },
    { code: "GA85", terms: ["Ovariële tumoren"] },
    { code: "GA86", terms: ["Uteriene tumoren"] },

  // GA9 Overige urogenitale aandoeningen
  { code: "GA9", terms: ["Overige urogenitale aandoeningen"] },
    { code: "GA90", terms: ["Urogenitale pijnsyndromen"] },
    { code: "GA91", terms: ["Incontinentie"] },
    { code: "GA92", terms: ["Urogenitale fistels"] },
    { code: "GA93", terms: ["Complicaties van urologische procedures"] },
	

  // J — Hoofdniveau
  { code: "J", terms: ["Zwangerschap, bevalling of kraambed | Gynecologie"] },

  // =====================================================
  // JA — Zwangerschap
  // =====================================================
  { code: "JA", terms: ["Zwangerschap"] },

    { code: "JA0", terms: ["Normale zwangerschap"] },
      { code: "JA00", terms: ["Eerste trimester"] },
      { code: "JA01", terms: ["Tweede trimester"] },
      { code: "JA02", terms: ["Derde trimester"] },

    { code: "JA1", terms: ["Complicaties tijdens de zwangerschap"] },
      { code: "JA10", terms: ["Hyperemesis gravidarum"] },
      { code: "JA11", terms: ["Zwangerschapsdiabetes"] },
      { code: "JA12", terms: ["Hypertensieve aandoeningen"] },
        { code: "JA120", terms: ["Zwangerschapshypertensie"] },
        { code: "JA121", terms: ["Pre-eclampsie"] },
        { code: "JA122", terms: ["Eclampsie"] },
      { code: "JA13", terms: ["Placentaire problemen"] },
        { code: "JA130", terms: ["Placenta praevia"] },
        { code: "JA131", terms: ["Abruptio placentae"] },
      { code: "JA14", terms: ["Meerlingzwangerschap"] },

    { code: "JA2", terms: ["Foetale aandoeningen"] },
      { code: "JA20", terms: ["Intra-uteriene groeirestrictie (IUGR)"] },
      { code: "JA21", terms: ["Foetale nood"] },
      { code: "JA22", terms: ["Congenitale afwijkingen"] },

  // =====================================================
  // JB — Bevalling
  // =====================================================
  { code: "JB", terms: ["Bevalling"] },

    { code: "JB0", terms: ["Spontane bevalling"] },
      { code: "JB00", terms: ["Vaginale bevalling"] },
      { code: "JB01", terms: ["Waterbevalling"] },

    { code: "JB1", terms: ["Geassisteerde bevalling"] },
      { code: "JB10", terms: ["Vacuumextractie"] },
      { code: "JB11", terms: ["Forcepsbevalling"] },

    { code: "JB2", terms: ["Keizersnede"] },
      { code: "JB20", terms: ["Electieve sectio"] },
      { code: "JB21", terms: ["Urgente sectio"] },

    { code: "JB3", terms: ["Complicaties tijdens de bevalling"] },
      { code: "JB30", terms: ["Schouderdystocie"] },
      { code: "JB31", terms: ["Navelstrengprolaps"] },
      { code: "JB32", terms: ["Uterusruptuur"] },

  // =====================================================
  // JC — Kraambed (postpartum)
  // =====================================================
  { code: "JC", terms: ["Kraambed (postpartum)"] },

    { code: "JC0", terms: ["Normaal postpartum herstel"] },

    { code: "JC1", terms: ["Postpartum complicaties"] },
      { code: "JC10", terms: ["Postpartum bloeding"] },
      { code: "JC11", terms: ["Endometritis"] },
      { code: "JC12", terms: ["Wondinfectie na sectio"] },
      { code: "JC13", terms: ["Trombose postpartum"] },

    { code: "JC2", terms: ["Psychische postpartumstoornissen"] },
      { code: "JC20", terms: ["Postpartum blues"] },
      { code: "JC21", terms: ["Postpartum depressie"] },
      { code: "JC22", terms: ["Postpartum psychose"] },

  // =====================================================
  // JD — Gynaecologische aandoeningen
  // =====================================================
  { code: "JD", terms: ["Gynaecologische aandoeningen"] },

    { code: "JD0", terms: ["Menstruatiestoornissen"] },
      { code: "JD00", terms: ["Dysmenorroe"] },
      { code: "JD01", terms: ["Menorragie"] },
      { code: "JD02", terms: ["Amenorroe"] },

    { code: "JD1", terms: ["Infecties"] },
      { code: "JD10", terms: ["Vaginitis"] },
      { code: "JD11", terms: ["Pelvic inflammatory disease (PID)"] },

    { code: "JD2", terms: ["Goedaardige tumoren"] },
      { code: "JD20", terms: ["Uterusmyomen"] },
      { code: "JD21", terms: ["Ovariumcyste"] },

    { code: "JD3", terms: ["Kwaadaardige tumoren"] },
      { code: "JD30", terms: ["Baarmoederhalskanker"] },
      { code: "JD31", terms: ["Endometriumcarcinoom"] },
      { code: "JD32", terms: ["Ovariumcarcinoom"] },

  // =====================================================
  // JE — Vruchtbaarheid & reproductieve geneeskunde
  // =====================================================
  { code: "JE", terms: ["Vruchtbaarheid en reproductieve geneeskunde"] },

    { code: "JE0", terms: ["Subfertiliteit"] },
      { code: "JE00", terms: ["Ovulatiestoornissen"] },
      { code: "JE01", terms: ["Tubaire infertiliteit"] },
      { code: "JE02", terms: ["Endometriose"] },

    { code: "JE1", terms: ["Reproductieve technieken"] },
      { code: "JE10", terms: ["IVF"] },
      { code: "JE11", terms: ["ICSI"] },
      { code: "JE12", terms: ["Intra-uteriene inseminatie (IUI)"] },
	  
  // JK — Perinatale ademhalingsproblemen
  { code: "JK", terms: ["Perinatale ademhalingsproblemen"] },
    { code: "JK0", terms: ["Respiratory distress"] },
      { code: "JK00", terms: ["Respiratory distress syndrome (RDS)"] },
      { code: "JK01", terms: ["Transient tachypnea of the newborn (TTN)"] },
      { code: "JK02", terms: ["Meconiumaspiratiesyndroom"] },

    { code: "JK1", terms: ["Apneu van de prematuur"] },
      { code: "JK10", terms: ["Apneu – mild"] },
      { code: "JK11", terms: ["Apneu – ernstig"] },

  // JL — Infecties in de perinatale periode
  { code: "JL", terms: ["Perinatale infecties"] },
    { code: "JL0", terms: ["Bacteriële infecties"] },
      { code: "JL00", terms: ["Neonatale sepsis – vroeg"] },
      { code: "JL01", terms: ["Neonatale sepsis – laat"] },
      { code: "JL02", terms: ["Neonatale meningitis"] },

    { code: "JL1", terms: ["Virale infecties"] },
      { code: "JL10", terms: ["CMV-infectie congenitaal"] },
      { code: "JL11", terms: ["Herpes neonatorum"] },

    { code: "JL2", terms: ["Andere perinatale infecties"] },
      { code: "JL20", terms: ["Listeria"] },
      { code: "JL21", terms: ["Group B streptococcus (GBS)"] },

  // JM — Overige perinatale aandoeningen
  { code: "JM", terms: ["Overige perinatale aandoeningen"] },
    { code: "JM0", terms: ["Hypoxisch-ischemische encefalopathie (HIE)"] },
    { code: "JM1", terms: ["Neonatale hypoglykemie"] },
    { code: "JM2", terms: ["Neonatale geelzucht"] },
      { code: "JM20", terms: ["Fysiologische icterus"] },
      { code: "JM21", terms: ["Pathologische icterus"] },
    { code: "JM3", terms: ["Prematuriteit en complicaties"] },
      { code: "JM30", terms: ["Prematuur < 37 weken"] },
      { code: "JM31", terms: ["Zeer prematuur < 32 weken"] },
      { code: "JM32", terms: ["Extreem prematuur < 28 weken"] },
	  
  // L — Hoofdniveau
  { code: "L", terms: ["Ontwikkelingsanomalieën | Genetica"] },

  // LA — Aangeboren afwijkingen van het zenuwstelsel
  { code: "LA", terms: ["Aangeboren afwijkingen van het zenuwstelsel"] },
    { code: "LA0", terms: ["Neurale buisdefecten"] },
      { code: "LA00", terms: ["Spina bifida"] },
      { code: "LA01", terms: ["Anencefalie"] },
      { code: "LA02", terms: ["Encefalocèle"] },

    { code: "LA1", terms: ["Hydrocefalie"] },
      { code: "LA10", terms: ["Communicerende hydrocefalie"] },
      { code: "LA11", terms: ["Niet-communicerende hydrocefalie"] },

  // LB — Aangeboren afwijkingen van hart en bloedvaten
  { code: "LB", terms: ["Aangeboren hartafwijkingen"] },
    { code: "LB0", terms: ["Septumdefecten"] },
      { code: "LB00", terms: ["VSD"] },
      { code: "LB01", terms: ["ASD"] },
      { code: "LB02", terms: ["AVSD"] },

    { code: "LB1", terms: ["Outflow tract afwijkingen"] },
      { code: "LB10", terms: ["Tetralogie van Fallot"] },
      { code: "LB11", terms: ["Transpositie van de grote vaten"] },

    { code: "LB2", terms: ["Overige congenitale hartafwijkingen"] },
      { code: "LB20", terms: ["Coarctatio aortae"] },
      { code: "LB21", terms: ["Open ductus arteriosus (PDA)"] },

  // LC — Aangeboren afwijkingen van het spijsverteringsstelsel
  { code: "LC", terms: ["Aangeboren afwijkingen van het spijsverteringsstelsel"] },
    { code: "LC0", terms: ["Oesofagusatresie"] },
    { code: "LC1", terms: ["Duodenumatresie"] },
    { code: "LC2", terms: ["Anorectale malformaties"] },
      { code: "LC20", terms: ["Anale atresie"] },
      { code: "LC21", terms: ["Rectovaginale fistel"] },

  // LD — Aangeboren afwijkingen van het urogenitaal stelsel
  { code: "LD", terms: ["Aangeboren afwijkingen van het urogenitaal stelsel"] },
    { code: "LD0", terms: ["Nierafwijkingen"] },
      { code: "LD00", terms: ["Horseshoe kidney"] },
      { code: "LD01", terms: ["Multicysteuze nier"] },

    { code: "LD1", terms: ["Genitale afwijkingen"] },
      { code: "LD10", terms: ["Hypospadie"] },
      { code: "LD11", terms: ["Cryptorchidie"] },

  // LE — Aangeboren afwijkingen van ledematen & skelet
  { code: "LE", terms: ["Aangeboren afwijkingen van ledematen en skelet"] },
    { code: "LE0", terms: ["Ledemaatdefecten"] },
      { code: "LE00", terms: ["Polydactylie"] },
      { code: "LE01", terms: ["Syndactylie"] },

    { code: "LE1", terms: ["Skeletdysplasieën"] },
      { code: "LE10", terms: ["Achondroplasie"] },
      { code: "LE11", terms: ["Osteogenesis imperfecta"] },
	 
  // N — Hoofdniveau
  { code: "N", terms: ["Letsel, vergiftiging of andere externe oorzaken | Toxicologie"] },

  // =====================================================
  // NA — Vergiftigingen & intoxicaties
  // =====================================================
  { code: "NA", terms: ["Vergiftigingen en intoxicaties"] },

    { code: "NA0", terms: ["Intoxicaties door geneesmiddelen"] },
      { code: "NA00", terms: ["Overdosering pijnstillers"] },
      { code: "NA01", terms: ["Overdosering benzodiazepines"] },
      { code: "NA02", terms: ["Overdosering antidepressiva"] },

    { code: "NA1", terms: ["Intoxicaties door alcohol en drugs"] },
      { code: "NA10", terms: ["Alcoholintoxicatie"] },
      { code: "NA11", terms: ["Cannabisintoxicatie"] },
      { code: "NA12", terms: ["Cocaïne- of amfetamine-intoxicatie"] },
      { code: "NA13", terms: ["Opioïdenintoxicatie"] },

    { code: "NA2", terms: ["Toxische stoffen"] },
      { code: "NA20", terms: ["CO-intoxicatie"] },
      { code: "NA21", terms: ["Pesticidenvergiftiging"] },
      { code: "NA22", terms: ["Metalen (lood, kwik)"] },

  // =====================================================
  // NB — Brandwonden & thermische letsels
  // =====================================================
  { code: "NB", terms: ["Brandwonden en thermische letsels"] },

    { code: "NB0", terms: ["Brandwonden naar diepte"] },
      { code: "NB00", terms: ["Eerstegraads brandwonden"] },
      { code: "NB01", terms: ["Tweedegraads brandwonden"] },
      { code: "NB02", terms: ["Derdegraads brandwonden"] },

    { code: "NB1", terms: ["Brandwonden naar oorzaak"] },
      { code: "NB10", terms: ["Thermische brandwonden"] },
      { code: "NB11", terms: ["Chemische brandwonden"] },
      { code: "NB12", terms: ["Elektrische brandwonden"] },

    { code: "NB2", terms: ["Hitte- en koudeletsels"] },
      { code: "NB20", terms: ["Hitteberoerte"] },
      { code: "NB21", terms: ["Hypothermie"] },
      { code: "NB22", terms: ["Bevriezingsletsels"] },

  // =====================================================
  // NC — Verstikking, verdrinking, inhalatie
  // =====================================================
  { code: "NC", terms: ["Verstikking, verdrinking en inhalatieletsels"] },

    { code: "NC0", terms: ["Verstikking"] },
      { code: "NC00", terms: ["Aspiratie van voedsel/vreemd voorwerp"] },
      { code: "NC01", terms: ["Mechanische verstikking"] },

    { code: "NC1", terms: ["Verdrinking"] },
      { code: "NC10", terms: ["Bijna-verdrinking"] },
      { code: "NC11", terms: ["Verdrinking"] },

    { code: "NC2", terms: ["Inhalatieletsels"] },
      { code: "NC20", terms: ["Rookinhalatie"] },
      { code: "NC21", terms: ["Toxische dampen"] },

  // =====================================================
  // ND — Elektrische, stralings- en drukletsels
  // =====================================================
  { code: "ND", terms: ["Elektrische, stralings- en drukletsels"] },

    { code: "ND0", terms: ["Elektrische letsels"] },
      { code: "ND00", terms: ["Elektrische schok"] },
      { code: "ND01", terms: ["Blikseminslag"] },

    { code: "ND1", terms: ["Stralingsletsels"] },
      { code: "ND10", terms: ["Ioniserende straling"] },
      { code: "ND11", terms: ["UV-straling"] },

    { code: "ND2", terms: ["Druk- en explosieletsels"] },
      { code: "ND20", terms: ["Explosietrauma"] },
      { code: "ND21", terms: ["Barotrauma"] },

  // =====================================================
  // NE — Mechanismen van letsel (optioneel, niet anatomisch)
  // =====================================================
  { code: "NE", terms: ["Mechanismen van letsel"] },

    { code: "NE0", terms: ["Valincidenten"] },
      { code: "NE00", terms: ["Val op gelijk niveau"] },
      { code: "NE01", terms: ["Val van hoogte"] },

    { code: "NE1", terms: ["Verkeersongevallen"] },
      { code: "NE10", terms: ["Auto-ongeval"] },
      { code: "NE11", terms: ["Fiets- of motorongeval"] },
      { code: "NE12", terms: ["Voetganger aangereden"] },

    { code: "NE2", terms: ["Geweldsincidenten"] },
      { code: "NE20", terms: ["Slag of stomp"] },
      { code: "NE21", terms: ["Steekwonde"] },
      { code: "NE22", terms: ["Schotwonde"] },

  // =====================================================
  // NF — Complicaties van externe oorzaken
  // =====================================================
  { code: "NF", terms: ["Complicaties van externe oorzaken"] },

    { code: "NF0", terms: ["Complicaties van medische zorg"] },
      { code: "NF00", terms: ["Postprocedurele bloeding"] },
      { code: "NF01", terms: ["Postprocedurele infectie"] },

    { code: "NF1", terms: ["Complicaties van lichaamsvreemde stoffen"] },
      { code: "NF10", terms: ["Ingeslikt vreemd voorwerp"] },
      { code: "NF11", terms: ["Ingebracht vreemd voorwerp"] },
	  
  // O — Hoofdniveau
  { code: "O", terms: ["Fracturen - Letsels weke delen | Traumatologie & Orthopedie"] },

  // =====================================================
  // OA — Botfracturen
  // =====================================================
  { code: "OA", terms: ["Botfracturen"] },
    { code: "OA0", terms: ["Schedel -  aangezicht - fracturen"] },
      { code: "OA00", terms: ["Schedelfractuur"] },
      { code: "OA01", terms: ["Aangezichtfractuur"] },

    { code: "OA1", terms: ["Wervelfracturen"] },
      { code: "OA10", terms: ["Cervicale wervelfractuur"] },
      { code: "OA11", terms: ["Thoracale wervelfractuur"] },
      { code: "OA12", terms: ["Lumbale wervelfractuur"] },
      { code: "OA15", terms: ["Fractuur sacrum - bekken"] },

    { code: "OA2", terms: ["Bovenste ledematen"] },
      { code: "OA20", terms: ["Scapula - Clavicula - Sternum fractuur"] },
      { code: "OA21", terms: ["Humerusfractuur"] },
	  { code: "OA22", terms: ["Radius/ulna fractuur"] },
      { code: "OA23", terms: ["Polsfractuur - Carpus - fractuur"] },
      { code: "OA24", terms: ["Hand- en vingerfracturen"] },

    { code: "OA3", terms: ["Onderste ledematen"] },
      { code: "OA3A", terms: ["Patella fractuur"] },
	  { code: "OA30", terms: ["Heupfractuur"] },
      { code: "OA31", terms: ["Femurfractuur"] },
      { code: "OA32", terms: ["Tibia-/fibulafractuur"] },
      { code: "OA33", terms: ["Enkelfractuur"] },
      { code: "OA34", terms: ["Tarsus - Metatarsalen - Teen - fracturen"] },

    { code: "OA9", terms: ["Overige fracturen"] },
      { code: "OA90", terms: ["Stressfracturen"] },
      { code: "OA91", terms: ["Pathologische fracturen"] },
      { code: "OA99", terms: ["Fracturen NNO"] },	  

  // =====================================================
  // OB — Gewrichtsletsels
  // =====================================================
  { code: "OB", terms: ["Gewrichtsletsels"] },
    { code: "OB0", terms: ["Luxaties"] },
      { code: "OB00", terms: ["Schouderluxatie"] },
      { code: "OB01", terms: ["Elleboogluxatie"] },
      { code: "OB02", terms: ["Heupluxatie"] },
      { code: "OB03", terms: ["Knieluxatie"] },
      { code: "OB04", terms: ["Enkelluxatie"] },

    { code: "OB1", terms: ["Verstuikingen en ligamentletsels"] },
      { code: "OB10", terms: ["Enkelverstuiking"] },
      { code: "OB11", terms: ["Anterior & Posterior Kruisband letsel (ACL/PCL)"] },
      { code: "OB12", terms: ["Mediale & Laterale collaterale ligament - MCL/LCL letsel"] },
      { code: "OB13", terms: ["Polsverstuiking"] },

  // =====================================================
  // OC — Spier- en peesletsels
  // =====================================================
  { code: "OC", terms: ["Spier- en peesletsels"] },
    { code: "OC0", terms: ["Spierletsels"] },
      { code: "OC00", terms: ["Spiercontusie"] },
      { code: "OC01", terms: ["Spierscheur (ruptuur)"] },
      { code: "OC02", terms: ["Spierkramp / spierspasme"] },

    { code: "OC1", terms: ["Peesletsels"] },
      { code: "OC10", terms: ["Achillespeesruptuur"] },
      { code: "OC11", terms: ["Rotator cuff ruptuur"] },
      { code: "OC12", terms: ["Bicepspeesruptuur"] },
      { code: "OC13", terms: ["Extensor/flexorpees letsels hand"] },

  // =====================================================
  // OD — Wonden en weke-delen letsels
  // =====================================================
  { code: "OD", terms: ["Wonden en weke-delen letsels"] },
    { code: "OD0", terms: ["Open wonden"] },
      { code: "OD00", terms: ["Schaafwonden"] },
      { code: "OD01", terms: ["Snijwonden"] },
      { code: "OD02", terms: ["Scheurwonden (laceraties)"] },
      { code: "OD03", terms: ["Bijtwonden"] },

    { code: "OD1", terms: ["Contusies en hematomen"] },
      { code: "OD10", terms: ["Contusie"] },
      { code: "OD11", terms: ["Hematoom"] },

    { code: "OD2", terms: ["Brandwonden (oppervlakkig)"] },
      { code: "OD20", terms: ["Eerstegraads brandwonden"] },
      { code: "OD21", terms: ["Oppervlakkige tweedegraads brandwonden"] },

  // =====================================================
  // OE — Orthopedische ziekten (niet-traumatisch)
  // =====================================================
  { code: "OE", terms: ["Orthopedische ziekten"] },
    { code: "OE0", terms: ["Artrose"] },
      { code: "OE00", terms: ["Heupartrose"] },
      { code: "OE01", terms: ["Knieartrose"] },
      { code: "OE02", terms: ["Handartrose"] },
	  { code: "OE03", terms: ["Rugartrose"] },
	  { code: "OE030", terms: ["Cervicale facet syndroom"] },
	  { code: "OE031", terms: ["Thoracale facet syndroom"] },
	  { code: "OE032", terms: ["Lumbaire facet syndroom"] },

    { code: "OE1", terms: ["Tendinopathieën"] },
      { code: "OE10", terms: ["Achilles tendinopathie"] },
      { code: "OE11", terms: ["Tenniselleboog"] },
      { code: "OE12", terms: ["Rotator cuff tendinopathie"] },

    { code: "OE2", terms: ["Bursitis"] },
      { code: "OE20", terms: ["Subacromiale bursitis"] },
      { code: "OE21", terms: ["Trochanter bursitis"] },

    { code: "OE3", terms: ["Botziekten"] },
      { code: "OE30", terms: ["Osteoporose"] },
      { code: "OE31", terms: ["Osteomalacie"] },
      { code: "OE32", terms: ["Ziekte van Paget"] },

  // =====================================================
  // OF — Postoperatieve en implantaat-gerelateerde problemen
  // =====================================================
  { code: "OF", terms: ["Postoperatieve en implantaat-gerelateerde problemen"] },
    { code: "OF0", terms: ["Complicaties van gewrichtsprothesen"] },
      { code: "OF00", terms: ["Loslating van prothese"] },
      { code: "OF01", terms: ["Infectie van prothese"] },

    { code: "OF1", terms: ["Complicaties van osteosynthese"] },
      { code: "OF10", terms: ["Schroef-/plaatbreuk"] },
      { code: "OF11", terms: ["Infectie na osteosynthese"] },

    { code: "OF2", terms: ["Postoperatieve complicaties"] },
      { code: "OF20", terms: ["Postoperatieve wondinfectie"] },
      { code: "OF21", terms: ["Hematoom postoperatief"] },

  // OK — Aangeboren afwijkingen
  { code: "OK", terms: ["Aangeboren afwijkingen"] },
    { code: "OK0", terms: ["Aangeboren heupafwijkingen"] },
      { code: "OK00", terms: ["Heupdysplasie (DDH)"] },
      { code: "OK01", terms: ["Heupluxatie congenitaal"] },

    { code: "OK1", terms: ["Aangeboren voetafwijkingen"] },
      { code: "OK10", terms: ["Klompvoet"] },
      { code: "OK11", terms: ["Pes planus congenitaal"] },
      { code: "OK12", terms: ["Pes cavus congenitaal"] },

    { code: "OK2", terms: ["Aangeboren afwijkingen bovenste ledematen"] },
      { code: "OK20", terms: ["Radiale aplasie"] },
      { code: "OK21", terms: ["Polydactylie"] },
      { code: "OK22", terms: ["Syndactylie"] },

    { code: "OK3", terms: ["Aangeboren wervelkolomafwijkingen"] },
      { code: "OK30", terms: ["Congenitale scoliose"] },
      { code: "OK31", terms: ["Congenitale kyfose"] },

  // OL — Groei- en ontwikkelingsstoornissen
  { code: "OL", terms: ["Groei- en ontwikkelingsstoornissen"] },
    { code: "OL0", terms: ["Groeistoornissen botten"] },
      { code: "OL00", terms: ["Osgood-Schlatter"] },
      { code: "OL01", terms: ["Morbus Sever"] },
      { code: "OL02", terms: ["Morbus Scheuermann"] },

    { code: "OL1", terms: ["Heupgroeistoornissen"] },
      { code: "OL10", terms: ["Perthes-ziekte"] },
      { code: "OL11", terms: ["SCFE (epifysiolyse)"] },

    { code: "OL2", terms: ["Groeistoornissen voet"] },
      { code: "OL20", terms: ["Metatarsus adductus"] },
      { code: "OL21", terms: ["Intoeing / outtoeing"] },

    { code: "OL3", terms: ["Groeistoornissen wervelkolom"] },
      { code: "OL30", terms: ["Idiopathische scoliose adolescent"] },
      { code: "OL31", terms: ["Hyperkyfose adolescent"] },

  // OM — Pediatrische fracturen en traumata
  { code: "OM", terms: ["Pediatrische fracturen en traumata"] },
    { code: "OM0", terms: ["Typische kinderfracturen"] },
      { code: "OM00", terms: ["Greenstick fractuur"] },
      { code: "OM01", terms: ["Torus/buckle fractuur"] },
      { code: "OM02", terms: ["Salter-Harris fracturen"] },
      { code: "OM03", terms: ["Bow-fractuur"] },

    { code: "OM1", terms: ["Fracturen bovenste ledematen"] },
      { code: "OM10", terms: ["Supracondylaire humerusfractuur"] },
      { code: "OM11", terms: ["Radius/ulna fractuur (kinderpatroon)"] },
      { code: "OM12", terms: ["Polsfractuur (buckle)"] },

    { code: "OM2", terms: ["Fracturen onderste ledematen"] },
      { code: "OM20", terms: ["Femurfractuur kind"] },
      { code: "OM21", terms: ["Tibiafractuur kind"] },
      { code: "OM22", terms: ["Toddler's fracture"] },

    { code: "OM3", terms: ["Luxaties en verstuikingen kind"] },
      { code: "OM30", terms: ["Nursemaid's elbow"] },
      { code: "OM31", terms: ["Enkelverstuiking kind"] },

    { code: "OM4", terms: ["Spier- en peesletsels kind"] },
      { code: "OM40", terms: ["Spiercontusie kind"] },
      { code: "OM41", terms: ["Apofysaire avulsies"] },

  // OL — Pediatrische orthopedische ziekten
  { code: "OL", terms: ["Pediatrische orthopedische ziekten"] },
    { code: "OL0", terms: ["Ontstekingsziekten"] },
      { code: "OL00", terms: ["Juveniele idiopathische artritis"] },
      { code: "OL01", terms: ["Osteomyelitis kind"] },
      { code: "OL02", terms: ["Septische artritis kind"] },

    { code: "OL1", terms: ["Botziekten kind"] },
      { code: "OL10", terms: ["Osteogenesis imperfecta"] },
      { code: "OL11", terms: ["Rachitis"] },

    { code: "OL2", terms: ["Neuromusculaire aandoeningen"] },
      { code: "OL20", terms: ["Cerebrale parese – orthopedische problemen"] },
      { code: "OL21", terms: ["Spierdystrofieën (Duchenne/Becker)"] },

  // OM — Postoperatieve complicaties kind
  { code: "OM", terms: ["Postoperatieve complicaties kind"] },
    { code: "OM0", terms: ["Complicaties na fractuurbehandeling"] },
      { code: "OM00", terms: ["Groeischijfbeschadiging"] },
      { code: "OM01", terms: ["Malunion / non-union kind"] },

    { code: "OM1", terms: ["Complicaties na orthopedische chirurgie"] },
      { code: "OM10", terms: ["Infectie na osteosynthese kind"] },
      { code: "OM11", terms: ["Complicaties na heupbehandeling (DDH/SCFE)"] },
	  
	  // bewegingsstoornissen
	  
{ terms: ["Functionele bewegingsstoornissen | Fysiotherapie"], code: "P" },

{ terms: ["Functionele gangstoornissen"], code: "PA" },
	{ terms: ["Gangstoornissen door balansstoornis"], code: "PA1" },
	{ terms: ["Gangstoornissen door coördinatiestoornis"], code: "PA2" },
	{ terms: ["Gangstoornissen door evenwichtsstoornis"], code: "PA3" },
	{ terms: ["Gangstoornissen door spierzwakte"], code: "PA6" },
	{ terms: ["Gangstoornis door Parkinsonisme"], code: "PA5" },
	{ terms: ["Multifactoriële gangstoornis"], code: "PA8" },

{ terms: ["Evenwichtsstoornissen"], code: "PB" },
	{ terms: ["Otologische - perifeer vestibulaire evenwichtsstoornis"], code: "PB1" },
	{ terms: ["Neurologische evenwichtstoornissen"], code: "PB2" },
	{ terms: ["Neurologisch vestibulair / centraal vestibulair syndroom"], code: "PB21" },
	{ terms: ["Neurologisch cerebellaire evenwichtstoornissen"], code: "PB22" },
	{ terms: ["Neurologisch sensorische (propioceptieve) evenwichtstoornissen"], code: "PB23" },	
	{ terms: ["Neurologisch motorische evenwichtstoornissen"], code: "PB24" },
	{ terms: ["Neurologisch multisensorische evenwichtstoornissen"], code: "PB25" },
	{ terms: ["Geriatrische balansstoornis"], code: "PB26" },
	{ terms: ["Valneiging / instabiliteit"], code: "PB28" },

{ terms: ["Coördinatiestoornissen"], code: "PC" },
	{ terms: ["Ataxie"], code: "PC1" },
	{ terms: ["Dysmetrie / dysdiadochokinese"], code: "PC2" },
	{ terms: ["Functionele coördinatiestoornis"], code: "PC3" },
	{ terms: ["Motorische planningsstoornis (apraxie-achtig)"], code: "PC4" },
	
{ terms: ["Balansstoornissen"], code: "PD" },
	
{ terms: ["Hyperkinetische bewegingstoornissen"], code: "PF" },
	{ terms: ["Functionele myoclonus / schokken"], code: "PF1" },
	{ terms: ["Functionele dystonie"], code: "PF2" },
	{ terms: ["Tremor"], code: "PF3" },
	{ terms: ["Tremor Parkinson"], code: "PF31" },
	{ terms: ["Tremor cerebellair"], code: "PF32" },
	{ terms: ["Tremor medicamenteus"], code: "PF33" },
	{ terms: ["Essentiële tremor"], code: "PF34" },
	{ terms: ["Functionele tremor"], code: "PF35" },
				
{ terms: ["Gemengde functionele bewegingsstoornissen"], code: "PK" },
	
	// symptomen
	
{ "code": "SA", "terms": ["Symptomen, tekenen of klinische bevindingen"] },
{ "code": "SA0", "terms": ["Symptomen van bloed, bloedvormende organen of immuunsysteem"] },
{ "code": "SA00", "terms": ["Anemie-gerelateerde symptomen (vermoeidheid, bleekheid)"] },
{ "code": "SA01", "terms": ["Bloedingsneiging / hematomen"] },
{ "code": "SA02", "terms": ["Lymfadenopathie"] },
{ "code": "SA03", "terms": ["Koorts van onbekende oorsprong"] },
{ "code": "SA1", "terms": ["Endocriene, nutritionele of metabole symptomen"] },
{ "code": "SA10", "terms": ["Gewichtsverlies / cachexie"] },
{ "code": "SA11", "terms": ["Gewichtstoename / obesitas-gerelateerde symptomen"] },
{ "code": "SA12", "terms": ["Hypoglycemie-achtige symptomen"] },
{ "code": "SA13", "terms": ["Hyperthyreoïdie-achtige symptomen"] },
{ "code": "SA14", "terms": ["Hypothyreoïdie-achtige symptomen"] },
{ "code": "SA2", "terms": ["Symptomen van spraak, taal of stem"] },
{ "code": "SA20", "terms": ["Dysartrie"] },
{ "code": "SA21", "terms": ["Afasie"] },
{ "code": "SA22", "terms": ["Dysfonie / heesheid"] },
{ "code": "SA23", "terms": ["Spraakapraxie"] },
{ "code": "SA3", "terms": ["Mentale of gedragsmatige symptomen"] },
{ "code": "SA30", "terms": ["Verwardheid / desoriëntatie"] },
{ "code": "SA31", "terms": ["Angstklachten"] },
{ "code": "SA32", "terms": ["Depressieve symptomen"] },
{ "code": "SA33", "terms": ["Agressie / agitatie"] },
{ "code": "SA34", "terms": ["Slaapproblemen"] },
{ "code": "SA4", "terms": ["Symptomen van het zenuwstelsel"] },
{ "code": "SA40", "terms": ["Duizeligheid / vertigo"] },
{ "code": "SA41", "terms": ["Hoofdpijn"] },
{ "code": "SA42", "terms": ["Paresthesieën"] },
{ "code": "SA43", "terms": ["Krachtsverlies"] },
{ "code": "SA44", "terms": ["Tremor"] },
{ "code": "SA5", "terms": ["Symptomen van het visuele systeem"] },
{ "code": "SA50", "terms": ["Wazig zien"] },
{ "code": "SA51", "terms": ["Diplopie"] },
{ "code": "SA52", "terms": ["Visusverlies"] },
{ "code": "SA53", "terms": ["Fotofobie"] },
{ "code": "SA6", "terms": ["Symptomen van oor of mastoïd"] },
{ "code": "SA60", "terms": ["Tinnitus"] },
{ "code": "SA61", "terms": ["Gehoorverlies"] },
{ "code": "SA62", "terms": ["Otalgie"] },
{ "code": "SA63", "terms": ["Otorrhoe"] },
{ "code": "SA7", "terms": ["Symptomen van het cardiovasculaire systeem"] },
{ "code": "SA70", "terms": ["Pijn op de borst"] },
{ "code": "SA71", "terms": ["Hartkloppingen"] },
{ "code": "SA72", "terms": ["Perifeer oedeem"] },
{ "code": "SA73", "terms": ["Syncope / presyncope"] },
{ "code": "SA8", "terms": ["Symptomen van het ademhalingsstelsel"] },
{ "code": "SA80", "terms": ["Dyspneu"] },
{ "code": "SA81", "terms": ["Hoesten"] },
{ "code": "SA82", "terms": ["Hemoptoë"] },
{ "code": "SA83", "terms": ["Piepende ademhaling"] },
{ "code": "SA9", "terms": ["Symptomen van het spijsverteringsstelsel of abdomen"] },
{ "code": "SA90", "terms": ["Buikpijn"] },
{ "code": "SA91", "terms": ["Misselijkheid / braken"] },
{ "code": "SA92", "terms": ["Diarree"] },
{ "code": "SA93", "terms": ["Obstipatie"] },
{ "code": "SA94", "terms": ["Rectaal bloedverlies"] },	

{ code: "T", terms: ["Klinisch onderzoek"] },

// ======================
// ANAMNESE
// ======================

{ code: "TA", terms: ["Anamnese"] },

{ code: "TA1", terms: ["Burgerlijke stand"] },

{ code: "TA2", terms: ["Familiale anamnese"] },

{ code: "TA3", terms: ["Beroepsanamnese"] },

{ code: "TA4", terms: ["Medische voorgeschiedenis"] },

{ code: "TA5", terms: ["Anamnese lichamelijke klachten en functies"] },

{ code: "TA6", terms: ["Anamnese psychische klachten en functies"] },

{ code: "TA7", terms: ["Anamnese relationele klachten"] },

{ code: "TA8", terms: ["Anamnese sociaal-maatschappelijke klachten"] },


// ======================
// LICHAMELIJK ONDERZOEK
// ======================

{ code: "TB", terms: ["Lichamelijk onderzoek"] },

{ code: "TB1", terms: ["Algemeen voorkomen"] },
{ code: "TB1A", terms: ["Gewicht"] },
{ code: "TB1B", terms: ["Lengte"] },

{ code: "TB2", terms: ["Huid en adnexen"] },
{ code: "TB2A", terms: ["Huid"] },
{ code: "TB2B", terms: ["Slijmvliezen"] },
{ code: "TB2C", terms: ["Haar"] },
{ code: "TB2D", terms: ["Nagels"] },

{ code: "TB3", terms: ["Hals en hoofdregio"] },
{ code: "TB3A", terms: ["Hals"] },
{ code: "TB3B", terms: ["Nek"] },
{ code: "TB3C", terms: ["Hoofd"] },
{ code: "TB3D", terms: ["Neus"] },
{ code: "TB3E", terms: ["Keel"] },

{ code: "TB4", terms: ["Klieren en regio’s"] },
{ code: "TB4A", terms: ["Adenopathie"] },
{ code: "TB4B", terms: ["Mammae"] },
{ code: "TB4C", terms: ["Liesbreuk"] },

{ code: "TB5", terms: ["Cardiovasculair onderzoek"] },
{ code: "TB5A", terms: ["Bloeddruk"] },
{ code: "TB5B", terms: ["Pols"] },
{ code: "TB5C", terms: ["Hart (IPPA)"] },
{ code: "TB5D", terms: ["Arteriële pulsaties"] },

{ code: "TB6", terms: ["Longonderzoek"] },
{ code: "TB6A", terms: ["Inspectie"] },
{ code: "TB6B", terms: ["Palpatie"] },
{ code: "TB6C", terms: ["Percussie"] },
{ code: "TB6D", terms: ["Auscultatie"] },

{ code: "TB7", terms: ["Abdomen"] },
{ code: "TB7A", terms: ["Inspectie"] },
{ code: "TB7B", terms: ["Palpatie"] },
{ code: "TB7C", terms: ["Percussie"] },
{ code: "TB7D", terms: ["Auscultatie"] },
{ code: "TB7E", terms: ["Lever"] },
{ code: "TB7F", terms: ["Milt"] },

{ code: "TB8", terms: ["Urogenitaal onderzoek"] },
{ code: "TB8A", terms: ["Anus"] },
{ code: "TB8B", terms: ["Prostaat"] },
{ code: "TB8C", terms: ["Penis"] },
{ code: "TB8D", terms: ["Scrotum"] },
{ code: "TB8E", terms: ["Vagina"] },
{ code: "TB8F", terms: ["Uterus"] },

{ code: "TB9", terms: ["Ledematen - locomotorisch systeem en gang"] },
{ code: "TB9A", terms: ["Oedemen"] },
{ code: "TB9B", terms: ["Varices"] },
{ code: "TB9C", terms: ["Arteriële pulsaties"] },

{ code: "TB9F", terms: ["Gewrichten"] },
{ code: "TB9G", terms: ["Spieren"] },
{ code: "TB9H", terms: ["Pezen"] },
{ code: "TB9K", terms: ["Wervelkolom"] },
{ code: "TB9L", terms: ["Lasègue-teken"] },
{ code: "TB9M", terms: ["Gangstoornissen"] },


  { code: "U", terms: ["Neurologisch onderzoek (procedure)"] },

  { code: "UA", terms: ["Bewustzijnsonderzoek (procedure)"] },
  { code: "UA1", terms: ["Graad van bewustzijn (observable)"] },
  { code: "UA2", terms: ["Glasgow Coma Scale beoordeling (observable)"] },

  { code: "UB", terms: ["Motorisch onderzoek (procedure)"] },
  { code: "UB1", terms: ["Spierkracht beoordeling (observable)"] },
  { code: "UB2", terms: ["Spiertonus beoordeling (observable)"] },
  { code: "UB3", terms: ["Onderzoek naar nekstijfheid (procedure)"] },
  { code: "UB4", terms: ["Tremor beoordeling (observable)"] },

  { code: "UC", terms: ["Sensibiliteitsonderzoek (procedure)"] },
  { code: "UC1", terms: ["Tastzin beoordeling (observable)"] },
  { code: "UC2", terms: ["Pijnzin beoordeling (observable)"] },
  { code: "UC3", terms: ["Temperatuurzin beoordeling (observable)"] },
  { code: "UC4", terms: ["Diepe sensibiliteit beoordeling (observable)"] },
  { code: "UC5", terms: ["Stemvorktest (procedure)"] },

  { code: "UD", terms: ["Reflexonderzoek (procedure)"] },
  { code: "UD1", terms: ["Peesreflex beoordeling (observable)"] },
  { code: "UD2", terms: ["Voetzoolreflex beoordeling (procedure)"] },
  { code: "UD3", terms: ["Corneareflex beoordeling (procedure)"] },

  { code: "UE", terms: ["Stamreflexonderzoek (procedure)"] },
  { code: "UE1", terms: ["Corneomandibulaire reflex beoordeling (procedure)"] },
  { code: "UE2", terms: ["Palmomentale reflex beoordeling (procedure)"] },
  { code: "UE3", terms: ["Snautreflex beoordeling (procedure)"] },

  { code: "UF", terms: ["Evenwichtsonderzoek (procedure)"] },
  { code: "UF1", terms: ["Romberg test (procedure)"] },
  { code: "UF2", terms: ["Wijsvingerproef (procedure)"] },
  { code: "UF3", terms: ["Teken van Weill (procedure)"] },

  { code: "UG", terms: ["Coördinatieonderzoek (procedure)"] },
  { code: "UG1", terms: ["Vinger-neus test (procedure)"] },
  { code: "UG2", terms: ["Adiadochokinesetest (procedure)"] },

  { code: "UH", terms: ["Craniale zenuwonderzoek (procedure)"] },
  { code: "UH1", terms: ["Oculomotorische zenuwonderzoek (procedure)"] },
  { code: "UH2", terms: ["Trigeminusonderzoek (procedure)"] },
  { code: "UH3", terms: ["Facialisonderzoek (procedure)"] },
  { code: "UH4", terms: ["Glossopharyngeus/Vagus onderzoek (procedure)"] },
  { code: "UH5", terms: ["Vestibulocochlearis onderzoek (procedure)"] },

  { code: "UK", terms: ["Sfincteronderzoek (procedure)"] },
    { code: "UK1", terms: ["Anale sfincter onderzoek (procedure)"] },
	{ code: "UK2", terms: ["Uretrale sfincter onderzoek (procedure)"] },
	{ code: "UK3", terms: ["Pupil sfincter onderzoek (procedure)"] },
	{ code: "UK4", terms: ["Slik sfincter onderzoek (procedure)"] },
  
  { code: "UL", terms: ["Onderzoek van autonoom zenuwstelsel (procedure)"] },
    { code: "UL2", terms: ["Interoceptie"] },

  { code: "UM", terms: ["Zintuigonderzoek (procedure)"] },
    { code: "UM1", terms: ["Oogonderzoek (procedure)"] },
    { code: "UM1A", terms: ["Visus beoordeling (observable)"] },
	{ code: "UM1B", terms: ["Oogbewegingsonderzoek (procedure)"] },
	{ code: "UM1C", terms: ["Nystagmus beoordeling (observable)"] },
	{ code: "UM1D", terms: ["Gezichtsveldonderzoek (procedure)"] },
	{ code: "UM1E", terms: ["Pupilreactie beoordeling (observable)"] },
	{ code: "UM1F", terms: ["Corneagevoeligheid beoordeling (observable)"] },
    { code: "UM2", terms: ["Gehooronderzoek (procedure)"] },
	{ code: "UM2A", terms: ["Geluid - Toonhoogtes"] },
	{ code: "UM2B", terms: ["Richting van het geluid"] },
  { code: "UM5", terms: ["Reukonderzoek (procedure)"] },
	{ code: "UM5A", terms: ["Geur"] },
	{ code: "UM5B", terms: ["Chemische stoffen"] },
  { code: "UM3", terms: ["Smaakonderzoek (procedure)"] },
  	{ code: "UM3A", terms: ["Zoet"] },
	{ code: "UM3B", terms: ["Zuur"] },
	{ code: "UM3C", terms: ["Bitter"] },
	{ code: "UM3D", terms: ["Umami"] },
  { code: "UM4", terms: ["Huid: tastgevoel - somatosensorisch (procedure)"] },
	{ code: "UM4A", terms: ["Druk"] },
	{ code: "UM4B", terms: ["Temperatuur"] },
	{ code: "UM4C", terms: ["Pijn"] },
	{ code: "UM4D", terms: ["Trillingen"] },
 { code: "UM6", terms: ["Proprioceptie"] },
		    
{ terms: ["Slotakkoord"], code: "ZZ" }
];
