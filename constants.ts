import { BodyPart } from './types';

export const MUSCLE_DATA: BodyPart[] = [
  {
    id: 'hip',
    hebrewName: 'ירך',
    englishName: 'Hip',
    movements: [
      { id: 'hip-flexion', englishName: 'Hip flexion', hebrewName: 'כפיפת הירך' },
      { id: 'hip-extension', englishName: 'Hip extension', hebrewName: 'פשיטת הירך' },
      { id: 'hip-int-ext-rotation-flexed', englishName: 'Hip internal & external rotation when hip is flexed', hebrewName: 'סיבוב פנימי/חיצוני של הירך בכיפוף' },
      { id: 'knee-int-ext-rotation-flexed', englishName: 'Knee internal & external rotation when the knee is flexed', hebrewName: 'סיבוב פנימה / החוצה של הברך בכיפוף' },
      { id: 'hip-horizontal-abduction', englishName: 'Hip horizontal abduction', hebrewName: 'הרחקה אופקית של הירך' },
      { id: 'hip-horizontal-adduction', englishName: 'Hip horizontal adduction', hebrewName: 'קירוב אופקי של הירך' },
      { id: 'hip-abduction', englishName: 'Hip abduction', hebrewName: 'הרחקת הירך' },
      { id: 'hip-adduction', englishName: 'Hip adduction', hebrewName: 'קירוב הירך' },
    ],
  },
  {
    id: 'lumbar',
    hebrewName: 'מותני',
    englishName: 'Lumbar',
    movements: [
      { id: 'pelvis-elevation-hip-rotation', englishName: 'Pelvis elevation & Hip internal & external rotation', hebrewName: 'הרמת אגן וסיבוב פנימי/חיצוני של הירך' },
      { id: 'lumbar-flexion', englishName: 'Lumbar flexion', hebrewName: 'כפיפה של עמוד שדרה מותני' },
      { id: 'lumbar-extension', englishName: 'Lumbar extension', hebrewName: 'פשיטה של עמוד שדרה מותני' },
      { id: 'lumbar-rotation', englishName: 'Lumbar rotation', hebrewName: 'רוטציה מותנית' },
      { id: 'lumbar-side-flexion', englishName: 'Lumbar side flexion/bending', hebrewName: 'כפיפה צדית של המותן' },
    ],
  },
  {
    id: 'knee',
    hebrewName: 'ברך',
    englishName: 'Knee',
    movements: [
      { id: 'knee-flexion', englishName: 'Knee flexion', hebrewName: 'כפיפת הברך' },
      { id: 'knee-extension', englishName: 'Knee extension', hebrewName: 'פשיטת הברך' },
    ],
  },
  {
    id: 'ankle-toes',
    hebrewName: 'קרסול ואצבעות כף הרגל',
    englishName: 'Ankle & Toes',
    movements: [
      { id: 'hallucis-flexion', englishName: 'Hallucis flexion', hebrewName: 'כפיפת הבוהן' },
      { id: 'hallucis-extension', englishName: 'Hallucis extension', hebrewName: 'פשיטת הבוהן' },
      { id: 'ankle-dorsi-flexion', englishName: 'Ankle dorsi flexion', hebrewName: 'כפיפה גבית של הקרסול' },
      { id: 'ankle-plantar-flexion', englishName: 'Ankle plantar flexion', hebrewName: 'כפיפה כפית של הקרסול' },
      { id: 'ankle-inversion', englishName: 'Ankle inversion', hebrewName: 'היפוך פנימי של הקרסול' },
      { id: 'ankle-eversion', englishName: 'Ankle eversion', hebrewName: 'היפוך חיצוני של הקרסול' },
    ],
  },
  {
    id: 'head',
    hebrewName: 'ראש',
    englishName: 'Head',
    movements: [
      { id: 'head-rotation', englishName: 'Head rotation', hebrewName: 'סיבוב הראש' },
      { id: 'head-flexion', englishName: 'Head flexion', hebrewName: 'כפיפת הראש קדימה' },
      { id: 'head-extension', englishName: 'Head extension', hebrewName: 'פשיטת הראש לאחור' },
      { id: 'head-lateral-flexion', englishName: 'Head lateral flexion', hebrewName: 'כפיפה צדית של הראש' },
    ],
  },
  {
    id: 'face',
    hebrewName: 'לסת',
    englishName: 'Face',
    movements: [
      { id: 'mandibular-depression', englishName: 'Mandibular depression', hebrewName: 'פתיחת הלסת (הורדת הלסת)' },
      { id: 'mandibular-elevation', englishName: 'Mandibular elevation', hebrewName: 'סגירת הלסת' },
      { id: 'mandibular-protraction', englishName: 'Mandibular protraction', hebrewName: 'תנועת הלסת קדימה' },
      { id: 'mandibular-retrusion', englishName: 'Mandibular retrusion', hebrewName: 'תנועת הלסת אחורה' },
    ],
  },
  {
    id: 'shoulder-joint',
    hebrewName: 'מפרק הכתף',
    englishName: 'Shoulder Joint',
    movements: [
      { id: 'shoulder-joint-flexion', englishName: 'Shoulder joint flexion', hebrewName: 'כפיפה של הכתף' },
      { id: 'shoulder-joint-extension', englishName: 'Shoulder joint extension', hebrewName: 'פשיטה של הכתף' },
      { id: 'shoulder-joint-abduction-ext-rotation', englishName: 'Shoulder joint abduction & external rotation', hebrewName: 'הרחקה וסיבוב חיצוני של הכתף' },
      { id: 'shoulder-joint-int-rotation-adduction', englishName: 'Shoulder joint internal rotation & adduction', hebrewName: 'סיבוב פנימי וקירוב של הכתף' },
      { id: 'shoulder-joint-adduction', englishName: 'Shoulder joint adduction', hebrewName: 'קירוב של הכתף' },
      { id: 'shoulder-horizontal-abduction', englishName: 'Shoulder horizontal abduction', hebrewName: 'הרחקה אופקית של הכתף' },
      { id: 'shoulder-horizontal-adduction', englishName: 'Shoulder horizontal adduction', hebrewName: 'קירוב אופקי של הכתף' },
    ],
  },
  {
    id: 'scapula',
    hebrewName: 'שכמה',
    englishName: 'Scapula',
    movements: [
      { id: 'scapula-elevation', englishName: 'Scapula elevation', hebrewName: 'הרמת השכמה' },
      { id: 'scapula-depression', englishName: 'Scapula depression', hebrewName: 'הורדת השכמה' },
      { id: 'scapula-protraction', englishName: 'Scapula protraction', hebrewName: 'הרחקת השכמה' },
      { id: 'scapula-retraction', englishName: 'Scapula retraction', hebrewName: 'קירוב השכמה' },
    ],
  },
  {
    id: 'elbow',
    hebrewName: 'מרפק',
    englishName: 'Elbow',
    movements: [
      { id: 'elbow-flexion', englishName: 'Elbow flexion', hebrewName: 'כפיפת המרפק' },
      { id: 'elbow-extension', englishName: 'Elbow extension', hebrewName: 'פשיטת המרפק' },
      { id: 'elbow-supination', englishName: 'Elbow supination', hebrewName: 'סופינציה של האמה' },
      { id: 'elbow-pronation', englishName: 'Elbow pronation', hebrewName: 'פרונציה של האמה' },
    ],
  },
  {
    id: 'wrist-thumb',
    hebrewName: 'שורש כף יד ובוהן',
    englishName: 'Wrist & Thumb',
    movements: [
      { id: 'wrist-flexion', englishName: 'Wrist flexion (in pronation/supination)', hebrewName: 'כפיפה של שורש כף היד' },
      { id: 'wrist-extension', englishName: 'Wrist extension (in pronation/supination)', hebrewName: 'פשיטה של שורש כף היד' },
      { id: 'wrist-radial-deviation', englishName: 'Wrist radial deviation', hebrewName: 'כפיפה רדיאלית (לכיוון האגודל)' },
      { id: 'wrist-ulnar-deviation', englishName: 'Wrist ulnar deviation', hebrewName: 'כפיפה אולנרית (לכיוון הזרת)' },
      { id: 'pollicis-flexion', englishName: 'Pollicis flexion', hebrewName: 'כפיפה של האגודל' },
      { id: 'pollicis-extension', englishName: 'Pollicis extension', hebrewName: 'פשיטה של האגודל' },
      { id: 'pollicis-abduction', englishName: 'Pollicis abduction', hebrewName: 'הרחקת האגודל' },
      { id: 'pollicis-adduction', englishName: 'Pollicis adduction', hebrewName: 'קירוב האגודל' },
      { id: 'pollicis-opposition', englishName: 'Pollicis opposition', hebrewName: 'מגע אגודל עם אצבעות' },
      { id: 'pollicis-reposition', englishName: 'Pollicis reposition', hebrewName: 'חוסר אופוזיציה של האגודל' },
    ],
  },
  {
    id: 'fist',
    hebrewName: 'אגרוף ואצבעות',
    englishName: 'Fist & Fingers',
    movements: [
        { id: 'fist-action', englishName: 'Fist', hebrewName: 'אגרוף' },
        { id: 'digits-extension', englishName: 'Extension of digits', hebrewName: 'פתיחת האגרוף' },
    ]
  }
];

export const LOCAL_STORAGE_KEY = 'selectedMuscleMovements';