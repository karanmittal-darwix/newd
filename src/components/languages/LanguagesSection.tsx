import LanguageCard from './LanguageCard';

const LANGUAGES = [
  { script: 'हिन्दी', name: 'Hindi', speakers: '600M+', accents: 3, isActive: false },
  { script: 'English', name: 'English', speakers: 'India', accents: 4, isCodeSwitch: false },
  { script: 'தமிழ்', name: 'Tamil', speakers: '75M+', accents: 2 },
  { script: 'తెలుగు', name: 'Telugu', speakers: '95M+', accents: 2 },
  { script: 'मराठी', name: 'Marathi', speakers: '83M+', accents: 2 },
  { script: 'বাংলা', name: 'Bengali', speakers: '97M+', accents: 2 },
  { script: 'ಕನ್ನಡ', name: 'Kannada', speakers: '44M+', accents: 2 },
  { script: 'ગુજરાતી', name: 'Gujarati', speakers: '55M+', accents: 2 },
  { script: 'മലയാളം', name: 'Malayalam', speakers: '35M+', accents: 2 },
  { script: 'ਪੰਜਾਬੀ', name: 'Punjabi', speakers: '33M+', accents: 2 },
  { script: 'ଓଡ଼ିଆ', name: 'Odia', speakers: '38M+', accents: 1 },
  { script: 'অসমীয়া', name: 'Assamese', speakers: '15M+', accents: 1 },
  { script: 'اُردُو', name: 'Urdu', speakers: '50M+', accents: 2 },
  { script: 'Português', name: 'Portuguese', speakers: '50M+', accents: 1 },
  { script: 'Hi-En', name: 'Hinglish', speakers: '', accents: 3, isCodeSwitch: true, codeSwitchLabel: 'native code-switch' },
  { script: 'العربية', name: 'Arabic', speakers: '', accents: 2, isCodeSwitch: true, codeSwitchLabel: 'native code-switch' },
];

export default function LanguagesSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase mb-3">
            Languages &amp; Accents
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            One Platform. Every Language. Every Accent.
          </h2>
          <p className="mt-4 text-3xl text-gray-500 text-sm max-w-3.1xl mx-auto leading-relaxed">
            22+ Indian languages and global language support with native code-switching (Hinglish, Tanglish, and more). Accents are finely 
            <br />
            tuned to regional nuance because a Mumbai Marathi call shouldn’t sound like Pune, and your customers notice.
          </p>
        </div>

        {/* Grid card container */}
        <div className="border border-gray-200 rounded-2xl p-5 bg-white">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {LANGUAGES.map((lang) => (
              <LanguageCard key={lang.name} {...lang} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-5 px-1">
          <p className="text-xs text-gray-400">
            + 6 more languages available on enterprise plans (Sindhi, Konkani, Maithili, Kashmiri, Nepali, Sanskrit).
          </p>
          <a href="#" className="text-xs text-indigo-500 font-medium hover:text-indigo-600 whitespace-nowrap ml-4">
            Full language matrix →
          </a>
        </div>
      </div>
    </section>
  );
}