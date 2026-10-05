const SITE_EMAIL = 'hello@example.com';
const SUBSCRIBERS_KEY = 'kathavali_subscribers';

const stories = {
  rain:{title:'ಮಳೆ ಬಂದು ಹೋದ ಸಂಜೆ',category:'ಸಣ್ಣ ಕಥೆ · 8 ನಿಮಿಷ ಓದು',body:['ಮಳೆ ಶುರುವಾದಾಗ ಮಧು ಹಳೆಯ ಮನೆಯ ಬಾಗಿಲ ಬಳಿ ನಿಂತಿದ್ದಳು. ಹತ್ತು ವರ್ಷಗಳ ಹಿಂದೆ ಇಲ್ಲಿಂದ ಹೊರಟಾಗಲೂ ಇದೇ ತರಹದ ಮಳೆ. ಆಗ ಅವಳ ಕೈಯಲ್ಲಿ ಒಂದು ನೀಲಿ ಚೀಲ ಇತ್ತು; ಈಗ ಕೈಗಳು ಖಾಲಿ.','ಅಂಗಳದ ಮಧ್ಯದಲ್ಲಿದ್ದ ಮಾವಿನ ಮರ ದೊಡ್ಡದಾಗಿತ್ತು. ಅದರ ಕೊಂಬೆಗಳಿಂದ ನೀರಿನ ಹನಿಗಳು ನೆಲಕ್ಕೆ ಬೀಳುವ ಸದ್ದು ಅವಳಿಗೆ ಅಪ್ಪನ ನಗು ನೆನಪಿಸಿತು. “ಮಳೆ ಬಂದರೆ ಮನೆಗೆ ಬೇಗ ಬಾ,” ಎಂದು ಹೇಳುತ್ತಿದ್ದ ಆ ಧ್ವನಿ ಇನ್ನೂ ಮನೆಯ ಗೋಡೆಗಳಲ್ಲಿ ಉಳಿದಂತೆ ಕಂಡಿತು.','ಅಡುಗೆ ಮನೆಯ ಕಿಟಕಿಯ ಬಳಿ ಹಳೆಯ ತಾಮ್ರದ ಪಾತ್ರೆ ಇತ್ತು. ಅದರ ಪಕ್ಕದಲ್ಲಿ ಮಧು ಬಾಲ್ಯದಲ್ಲಿ ಮರೆಮಾಡಿದ್ದ ಒಂದು ಕಾಗದ ಸಿಕ್ಕಿತು. ನೀರು ತಗುಲಿ ಮಸುಕಾದ ಅಕ್ಷರಗಳಲ್ಲಿ ಬರೆದಿತ್ತು — “ನಾನು ದೊಡ್ಡವಳಾದ ಮೇಲೆ ಹಿಂತಿರುಗಿ ಬರುತ್ತೇನೆ.”','ಅವಳು ನಗುತ್ತಾ ಆ ಕಾಗದವನ್ನು ಎದೆಯ ಬಳಿ ಇಟ್ಟುಕೊಂಡಳು. ಹೊರಗೆ ಮಳೆ ನಿಂತಿತ್ತು. ಆದರೆ ಮನೆಯ ಒಳಗೆ, ಇಷ್ಟು ದಿನಗಳಿಂದ ಕಾಯುತ್ತಿದ್ದ ಒಂದು ಮಳೆ ಈಗಷ್ಟೇ ಶುರುವಾಗಿತ್ತು.']},
  tree:{title:'ಆಲದ ಮರದ ಕೆಳಗೆ',category:'ಹಳ್ಳಿ ಬದುಕು · 6 ನಿಮಿಷ ಓದು',body:['ಊರಿನ ಆಲದ ಮರಕ್ಕೆ ವಯಸ್ಸೆಷ್ಟು ಎಂದು ಯಾರಿಗೂ ಗೊತ್ತಿರಲಿಲ್ಲ. ಅದರ ನೆರಳಿನಲ್ಲಿ ಪಂಚಾಯಿತಿ ಕೂತಿತ್ತು, ಮದುವೆಯ ಮಾತುಗಳಾಗಿದ್ದವು, ಸೋತವರ ಕಣ್ಣೀರೂ ಬಿದ್ದಿತ್ತು.','ಪ್ರತಿದಿನ ಸಂಜೆ ಶಂಕರಪ್ಪ ಅಲ್ಲಿ ಬಂದು ಕುಳಿತುಕೊಳ್ಳುತ್ತಿದ್ದರು. ಅವರನ್ನು ನೋಡಲು ಮಕ್ಕಳು, ಹಾಲಿನ ಡಬ್ಬಿ ಹಿಡಿದವರು, ಅಂಗಡಿಯ ರಾಮಣ್ಣ — ಎಲ್ಲರಿಗೂ ಒಂದು ಕಾರಣ ಇತ್ತು. ಆದರೆ ಶಂಕರಪ್ಪನಿಗೆ ಒಂದೇ ಕಾರಣ: ಜನರ ಮಾತು ಕೇಳುವುದು.','ಒಂದು ದಿನ ಶಾಲೆಯಿಂದ ಬಂದ ಚಿಕ್ಕ ಗೌರಿ, “ತಾತ, ಈ ಮರ ಮಾತಾಡುತ್ತದಾ?” ಎಂದು ಕೇಳಿದಳು. ಶಂಕರಪ್ಪ ನಗುತ್ತಾ, “ನಾವು ಒಬ್ಬರ ಮಾತು ಒಬ್ಬರು ಕೇಳಿದಾಗ, ಈ ಮರ ಖುಷಿಯಿಂದ ಎಲೆ ಅಲ್ಲಾಡಿಸುತ್ತದೆ,” ಎಂದರು.','ಆ ಸಂಜೆ ಗಾಳಿ ಬಂದಾಗ ಎಲೆಗಳೆಲ್ಲ ಒಟ್ಟಿಗೆ ಸರಸರವೆಂದವು. ಗೌರಿ ಅದನ್ನು ಕೇಳಿ, ಮರ ತನ್ನ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸಿದೆ ಎಂದುಕೊಂಡಳು.']},
  station:{title:'ನಿಲ್ದಾಣದ ಕೊನೆಯ ಬೆಂಚು',category:'ಸಣ್ಣ ಕಥೆ · 5 ನಿಮಿಷ ಓದು',body:['ನಿಲ್ದಾಣದ ಗಡಿಯಾರ ಐದು ನಲವತ್ತೈದು ತೋರಿಸುತ್ತಿತ್ತು. ಕೊನೆಯ ಬೆಂಚಿನ ಒಂದು ತುದಿಯಲ್ಲಿ ರಘು ಕುಳಿತಿದ್ದ. ಇನ್ನೊಂದು ತುದಿಯಲ್ಲಿ ಬೂದು ಬಣ್ಣದ ಶಾಲು ಹೊದ್ದಿದ್ದ ಒಬ್ಬ ಅಜ್ಜಿ.','ರೈಲು ತಡವಾಗುತ್ತಲೇ ಇತ್ತು. ಮಾತಿಲ್ಲದ ಕಾಯುವಿಕೆ ಕೆಲವೊಮ್ಮೆ ತುಂಬಾ ಭಾರವಾಗುತ್ತದೆ. ರಘು ಕೈಯಲ್ಲಿದ್ದ ಟಿಕೆಟ್‌ ನೋಡಿದ. ಅದು ಅವನು ಮನೆ ಬಿಟ್ಟು ಹೊರಡುವ ಮೊದಲ ಟಿಕೆಟ್.','“ಮೊದಲ ಬಾರಿಗೆ ಹೋಗ್ತಿದ್ದೀಯಾ?” ಅಜ್ಜಿ ಕೇಳಿದರು. ರಘು ತಲೆಯಾಡಿಸಿದ. “ಭಯ ಬೇಡ. ಹೋದ ಜಾಗದಲ್ಲಿ ಹೊಸ ಮನೆ ಕಟ್ಟಿಕೊಳ್ಳಬಹುದು. ಆದರೆ ಹಿಂದಿನ ಮನೆಗೆ ಹೋಗುವ ರೈಲು ಯಾವಾಗಲೂ ಇರುತ್ತದೆ,” ಎಂದು ಅವರು ಹೇಳಿದರು.','ರೈಲು ಬಂದಾಗ ಅಜ್ಜಿ ಇಳಿಯುವ ಬೋಗಿಗೆ ಹತ್ತಿದರು; ರಘು ಹೊರಡುವ ಬೋಗಿಗೆ. ಕಿಟಕಿಯಿಂದ ಕೈ ಬೀಸುವಷ್ಟರಲ್ಲಿ, ಅವನಿಗೆ ಆ ಕೊನೆಯ ಬೆಂಚು ಸ್ವಲ್ಪ ಕಡಿಮೆ ಒಂಟಿಯಾಗಿ ಕಾಣಿಸಿತು.']},
  saree:{title:'ಅಮ್ಮನ ಹಳೆಯ ಸೀರೆ',category:'ಅನುಭವ · 7 ನಿಮಿಷ ಓದು',body:['ಅಲಮಾರಿಯನ್ನು ತೆರೆಯುವಾಗ ಒಂದು ಹಳದಿ ಬಣ್ಣದ ಸೀರೆ ಕೆಳಗೆ ಜಾರಿಬಿತ್ತು. ಅದರ ಅಂಚಿನಲ್ಲಿ ಕೆಂಪು ಹೂಗಳಿದ್ದವು. ಅದನ್ನು ನೋಡುತ್ತಿದ್ದಂತೆ ಮನೆ ತುಂಬಾ ಅಮ್ಮನ ಸುವಾಸನೆ ಹರಡಿದಂತಾಯಿತು.','“ಇದನ್ನು ವಿಶೇಷ ದಿನಕ್ಕೆ ಮಾತ್ರ ತೊಡುತ್ತೇನೆ,” ಎಂದು ಅಮ್ಮ ಹೇಳುತ್ತಿದ್ದಳು. ವಿಶೇಷ ದಿನ ಯಾವುದು ಎಂದು ಕೇಳಿದರೆ, “ನೀನು ಸಂತೋಷವಾಗಿರುವ ದಿನ,” ಎನ್ನುತ್ತಿದ್ದಳು.','ಅಮ್ಮ ಹೋದ ನಂತರ ಆ ಸೀರೆ ಅಲಮಾರಿಯಲ್ಲಿಯೇ ಇತ್ತು. ಇಂದು ನನ್ನ ಮಗಳ ಮೊದಲ ಶಾಲಾ ಕಾರ್ಯಕ್ರಮ. ಸೀರೆಯನ್ನು ಮಡಚುವಾಗ, ಅದರೊಳಗೆ ಒಂದು ಚಿಕ್ಕ ಕಾಗದ ಸಿಕ್ಕಿತು — “ನಿನ್ನ ನಗುವೇ ನನ್ನ ಹಬ್ಬ.”','ಸಂಜೆಯ ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ಆ ಸೀರೆಯನ್ನೇ ಉಟ್ಟೆ. ವೇದಿಕೆಯ ಮೇಲೆ ಮಗಳು ನಕ್ಕಾಗ, ಅಮ್ಮ ಅಲ್ಲೇ ಕುಳಿತು ಚಪ್ಪಾಳೆ ಹೊಡೆಯುತ್ತಿರುವಂತೆ ಭಾಸವಾಯಿತು.']},
  sky:{title:'ಕಿಟಕಿಯಾಚೆಗಿನ ಆಕಾಶ',category:'ಸಣ್ಣ ಕಥೆ · 4 ನಿಮಿಷ ಓದು',body:['ಆಸ್ಪತ್ರೆಯ ಕೋಣೆ ಸಂಖ್ಯೆ ಹನ್ನೆರಡರ ಕಿಟಕಿ ಚಿಕ್ಕದಾಗಿತ್ತು. ಆದರೆ ಅದರಾಚೆಗಿನ ಆಕಾಶ ದೊಡ್ಡದಿತ್ತು. ಮೂರು ದಿನಗಳಿಂದ ಅದನ್ನೇ ನೋಡುತ್ತಿದ್ದ ವಿನಯ್, ಮೋಡಗಳಿಗೂ ತಮಗೆ ಬೇಕಾದ ಕಡೆ ಹೋಗುವ ಸ್ವಾತಂತ್ರ್ಯ ಇದೆ ಎಂದುಕೊಂಡ.','ಪಕ್ಕದ ಹಾಸಿಗೆಯಲ್ಲಿದ್ದ ಹುಡುಗ ಪ್ರತಿದಿನ ಒಂದು ಮೋಡಕ್ಕೆ ಹೆಸರು ಇಡುತ್ತಿದ್ದ. “ಇವತ್ತು ಅದು ಆನೆ. ನಾಳೆ ಅದು ಹಡಗು.” ವಿನಯ್ ಮೊದಲು ನಗುತ್ತಿದ್ದ; ನಂತರ ಅವನೂ ಹೆಸರಿಡಲು ಆರಂಭಿಸಿದ.','ಡಿಸ್ಚಾರ್ಜ್ ಆಗುವ ದಿನ, ಹುಡುಗ ಕಿಟಕಿಯ ಕಡೆ ತೋರಿಸಿ, “ನೀವು ಹೊರಗೆ ಹೋದಮೇಲೆ ಕೂಡ ಆಕಾಶ ನೋಡ್ತೀರಲ್ಲ?” ಎಂದು ಕೇಳಿದ. ವಿನಯ್ ಕಣ್ಣೀರನ್ನು ಮರೆಮಾಡಿ, “ಪ್ರತಿದಿನ ನೋಡ್ತೀನಿ,” ಎಂದ.','ಮನೆಗೆ ಬಂದ ಮೇಲೆ ವಿನಯ್ ಮೊದಲ ಬಾರಿಗೆ ಕಿಟಕಿಯನ್ನು ಸಂಪೂರ್ಣ ತೆರೆದ. ಆಕಾಶ ಅದೇ ಇತ್ತು. ಆದರೆ ಅವನ ಒಳಗೆ ಏನೋ ಹೊಸದಾಗಿ ತೆರೆಯಿತು.']},
  kitchen:{title:'ಅಜ್ಜಿಯ ಅಡುಗೆ ಮನೆ',category:'ಹಳ್ಳಿ ಬದುಕು · 6 ನಿಮಿಷ ಓದು',body:['ಅಜ್ಜಿಯ ಅಡುಗೆ ಮನೆಯ ಒಲೆಯ ಬಳಿ ಕುಳಿತರೆ ಕಾಲವೇ ನಿಧಾನವಾಗುತ್ತಿತ್ತು. ಹೊಗೆಯ ನಡುವೆ ಬೆಲ್ಲದ ಸುವಾಸನೆ, ಪಾತ್ರೆಗಳ ಸದ್ದು, ಅಜ್ಜಿಯ ಕಥೆಗಳ ಧ್ವನಿ ಎಲ್ಲವೂ ಬೆರೆತು ಹೋಗುತ್ತಿತ್ತು.','“ಒಂದು ಚಿಟಿಕೆ ಉಪ್ಪು ಕಡಿಮೆ ಆದರೆ ಊಟದ ರುಚಿ ಬದಲಾಗುತ್ತದೆ,” ಎನ್ನುತ್ತಾ ಅಜ್ಜಿ ಸಾರು ಕಲಸುತ್ತಿದ್ದಳು. “ಬದುಕಿಗೂ ಹಾಗೆಯೇ, ಮಾತಿನಲ್ಲಿ ಸ್ವಲ್ಪ ಮಮತೆ ಇರಬೇಕು.”','ಅವಳು ಮಾಡಿದ ಕಡುಬುಗಳು ಯಾವಾಗಲೂ ಒಂದೇ ಗಾತ್ರದ್ದಾಗಿರಲಿಲ್ಲ. ಆದರೆ ಪ್ರತಿಯೊಂದೂ ಬಿಸಿ ಬಿಸಿಯಾಗಿ, ಪ್ರೀತಿಯಿಂದ ತುಂಬಿರುತ್ತಿತ್ತು. ನಾವು ಮಕ್ಕಳು ಯಾವುದು ದೊಡ್ಡದು ಎಂದು ಜಗಳವಾಡುತ್ತಿದ್ದೆವು.','ಈಗ ಆ ಮನೆ ಬೀಗ ಹಾಕಿದೆ. ಆದರೂ ಯಾವಾಗ ಬೆಲ್ಲದ ವಾಸನೆ ಬಂದರೂ, ಅಜ್ಜಿ ಒಲೆಯ ಬಳಿ ನಿಂತು “ಇನ್ನೊಂದು ಕಡುಬು ತಗೋ,” ಎಂದು ಹೇಳುವಂತೆ ಆಗುತ್ತದೆ.']}
};

const poems={sunset:{title:'ಸೂರ್ಯ ಮುಳುಗುವಾಗ',category:'ಸಂಜೆ',body:'ಸೂರ್ಯ ಮುಳುಗುವುದಿಲ್ಲ,\nಅವನು ನಾಳೆಯ ಬೆಳಕನ್ನು\nಸೇರಿಸಿಡಲು ಹೋಗುತ್ತಾನೆ.\n\nನಾವು ಮಾತ್ರ ಸಂಜೆ ಎಂದು\nಕಿಟಕಿಯನ್ನು ನಿಧಾನವಾಗಿ\nಮುಚ್ಚಿಕೊಳ್ಳುತ್ತೇವೆ.'},rain:{title:'ಕಿಟಕಿಯ ಬಳಿ ಮಳೆ',category:'ಮಳೆ',body:'ಮಳೆ ಕಿಟಕಿಗೆ ಬರೆದ ಪದಗಳನು\nಗಾಳಿ ಓದಿ ಮುಗಿಸುವ ಮುನ್ನ\nನಾನು ನೆನಪಾಗಿದ್ದೆ.\n\nಹನಿ ಹನಿಯೂ ಹೇಳಿತು —\nಕೆಲವು ನೆನಪುಗಳಿಗೆ\nಛತ್ರಿ ಬೇಕಾಗುವುದಿಲ್ಲ.'},home:{title:'ಹಿಂದಿರುಗುವ ದಾರಿ',category:'ಮನೆ',body:'ಮನೆ ದೂರವಾದಂತೆಲ್ಲ,\nನನ್ನೊಳಗೆ ಒಂದು ಬಾಗಿಲು\nಇನ್ನೂ ತೆರೆದೇ ಇತ್ತು.\n\nಹಿಂತಿರುಗಲು ದಾರಿ ಬೇಕಿಲ್ಲ —\nಅಮ್ಮನ ಧ್ವನಿ ನೆನಪಾದರೆ\nಸಾಕು, ಮನೆ ಎದುರಾಗುತ್ತದೆ.'},night:{title:'ಚಂದ್ರನಿಗೆ ಒಂದು ಪ್ರಶ್ನೆ',category:'ರಾತ್ರಿ',body:'ಇಷ್ಟೊಂದು ಕತ್ತಲೆಯ ಮಧ್ಯೆ\nಇಷ್ಟು ನಿಧಾನವಾಗಿ ಹೊಳೆಯುವುದು\nಹೇಗೆ ಕಲಿತೆ?\n\nಚಂದ್ರ ನಗಲಿಲ್ಲ.\nಅವನ ಮೌನವೇ ಹೇಳಿತು —\nಕತ್ತಲೆಯೂ ಬೆಳಕಿನ ಭಾಗವೇ.'},letter:{title:'ಕಳುಹಿಸದ ಪತ್ರ',category:'ನೆನಪು',body:'ಬರೆದೆ, ಮಡಚಿಟ್ಟೆ,\nಕಳಿಸಲಿಲ್ಲ —\nಅಷ್ಟೇ ನನ್ನ ಪ್ರೀತಿ.\n\nಕೆಲವು ಮಾತುಗಳು\nತಲುಪದಿದ್ದರೂ ಪರವಾಗಿಲ್ಲ;\nಅವು ಬರೆದ ಕೈಯನ್ನು ಬದಲಿಸುತ್ತವೆ.'},leaf:{title:'ಎಲೆಯ ಪಾಠ',category:'ಬದುಕು',body:'ಬೀಳುವುದನ್ನು ಹೆದರದ ಎಲೆ\nಮರಕ್ಕೆ ವಸಂತದ ಭರವಸೆ\nಬಿಟ್ಟುಹೋಗುತ್ತದೆ.\n\nಬದುಕೂ ಹಾಗೆಯೇ —\nಬಿಟ್ಟದ್ದರ ಜಾಗದಲ್ಲಿ\nಹೊಸದೊಂದು ಮೊಳಕೆಯಿರುತ್ತದೆ.'}};

const qs = (selector, root=document) => root.querySelector(selector);
const qsa = (selector, root=document) => [...root.querySelectorAll(selector)];
const safeStorage = {
  get(key, fallback=[]) { try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; } },
  set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch { return false; } }
};

qsa('#year').forEach(node => node.textContent = new Date().getFullYear());
qsa('[data-story-count]').forEach(node => node.textContent = Object.keys(stories).length);

const progress = qs('.reading-progress span');
const updateProgress = () => { if (!progress) return; const max=document.documentElement.scrollHeight-innerHeight; progress.style.width=`${max>0?Math.min(100,(scrollY/max)*100):0}%`; };
addEventListener('scroll', updateProgress, {passive:true});
updateProgress();

const menuButton=qs('.menu-button'), navLinks=qs('.nav-links');
if(menuButton&&navLinks){
  menuButton.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'ಮೆನು ಮುಚ್ಚಿರಿ':'ಮೆನು ತೆರೆಯಿರಿ');menuButton.textContent=open?'×':'☰';});
  qsa('a',navLinks).forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','ಮೆನು ತೆರೆಯಿರಿ');menuButton.textContent='☰';}));
}

const revealItems=qsa('[data-reveal]');
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target);}}),{threshold:.12});revealItems.forEach(item=>observer.observe(item));}else revealItems.forEach(item=>item.classList.add('revealed'));

const storyDialog=qs('#story-reader');
function openStory(id, updateUrl=true){
  const story=stories[id]; if(!story||!storyDialog) return false;
  const title=qs('#reader-title',storyDialog), category=qs('#reader-category',storyDialog), body=qs('#reader-body',storyDialog), byline=qs('.reader-byline',storyDialog);
  if(title) title.textContent=story.title; if(category) category.textContent=story.category;
  if(byline) byline.textContent='ಬರೆದವರು: ಮಹೇಂದ್ರ ಗೌರಿ';
  if(body) body.replaceChildren(...story.body.map(text=>{const p=document.createElement('p');p.textContent=text;return p;}));
  if(updateUrl){const url=new URL(location.href);url.searchParams.set('story',id);history.pushState({story:id},'',url);}
  if(typeof storyDialog.showModal==='function'&&!storyDialog.open) storyDialog.showModal();
  return true;
}
function closeStory(){if(storyDialog?.open)storyDialog.close();const url=new URL(location.href);if(url.searchParams.has('story')){url.searchParams.delete('story');history.replaceState({},'',url);}}
qsa('[data-story],[data-open-story]').forEach(button=>button.addEventListener('click',()=>openStory(button.dataset.story||button.dataset.openStory)));

const poemDialog=qs('#poem-reader');
function openPoem(id){
  const poem=poems[id]; if(!poem||!poemDialog) return;
  const title=qs('#poem-title',poemDialog), category=qs('#poem-category',poemDialog), body=qs('#poem-body',poemDialog);
  if(title) title.textContent=poem.title; if(category) category.textContent=poem.category;
  if(body){body.replaceChildren();const p=document.createElement('p');p.textContent=poem.body;body.append(p);}
  if(typeof poemDialog.showModal==='function'&&!poemDialog.open) poemDialog.showModal();
}
qsa('[data-open-poem]').forEach(card=>{
  card.addEventListener('click',()=>openPoem(card.dataset.openPoem));
  if(card.matches('div,article,section')){card.setAttribute('role','button');card.setAttribute('tabindex','0');card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openPoem(card.dataset.openPoem);}});}
});

qsa('.close-reader').forEach(button=>button.addEventListener('click',()=>{const dialog=button.closest('dialog');if(dialog===storyDialog)closeStory();else dialog?.close();}));
qsa('dialog').forEach(dialog=>dialog.addEventListener('click',event=>{if(event.target===dialog){if(dialog===storyDialog)closeStory();else dialog.close();}}));
addEventListener('popstate',()=>{const requested=new URLSearchParams(location.search).get('story');if(requested)openStory(requested,false);else if(storyDialog?.open)storyDialog.close();});

const filters=qsa('.filter'), storyCards=qsa('.story-card,.story-card-new'), search=qs('#story-search'), noResults=qs('.no-results');
let selected='all';
function filterStories(){
  if(!storyCards.length)return;
  const query=search?.value.trim().toLocaleLowerCase('kn-IN')||''; let count=0;
  storyCards.forEach(card=>{const text=(card.dataset.search||card.textContent||'').toLocaleLowerCase('kn-IN');const visible=(selected==='all'||card.dataset.category===selected)&&text.includes(query);card.hidden=!visible;if(visible)count++;});
  if(noResults)noResults.hidden=count!==0;
}
filters.forEach(filter=>filter.addEventListener('click',()=>{selected=filter.dataset.filter||'all';filters.forEach(item=>{const active=item===filter;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});filterStories();}));
filters.forEach(filter=>filter.setAttribute('aria-pressed',String(filter.classList.contains('active'))));
search?.addEventListener('input',filterStories);filterStories();

const requestedStory=new URLSearchParams(location.search).get('story');if(requestedStory)openStory(requestedStory,false);

function subscribe(form,emailSelector){
  form.addEventListener('submit',event=>{
    event.preventDefault();
    const email=qs(emailSelector,form),message=qs('.form-message',form);
    if(!email?.checkValidity()){if(message)message.textContent='ದಯವಿಟ್ಟು ಸರಿಯಾದ ಇಮೇಲ್ ವಿಳಾಸ ನೀಡಿ.';email?.focus();return;}
    const normalized=email.value.trim().toLowerCase();const subscribers=safeStorage.get(SUBSCRIBERS_KEY,[]);
    if(subscribers.includes(normalized)){if(message)message.textContent='ಈ ಇಮೇಲ್ ಈಗಾಗಲೇ ಸುದ್ದಿಪತ್ರಕ್ಕೆ ಸೇರಿಸಲಾಗಿದೆ.';return;}
    subscribers.push(normalized);const saved=safeStorage.set(SUBSCRIBERS_KEY,subscribers);
    if(message)message.textContent=saved?'ಧನ್ಯವಾದಗಳು! ನೀವು ಸುದ್ದಿಪತ್ರಕ್ಕೆ ಸೇರಿದ್ದೀರಿ.':'ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ಚಂದಾದಾರಿಕೆ ವಿನಂತಿಯನ್ನು ಸ್ವೀಕರಿಸಲಾಗಿದೆ.';
    form.reset();
  });
}
const newsletter=qs('#newsletter-form');if(newsletter)subscribe(newsletter,'#newsletter-email');
const subscribeForm=qs('#subscribe-form');if(subscribeForm)subscribe(subscribeForm,'#email');

const contact=qs('#contact-form');
if(contact){contact.addEventListener('submit',event=>{
  event.preventDefault();
  const name=qs('#contact-name'),email=qs('#contact-email'),note=qs('#contact-message'),message=qs('.form-message',contact);
  if(!name?.value.trim()||!email?.checkValidity()||!note?.value.trim()){if(message)message.textContent='ದಯವಿಟ್ಟು ಎಲ್ಲ ವಿವರಗಳನ್ನು ಸರಿಯಾಗಿ ತುಂಬಿ.';return;}
  const subject=encodeURIComponent(`ಕಥಾವಳಿಯಿಂದ: ${name.value.trim()}`),body=encodeURIComponent(`ಹೆಸರು: ${name.value.trim()}\nಇಮೇಲ್: ${email.value.trim()}\n\n${note.value.trim()}`);
  if(message)message.textContent='ನಿಮ್ಮ ಇಮೇಲ್ ಅಪ್ಲಿಕೇಶನ್ ತೆರೆಯುತ್ತಿದೆ…';
  location.href=`mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`;
});}
