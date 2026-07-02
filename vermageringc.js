window.DATASET = [

  { terms:["Vermagering"], code:"V" },
  { terms:["Vermagering oorzaak"], code:"V1" },

  // A – Psychosociaal
  { terms:["Psychosociale oorzaak"], code:"V1A" },
  { terms:["Depressie"], code:"V1A1" },
  { terms:["Angststoornis"], code:"V1A2" },
  { terms:["Stress of burn-out"], code:"V1A3" },
  { terms:["Rouwreactie"], code:"V1A4" },
  { terms:["Eetstoornis"], code:"V1A5" },
  { terms:["Sociaal isolement of armoede"], code:"V1A6" },
  { terms:["Verslaving alcohol of drugs"], code:"V1A7" },

  // B – Gastro-intestinaal
  { terms:["Gastro-intestinale oorzaak"], code:"V1B" },

  { terms:["Malabsorptie"], code:"V1B1" },
  { terms:["Coeliakie"], code:"V1B1A" },
  { terms:["Crohn of colitis"], code:"V1B1B" },
  { terms:["Pancreasinsufficientie"], code:"V1B1C" },
  { terms:["SIBO"], code:"V1B1D" },

  { terms:["Gastro-intestinale maligniteit"], code:"V1B2" },
  { terms:["Maagcarcinoom"], code:"V1B2A" },
  { terms:["Pancreaskanker"], code:"V1B2B" },
  { terms:["Coloncarcinoom"], code:"V1B2C" },
  { terms:["Lever- of galwegtumoren"], code:"V1B2D" },

  { terms:["Chronische GI-infectie"], code:"V1B3" },
  { terms:["Parasitaire infectie"], code:"V1B3A" },
  { terms:["Chronische hepatitis"], code:"V1B3B" },

  { terms:["Functionele GI oorzaak"], code:"V1B4" },
  { terms:["Chronische diarree"], code:"V1B4A" },
  { terms:["Dyspepsie met anorexie"], code:"V1B4B" },

  // C – Endocrien
  { terms:["Endocriene oorzaak"], code:"V1C" },

  { terms:["Schildklierprobleem"], code:"V1C1" },
  { terms:["Hyperthyreoidie"], code:"V1C1A" },
  { terms:["Thyreotoxicosis factitia"], code:"V1C1B" },

  { terms:["Diabetes"], code:"V1C2" },
  { terms:["Diabetes type 1"], code:"V1C2A" },
  { terms:["Ongecontroleerde diabetes type 2"], code:"V1C2B" },

  { terms:["Bijnierinsufficientie"], code:"V1C3" },
  { terms:["Addison"], code:"V1C3A" },

  { terms:["Hypofyseprobleem"], code:"V1C4" },
  { terms:["Hypopituïtarisme"], code:"V1C4A" },

  // D – Infectieus
  { terms:["Infectieuze oorzaak"], code:"V1D" },

  { terms:["Systemische infectie"], code:"V1D1" },
  { terms:["Tuberculose"], code:"V1D1A" },
  { terms:["HIV"], code:"V1D1B" },
  { terms:["Endocarditis"], code:"V1D1C" },
  { terms:["Chronische schimmelinfectie"], code:"V1D1D" },

  { terms:["Post-infectieuze anorexie"], code:"V1D2" },

  // E – Maligniteiten niet-GI
  { terms:["Niet-GI maligniteit"], code:"V1E" },

  { terms:["Hematologische tumor"], code:"V1E1" },
  { terms:["Lymfoom"], code:"V1E1A" },
  { terms:["Leukemie"], code:"V1E1B" },
  { terms:["Myeloproliferatieve ziekte"], code:"V1E1C" },

  { terms:["Solide tumor"], code:"V1E2" },
  { terms:["Longkanker"], code:"V1E2A" },
  { terms:["Niercelcarcinoom"], code:"V1E2B" },
  { terms:["Prostaat- of gynaecologische tumor"], code:"V1E2C" },
  { terms:["CUP onbekende primaire tumor"], code:"V1E2D" },

  // F – Cardiopulmonaal
  { terms:["Cardiopulmonaire oorzaak"], code:"V1F" },
  { terms:["Hartfalen"], code:"V1F1" },
  { terms:["COPD of emfyseem"], code:"V1F2" },
  { terms:["Pulmonale hypertensie"], code:"V1F3" },

  // G – Neurologisch
  { terms:["Neurologische oorzaak"], code:"V1G" },

  { terms:["Neurodegeneratieve aandoening"], code:"V1G1" },
  { terms:["Parkinson"], code:"V1G1A" },
  { terms:["Alzheimer of dementie"], code:"V1G1B" },

  { terms:["Neurologische dysfagie"], code:"V1G2" },
  { terms:["CVA"], code:"V1G2A" },
  { terms:["ALS"], code:"V1G2B" },

  // H – Systemisch inflammatoir
  { terms:["Systemische inflammatoire oorzaak"], code:"V1H" },

  { terms:["Auto-immuunziekte"], code:"V1H1" },
  { terms:["Reumatoide artritis"], code:"V1H1A" },
  { terms:["SLE"], code:"V1H1B" },
  { terms:["Vasculitis"], code:"V1H1C" },
  { terms:["Polymyalgia rheumatica"], code:"V1H1D" },

  { terms:["Sarcoidose"], code:"V1H2" },

  // I – Medicatie / intoxicaties
  { terms:["Medicatie of intoxicatie"], code:"V1I" },

  { terms:["Medicatie"], code:"V1I1" },
  { terms:["Metformine"], code:"V1I1A" },
  { terms:["GLP-1 agonisten"], code:"V1I1B" },
  { terms:["SSRI of SNRI"], code:"V1I1C" },
  { terms:["Chemotherapie"], code:"V1I1D" },

  { terms:["Alcoholmisbruik"], code:"V1I2" },
  { terms:["Drugs cocaïne of amfetamines"], code:"V1I3" },

  // J – Overig
  { terms:["Overige oorzaak"], code:"V1J" },
  { terms:["Hypermetabole toestand"], code:"V1J1" },
  { terms:["Koorts van onbekende oorsprong"], code:"V1J1A" },
  { terms:["Cachexie bij chronische ziekte"], code:"V1J1B" },

  { terms:["Psychiatrisch of somatoform"], code:"V1J2" },
  { terms:["Onverklaard na volledig onderzoek"], code:"V1J3" },

  // K – Artefact
  { terms:["Artefact of meetfout"], code:"V1K" },
  { terms:["Foutieve meting"], code:"V1K1" },
   
  // --- V2: Vermagering onderzoeken ---

  { terms:["Vermagering onderzoeken"], code:"V2" },

  // A – Basis bloed- en urineonderzoek
  { terms:["Basis bloed - urine - feces onderzoek"], code:"V2A" },
  { terms:["Volledig bloedbeeld"], code:"V2A1" },
  { terms:["CRP"], code:"V2A2" },
  { terms:["BSE sedimentatie"], code:"V2A3" },
  { terms:["Elektrolyten"], code:"V2A4" },
  { terms:["Nierfunctie"], code:"V2A5" },
  { terms:["Lever- en pancreas-functies"], code:"V2A6" },
  { terms:["Albumine"], code:"V2A7" },
  { terms:["Urineonderzoek"], code:"V2A8" },
  { terms:["Stoelgangonderzoek"], code:"V2A9" },

  // B – Endocriene testen
  { terms:["Endocriene testen"], code:"V2B" },
  { terms:["TSH"], code:"V2B1" },
  { terms:["Vrij T4"], code:"V2B2" },
  { terms:["Vrij T3"], code:"V2B3" },
  { terms:["HbA1c"], code:"V2B4" },
  { terms:["Nuchtere glucose"], code:"V2B5" },
  { terms:["Cortisol"], code:"V2B6" },
  { terms:["ACTH"], code:"V2B7" },

  // C – Infectieuze testen
  { terms:["Infectieuze testen"], code:"V2C" },
  { terms:["HIV-test"], code:"V2C1" },
  { terms:["Hepatitis B en C"], code:"V2C2" },
  { terms:["Tuberculose IGRA"], code:"V2C3" },
  { terms:["CMV of EBV serologie"], code:"V2C4" },

  // D – Gastro-intestinale onderzoeken
  { terms:["Gastro-intestinale onderzoeken"], code:"V2D" },
  { terms:["Ferritine en ijzerstudie"], code:"V2D1" },
  { terms:["Vitamine B12"], code:"V2D2" },
  { terms:["Foliumzuur"], code:"V2D3" },
  { terms:["Vitamine D"], code:"V2D4" },
  { terms:["Coeliakieserologie"], code:"V2D5" },
  { terms:["Fecaal calprotectine"], code:"V2D6" },
  { terms:["Fecaal occult bloed"], code:"V2D7" },

  // E – Beeldvorming
  { terms:["Beeldvorming"], code:"V2E" },
  { terms:["RX thorax"], code:"V2E1" },
  { terms:["Echo abdomen"], code:"V2E2" },
  { terms:["CT thorax"], code:"V2E3" },
  { terms:["CT abdomen"], code:"V2E4" },
  { terms:["CT thorax-abdomen-bekken CT TAP"], code:"V2E5" },
  { terms:["MRI abdomen"], code:"V2E6" },
  { terms:["PET-CT"], code:"V2E7" },

  // F – Maligniteitsgerichte onderzoeken
  { terms:["Maligniteitsgerichte onderzoeken"], code:"V2F" },
  { terms:["LDH"], code:"V2F1" },
  { terms:["PSA"], code:"V2F2" },
  { terms:["CA19-9"], code:"V2F3" },
  { terms:["CEA"], code:"V2F4" },
  { terms:["Bloeduitstrijkje"], code:"V2F5" },

  // G – Functionele en aanvullende testen
  { terms:["Aanvullende testen"], code:"V2G" },
  { terms:["Schildklierantistoffen"], code:"V2G1" },
  { terms:["Pancreas elastase in stoelgang"], code:"V2G2" },
  { terms:["Lactose waterstofademtest"], code:"V2G3" },
  { terms:["SIBO ademtest"], code:"V2G4" },
  { terms:["Holter of ECG bij vermoeden cardiaal"], code:"V2G5" },
  
  // --- V3: Vermagering beleid / aanpak ---

  { terms:["Vermagering beleid"], code:"V3" },

  // A – Urgentie & rode vlaggen
  { terms:["Urgentie en rode vlaggen"], code:"V3A" },
  { terms:["Ernstig gewichtsverlies meer dan 10 procent"], code:"V3A1" },
  { terms:["Koorts, nachtzweten, meer dan 10 % (B symptomen)"], code:"V3A2" },
{ terms:["Koorts (B symptoom)"], code:"V3A2A" },
{ terms:["Nachtzweten (B symptoom)"], code:"V3A2B" },
{ terms:["Onbedoeld gewichtsverlies meer dan 10 procent (B symptoom)"], code:"V3A2C" },
  
  { terms:["Snelle klinische achteruitgang"], code:"V3A3" },
  { terms:["Ernstige anemie of afwijkende bloedwaarden"], code:"V3A4" },
  { terms:["Onverklaarde pijn of obstructiesymptomen"], code:"V3A5" },

  // B – Basisbeleid
  { terms:["Basisbeleid"], code:"V3B" },
  { terms:["Anamnese gericht op inname absorptie en verbruik"], code:"V3B1" },
  { terms:["Lichamelijk onderzoek"], code:"V3B2" },
  { terms:["Medicatie evaluatie"], code:"V3B3" },
  { terms:["Screening op alcohol en drugs"], code:"V3B4" },
  { terms:["Evaluatie van eetlust en voedingspatroon"], code:"V3B5" },

  // C – Voedingsbeleid
  { terms:["Voedingsbeleid"], code:"V3C" },
  { terms:["Dieetadvies"], code:"V3C1" },
  { terms:["Energieverrijkte voeding"], code:"V3C2" },
  { terms:["Aanvullende drinkvoeding"], code:"V3C3" },
  { terms:["Consult diëtist"], code:"V3C4" },
  { terms:["Behandeling van ondervoeding"], code:"V3C5" },

  // D – Psychosociaal beleid
  { terms:["Psychosociaal beleid"], code:"V3D" },

// --- V4: Vermagering opvolging & monitoring ---

  { terms:["Vermagering opvolging en monitoring"], code:"V4" },

  // A – Monitoring van gewicht en voeding
  { terms:["Monitoring van gewicht en voeding"], code:"V4A" },
  { terms:["Regelmatige gewichtsmeting"], code:"V4A1" },
  { terms:["Evaluatie van eetlust"], code:"V4A2" },
  { terms:["Voedingsdagboek"], code:"V4A3" },
  { terms:["Evaluatie van inname en voedingskwaliteit"], code:"V4A4" },

  // B – Monitoring van symptomen
  { terms:["Monitoring van symptomen"], code:"V4B" },
  { terms:["Opvolgen van B symptomen"], code:"V4B1" },
  { terms:["Opvolgen van pijnklachten"], code:"V4B2" },
  { terms:["Opvolgen van gastro-intestinale klachten"], code:"V4B3" },
  { terms:["Opvolgen van vermoeidheid"], code:"V4B4" },

  // C – Monitoring van bloedwaarden
  { terms:["Monitoring van bloedwaarden"], code:"V4C" },
  { terms:["Herhalen van bloedonderzoek"], code:"V4C1" },
  { terms:["Opvolgen van ontstekingsparameters"], code:"V4C2" },
  { terms:["Opvolgen van leverfunctie"], code:"V4C3" },
  { terms:["Opvolgen van nierfunctie"], code:"V4C4" },
  { terms:["Opvolgen van endocriene waarden"], code:"V4C5" },

  // D – Evaluatie van respons op behandeling
  { terms:["Evaluatie van respons op behandeling"], code:"V4D" },
  { terms:["Evaluatie van gewichtsevolutie"], code:"V4D1" },
  { terms:["Evaluatie van symptoomverbetering"], code:"V4D2" },
  { terms:["Evaluatie van therapietrouw"], code:"V4D3" },
  { terms:["Aanpassen van behandeling indien nodig"], code:"V4D4" },

  // E – Heronderzoek en beeldvorming
  { terms:["Heronderzoek en beeldvorming"], code:"V4E" },
  { terms:["Herhalen van beeldvorming"], code:"V4E1" },
  { terms:["Herhalen van CT TAP indien indicatie"], code:"V4E2" },
  { terms:["Herhalen van echo abdomen"], code:"V4E3" },
  { terms:["Aanvullende beeldvorming bij nieuwe symptomen"], code:"V4E4" },

  // F – Multidisciplinaire opvolging
  { terms:["Multidisciplinaire opvolging"], code:"V4F" },
  { terms:["Opvolging door diëtist"], code:"V4F1" },
  { terms:["Opvolging door psycholoog"], code:"V4F2" },
  { terms:["Opvolging door specialist"], code:"V4F3" },
  { terms:["Multidisciplinair overleg"], code:"V4F4" }

];
