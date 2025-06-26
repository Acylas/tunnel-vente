import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: "#FFEDFA" }}>
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header avec logo */}
        <div className="bg-rose-500 px-8 py-6 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/logoWhite.svg?height=80&width=200"
              alt="Logo Coaching"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="px-8 py-12 text-center">
          {/* Icône de succès */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Félicitations !</h1>

          {/* Message de remerciement */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-rose-600 mb-4">
              Votre appel de coaching est confirmé
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Merci d&apos;avoir réservé votre séance de coaching personnalisée. Vous recevrez sous peu un email de
              confirmation avec tous les détails de votre rendez-vous.
            </p>
          </div>

          {/* Vidéo */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Découvrez ce qui vous attend</h3>
            <div className="relative max-w-md mx-auto">
              <div className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <video className="w-full h-full object-cover" controls poster="/placeholder.svg?height=600&width=338">
                  <source src="/VideoConfirmation.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            </div>
          </div>

          {/* Informations supplémentaires */}
          <div className="bg-pink-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="font-semibold text-rose-800 mb-2">Prochaines étapes :</h4>
            <ul className="text-rose-700 text-left space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-rose-500 rounded-full mr-3"></span>
                Vérifiez votre boîte email pour la confirmation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-rose-500 rounded-full mr-3"></span>
                Préparez vos questions et objectifs
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-rose-500 rounded-full mr-3"></span>
                Rejoignez-nous à l&apos;heure convenue
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-8 text-sm text-gray-500">
            <p>
              Des questions ? Contactez-nous à{" "}
              <a href="mailto:contact@coaching.com" className="text-rose-600 hover:underline">
                contact@coaching.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
