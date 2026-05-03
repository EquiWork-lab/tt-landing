// Tasting & Toasting i18n source of truth.
// 9 languages × ~200 strings × 3 pages.
// Brand "Tasting & Toasting" never translated.
// Em-dashes never used. Commas, periods, semicolons only.
// Pronouns: tú/tu/ты/ти/tu/du/tu informal everywhere. Hebrew RTL.

window.TT_I18N = {
  // ============================================================
  // META: language definitions
  // ============================================================
  langs: {
    en: { name: 'English',    native: 'English',    dir: 'ltr', flag: 'flag-en' },
    fr: { name: 'French',     native: 'Français',   dir: 'ltr', flag: 'flag-fr' },
    ru: { name: 'Russian',    native: 'Русский',    dir: 'ltr', flag: 'flag-ru' },
    es: { name: 'Spanish',    native: 'Español',    dir: 'ltr', flag: 'flag-es' },
    uk: { name: 'Ukrainian',  native: 'Українська', dir: 'ltr', flag: 'flag-uk' },
    it: { name: 'Italian',    native: 'Italiano',   dir: 'ltr', flag: 'flag-it' },
    de: { name: 'German',     native: 'Deutsch',    dir: 'ltr', flag: 'flag-de' },
    he: { name: 'Hebrew',     native: 'עברית',      dir: 'rtl', flag: 'flag-he' },
    pt: { name: 'Portuguese', native: 'Português',  dir: 'ltr', flag: 'flag-pt' },
  },

  // ============================================================
  // STRINGS: all translatable strings keyed by data-i18n attribute value
  // ============================================================
  s: {

    // ========== TOPBAR ==========
    'topbar.prototypes': {
      en: 'Prototypes', fr: 'Prototypes', ru: 'Прототипы', es: 'Prototipos',
      uk: 'Прототипи', it: 'Prototipi', de: 'Prototypen',
      he: 'אבטיפוסים', pt: 'Protótipos',
    },
    'topbar.toasts': {
      en: 'Toasts', fr: 'Toasts', ru: 'Тосты', es: 'Brindis',
      uk: 'Тости', it: 'Brindisi', de: 'Trinksprüche',
      he: 'הרמת כוסית', pt: 'Brindes',
    },
    'topbar.sommeliers': {
      en: 'Sommeliers', fr: 'Sommeliers', ru: 'Сомелье', es: 'Sumilleres',
      uk: 'Сомельє', it: 'Sommelier', de: 'Sommeliers',
      he: 'סומלייה', pt: 'Sommeliers',
    },
    'topbar.about': {
      en: 'About', fr: 'À propos', ru: 'О нас', es: 'Acerca',
      uk: 'Про нас', it: 'Chi siamo', de: 'Über uns',
      he: 'אודות', pt: 'Sobre',
    },
    'topbar.legal': {
      en: 'Legal', fr: 'Mentions légales', ru: 'Юридическое', es: 'Legal',
      uk: 'Юридична', it: 'Note legali', de: 'Rechtliches',
      he: 'משפטי', pt: 'Legal',
    },
    'topbar.status_prelaunch': {
      en: 'Pre-launch', fr: 'Avant lancement', ru: 'До запуска', es: 'Pre-lanzamiento',
      uk: 'До запуску', it: 'Pre-lancio', de: 'Vor dem Start',
      he: 'טרום השקה', pt: 'Pré-lançamento',
    },
    'topbar.status_coming_soon': {
      en: 'Coming soon', fr: 'Bientôt', ru: 'Скоро', es: 'Próximamente',
      uk: 'Невдовзі', it: 'In arrivo', de: 'Demnächst',
      he: 'בקרוב', pt: 'Em breve',
    },
    'topbar.back': {
      en: 'Back to site', fr: 'Retour au site', ru: 'На главную', es: 'Volver al sitio',
      uk: 'На головну', it: 'Torna al sito', de: 'Zur Startseite',
      he: 'חזרה לאתר', pt: 'Voltar ao site',
    },
    'topbar.lang_select': {
      en: 'Language', fr: 'Langue', ru: 'Язык', es: 'Idioma',
      uk: 'Мова', it: 'Lingua', de: 'Sprache',
      he: 'שפה', pt: 'Idioma',
    },

    // ========== FOOTER ==========
    'footer.tagline': {
      en: 'A wine experience company entering the European market. Tastings, toasts, gatherings.',
      fr: 'Une société d\'expériences œnologiques qui s\'implante sur le marché européen. Dégustations, toasts, rassemblements.',
      ru: 'Компания винного опыта, выходящая на европейский рынок. Дегустации, тосты, встречи.',
      es: 'Una compañía de experiencias enológicas que entra en el mercado europeo. Catas, brindis, encuentros.',
      uk: 'Компанія винного досвіду, що виходить на європейський ринок. Дегустації, тости, зустрічі.',
      it: 'Una società di esperienze enologiche che entra nel mercato europeo. Degustazioni, brindisi, incontri.',
      de: 'Eine Weinerlebnisgesellschaft, die auf den europäischen Markt geht. Verkostungen, Trinksprüche, Zusammenkünfte.',
      he: 'חברת חוויות יין הנכנסת לשוק האירופי. טעימות, הרמות כוסית, מפגשים.',
      pt: 'Uma empresa de experiências enológicas a entrar no mercado europeu. Provas, brindes, encontros.',
    },
    'footer.col_prototypes': {
      en: 'Prototypes', fr: 'Prototypes', ru: 'Прототипы', es: 'Prototipos',
      uk: 'Прототипи', it: 'Prototipi', de: 'Prototypen',
      he: 'אבטיפוסים', pt: 'Protótipos',
    },
    'footer.col_coming_soon': {
      en: 'Coming soon', fr: 'Bientôt disponible', ru: 'Скоро', es: 'Próximamente',
      uk: 'Невдовзі', it: 'In arrivo', de: 'Demnächst',
      he: 'בקרוב', pt: 'Em breve',
    },
    'footer.col_legal': {
      en: 'Legal', fr: 'Mentions légales', ru: 'Юридическое', es: 'Legal',
      uk: 'Юридична', it: 'Note legali', de: 'Rechtliches',
      he: 'משפטי', pt: 'Legal',
    },
    'footer.col_contact': {
      en: 'Contact', fr: 'Contact', ru: 'Контакты', es: 'Contacto',
      uk: 'Контакти', it: 'Contatti', de: 'Kontakt',
      he: 'יצירת קשר', pt: 'Contacto',
    },
    'footer.proto_member': {
      en: 'Member & subscription', fr: 'Adhésion et abonnement', ru: 'Подписка участника', es: 'Miembros y suscripción',
      uk: 'Членство та підписка', it: 'Iscrizione e abbonamento', de: 'Mitglied und Abo',
      he: 'חברות ומינוי', pt: 'Adesão e subscrição',
    },
    'footer.proto_game': {
      en: 'Game flow', fr: 'Flux de jeu', ru: 'Игровой процесс', es: 'Flujo de juego',
      uk: 'Хід гри', it: 'Flusso di gioco', de: 'Spielverlauf',
      he: 'מהלך המשחק', pt: 'Fluxo de jogo',
    },
    'footer.proto_ops': {
      en: 'Operations', fr: 'Opérations', ru: 'Операции', es: 'Operaciones',
      uk: 'Операції', it: 'Operazioni', de: 'Betrieb',
      he: 'תפעול', pt: 'Operações',
    },
    'footer.proto_wave1': {
      en: 'Wave 1 player', fr: 'Lecteur vague 1', ru: 'Первая волна', es: 'Jugador ola 1',
      uk: 'Перша хвиля', it: 'Player onda 1', de: 'Welle 1 Player',
      he: 'גל 1', pt: 'Jogador onda 1',
    },
    'footer.legal_privacy': {
      en: 'Privacy Policy', fr: 'Politique de confidentialité', ru: 'Политика конфиденциальности', es: 'Política de privacidad',
      uk: 'Політика конфіденційності', it: 'Informativa sulla privacy', de: 'Datenschutzerklärung',
      he: 'מדיניות פרטיות', pt: 'Política de privacidade',
    },
    'footer.legal_terms': {
      en: 'Terms of Service', fr: 'Conditions d\'utilisation', ru: 'Условия использования', es: 'Términos del servicio',
      uk: 'Умови використання', it: 'Termini di servizio', de: 'Nutzungsbedingungen',
      he: 'תנאי שירות', pt: 'Termos de serviço',
    },
    'footer.legal_notice': {
      en: 'Legal Notice & Cookies', fr: 'Mentions légales et cookies', ru: 'Юридическая информация и cookies', es: 'Aviso legal y cookies',
      uk: 'Юридична інформація та cookies', it: 'Note legali e cookie', de: 'Impressum und Cookies',
      he: 'הצהרה משפטית ועוגיות', pt: 'Aviso legal e cookies',
    },
    'footer.copyright': {
      en: '© 2026 Tasting And Toasting Inc. · Delaware Corp · Filing No. 7494277',
      fr: '© 2026 Tasting And Toasting Inc. · Société du Delaware · Dépôt nº 7494277',
      ru: '© 2026 Tasting And Toasting Inc. · Корпорация Делавэр · Регистрационный № 7494277',
      es: '© 2026 Tasting And Toasting Inc. · Sociedad de Delaware · Registro nº 7494277',
      uk: '© 2026 Tasting And Toasting Inc. · Корпорація Делавер · Реєстрація № 7494277',
      it: '© 2026 Tasting And Toasting Inc. · Società del Delaware · Reg. nº 7494277',
      de: '© 2026 Tasting And Toasting Inc. · Delaware Corp. · Reg.-Nr. 7494277',
      he: '© 2026 Tasting And Toasting Inc. · תאגיד דלאוור · מספר רישום 7494277',
      pt: '© 2026 Tasting And Toasting Inc. · Sociedade do Delaware · Registo nº 7494277',
    },
    'footer.subsidiary': {
      en: 'Operating subsidiary: Tasting And Toasting SL (Spain)',
      fr: 'Filiale opérationnelle : Tasting And Toasting SL (Espagne)',
      ru: 'Операционная дочерняя компания: Tasting And Toasting SL (Испания)',
      es: 'Filial operativa: Tasting And Toasting SL (España)',
      uk: 'Операційна дочірня компанія: Tasting And Toasting SL (Іспанія)',
      it: 'Filiale operativa: Tasting And Toasting SL (Spagna)',
      de: 'Operative Tochtergesellschaft: Tasting And Toasting SL (Spanien)',
      he: 'חברת בת מבצעית: Tasting And Toasting SL (ספרד)',
      pt: 'Filial operativa: Tasting And Toasting SL (Espanha)',
    },

    // ========== INDEX HERO ==========
    'index.hero.meta_madrid': {
      en: 'Madrid · Valencia', fr: 'Madrid · Valence', ru: 'Мадрид · Валенсия',
      es: 'Madrid · Valencia', uk: 'Мадрид · Валенсія', it: 'Madrid · Valencia',
      de: 'Madrid · Valencia', he: 'מדריד · ולנסיה', pt: 'Madrid · Valência',
    },
    'index.hero.meta_prelaunch': {
      en: 'Pre-launch · v0.1', fr: 'Avant lancement · v0.1', ru: 'До запуска · v0.1',
      es: 'Pre-lanzamiento · v0.1', uk: 'До запуску · v0.1', it: 'Pre-lancio · v0.1',
      de: 'Vor dem Start · v0.1', he: 'טרום השקה · v0.1', pt: 'Pré-lançamento · v0.1',
    },
    'index.hero.meta_corp': {
      en: 'Delaware Corp · 7494277', fr: 'Société du Delaware · 7494277',
      ru: 'Корпорация Делавэр · 7494277', es: 'Sociedad de Delaware · 7494277',
      uk: 'Корпорація Делавер · 7494277', it: 'Società del Delaware · 7494277',
      de: 'Delaware Corp · 7494277', he: 'תאגיד דלאוור · 7494277',
      pt: 'Sociedade do Delaware · 7494277',
    },
    'index.hero.title_line1': {
      en: 'A wine company',
      fr: 'Une maison de vin',
      ru: 'Винная компания',
      es: 'Una compañía de vino',
      uk: 'Винна компанія',
      it: 'Una casa del vino',
      de: 'Ein Weinhaus',
      he: 'חברת יין',
      pt: 'Uma casa de vinhos',
    },
    'index.hero.title_em': {
      en: 'tastes its way',
      fr: 'se fraye un chemin',
      ru: 'пробует на вкус',
      es: 'abre camino con el paladar',
      uk: 'пробує на смак',
      it: 'si fa strada al palato',
      de: 'kostet sich den Weg',
      he: 'טועמת את דרכה',
      pt: 'abre caminho ao paladar',
    },
    'index.hero.title_line3': {
      en: 'into Europe.',
      fr: 'vers l\'Europe.',
      ru: 'в Европу.',
      es: 'hacia Europa.',
      uk: 'до Європи.',
      it: 'fino in Europa.',
      de: 'nach Europa.',
      he: 'אל אירופה.',
      pt: 'até à Europa.',
    },
    'index.hero.sub': {
      en: 'Tasting & Toasting is being built as a multi-functional wine experience company, tastings, toasts, gatherings. Below are the prototypes that show where we\'re going.',
      fr: 'Tasting & Toasting se construit comme une société multifonctionnelle d\'expériences œnologiques, dégustations, toasts, rassemblements. Voici les prototypes qui montrent notre direction.',
      ru: 'Tasting & Toasting строится как многофункциональная компания винного опыта, дегустации, тосты, встречи. Ниже прототипы, которые показывают, куда мы движемся.',
      es: 'Tasting & Toasting se está construyendo como una compañía multifuncional de experiencias enológicas, catas, brindis, encuentros. Abajo están los prototipos que muestran hacia dónde vamos.',
      uk: 'Tasting & Toasting будується як багатофункціональна компанія винного досвіду, дегустації, тости, зустрічі. Нижче прототипи, які показують, куди ми рухаємось.',
      it: 'Tasting & Toasting si sta costruendo come una società multifunzionale di esperienze enologiche, degustazioni, brindisi, incontri. Sotto trovi i prototipi che mostrano dove stiamo andando.',
      de: 'Tasting & Toasting wird als multifunktionale Weinerlebnisgesellschaft aufgebaut, Verkostungen, Trinksprüche, Zusammenkünfte. Unten siehst du die Prototypen, die zeigen, wohin wir gehen.',
      he: 'Tasting & Toasting נבנית כחברת חוויות יין רב-תכליתית, טעימות, הרמות כוסית, מפגשים. למטה תוכל למצוא את האבטיפוסים שמראים לאן אנחנו הולכים.',
      pt: 'A Tasting & Toasting está a ser construída como uma empresa multifuncional de experiências enológicas, provas, brindes, encontros. Abaixo estão os protótipos que mostram para onde vamos.',
    },
    'index.hero.btn_explore': {
      en: 'Explore prototypes', fr: 'Explorer les prototypes', ru: 'Посмотреть прототипы',
      es: 'Explorar prototipos', uk: 'Переглянути прототипи', it: 'Esplora i prototipi',
      de: 'Prototypen ansehen', he: 'לחקור אבטיפוסים', pt: 'Ver protótipos',
    },
    'index.hero.btn_about': {
      en: 'About the company', fr: 'À propos de la société', ru: 'О компании',
      es: 'Sobre la compañía', uk: 'Про компанію', it: 'Sulla società',
      de: 'Über das Unternehmen', he: 'אודות החברה', pt: 'Sobre a empresa',
    },

    // ========== INDEX BANNER (pre-launch notice) ==========
    'index.banner.notice': {
      en: 'Pre-launch notice.', fr: 'Avis avant lancement.', ru: 'Уведомление о пре-запуске.',
      es: 'Aviso de pre-lanzamiento.', uk: 'Повідомлення про пре-запуск.',
      it: 'Avviso di pre-lancio.', de: 'Hinweis vor dem Start.',
      he: 'הודעה טרום השקה.', pt: 'Aviso de pré-lançamento.',
    },
    'index.banner.body': {
      en: 'The Tasting & Toasting platform is in technical development and pre-licensing phase. No commercial wine sales, event ticketing, or paid services are offered through this website until all required Spanish licenses (alcohol distribution, sanitary registration, excise duty, and others) are obtained and the operating subsidiary Tasting And Toasting SL is fully registered and operational. Information presented here is for illustrative and informational purposes only.',
      fr: 'La plateforme Tasting & Toasting est en phase de développement technique et de pré-licence. Aucune vente commerciale de vin, billetterie d\'événements ou services payants ne sont offerts via ce site web tant que toutes les licences espagnoles requises (distribution d\'alcool, enregistrement sanitaire, droits d\'accise, et autres) ne sont pas obtenues et que la filiale opérationnelle Tasting And Toasting SL n\'est pas pleinement enregistrée et opérationnelle. Les informations présentées ici le sont à titre illustratif et informatif uniquement.',
      ru: 'Платформа Tasting & Toasting находится в стадии технической разработки и до получения лицензий. Через этот сайт не предлагаются коммерческие продажи вина, продажа билетов на мероприятия или платные услуги до получения всех необходимых испанских лицензий (распространение алкоголя, санитарная регистрация, акцизы и другие) и до того, как операционная дочерняя компания Tasting And Toasting SL не будет полностью зарегистрирована и не начнёт работу. Информация на этом сайте представлена исключительно для иллюстративных и информационных целей.',
      es: 'La plataforma Tasting & Toasting se encuentra en fase de desarrollo técnico y pre-licencia. No se ofrecen ventas comerciales de vino, venta de entradas a eventos ni servicios de pago a través de este sitio web hasta que se obtengan todas las licencias españolas requeridas (distribución de alcohol, registro sanitario, impuestos especiales y otras) y la filial operativa Tasting And Toasting SL esté plenamente registrada y operativa. La información aquí presentada tiene únicamente carácter ilustrativo e informativo.',
      uk: 'Платформа Tasting & Toasting перебуває на стадії технічного розроблення та до отримання ліцензій. Через цей сайт не пропонуються комерційні продажі вина, продаж квитків на заходи чи платні послуги до отримання всіх необхідних іспанських ліцензій (розповсюдження алкоголю, санітарна реєстрація, акцизи та інші) і поки операційна дочірня компанія Tasting And Toasting SL не буде повністю зареєстрована та не розпочне роботу. Інформація на цьому сайті представлена виключно з ілюстративною та інформаційною метою.',
      it: 'La piattaforma Tasting & Toasting si trova in fase di sviluppo tecnico e pre-licenza. Nessuna vendita commerciale di vino, biglietteria per eventi o servizi a pagamento sono offerti tramite questo sito web fino a quando non saranno ottenute tutte le licenze spagnole richieste (distribuzione di alcolici, registrazione sanitaria, accise e altre) e la filiale operativa Tasting And Toasting SL non sarà pienamente registrata e operativa. Le informazioni qui presentate sono solo a scopo illustrativo e informativo.',
      de: 'Die Tasting & Toasting Plattform befindet sich in der technischen Entwicklung und Vor-Lizenzphase. Über diese Website werden keine kommerziellen Weinverkäufe, Veranstaltungsticketverkäufe oder kostenpflichtigen Dienstleistungen angeboten, bis alle erforderlichen spanischen Lizenzen (Alkoholvertrieb, Sanitärregistrierung, Verbrauchsteuer und andere) eingeholt sind und die operative Tochtergesellschaft Tasting And Toasting SL vollständig registriert und betriebsbereit ist. Die hier dargestellten Informationen dienen ausschließlich illustrativen und informativen Zwecken.',
      he: 'פלטפורמת Tasting & Toasting נמצאת בשלב פיתוח טכני וטרם רישוי. לא מוצעות מכירות מסחריות של יין, כרטיסים לאירועים או שירותים בתשלום באתר זה עד לקבלת כל הרישיונות הספרדיים הנדרשים (הפצת אלכוהול, רישום סניטרי, בלו ואחרים) והפעלה מלאה של חברת הבת התפעולית Tasting And Toasting SL. המידע המוצג כאן הוא להמחשה ולמידע בלבד.',
      pt: 'A plataforma Tasting & Toasting encontra-se em fase de desenvolvimento técnico e pré-licenciamento. Não são oferecidas vendas comerciais de vinho, bilhetes para eventos ou serviços pagos através deste website até serem obtidas todas as licenças espanholas necessárias (distribuição de álcool, registo sanitário, impostos especiais e outros) e a filial operativa Tasting And Toasting SL estar plenamente registada e operacional. A informação aqui apresentada destina-se apenas a fins ilustrativos e informativos.',
    },

    // ========== INDEX ANNOUNCEMENTS ==========
    'index.ann.toasts.eyebrow_announcement': {
      en: 'Announcement', fr: 'Annonce', ru: 'Анонс', es: 'Anuncio',
      uk: 'Анонс', it: 'Annuncio', de: 'Ankündigung',
      he: 'הודעה', pt: 'Anúncio',
    },
    'index.ann.toasts.eyebrow_coming': {
      en: 'Coming soon', fr: 'Bientôt', ru: 'Скоро', es: 'Próximamente',
      uk: 'Невдовзі', it: 'In arrivo', de: 'Demnächst',
      he: 'בקרוב', pt: 'Em breve',
    },
    'index.ann.toasts.title': {
      en: 'The <em>toasts</em> side of T&T.',
      fr: 'Le côté <em>toasts</em> de T&T.',
      ru: 'Сторона <em>тостов</em> T&T.',
      es: 'El lado de los <em>brindis</em> de T&T.',
      uk: 'Сторона <em>тостів</em> T&T.',
      it: 'Il lato <em>brindisi</em> di T&T.',
      de: 'Die <em>Toasts</em>-Seite von T&T.',
      he: 'הצד של ה<em>הרמות כוסית</em> של T&T.',
      pt: 'O lado dos <em>brindes</em> de T&T.',
    },
    'index.ann.toasts.sub': {
      en: 'A digital toastmaster, built into the game. Toasts in many cultures and languages, fitted to the moment, remembered the next morning.',
      fr: 'Un tamada numérique, intégré au jeu. Des toasts dans de nombreuses cultures et langues, adaptés au moment, dont on se souvient le lendemain matin.',
      ru: 'Цифровой тамада, встроенный в игру. Тосты на многих языках и из многих культур, подобранные под момент, запоминающиеся наутро.',
      es: 'Un tamada digital, integrado en el juego. Brindis en muchas culturas y lenguas, ajustados al momento, recordados a la mañana siguiente.',
      uk: 'Цифровий тамада, вбудований у гру. Тости багатьма мовами і з багатьох культур, підібрані під момент, що запам\'ятовуються наступного ранку.',
      it: 'Un tamada digitale, integrato nel gioco. Brindisi in molte culture e lingue, adatti al momento, ricordati la mattina dopo.',
      de: 'Ein digitaler Tamada, im Spiel integriert. Trinksprüche aus vielen Kulturen und in vielen Sprachen, dem Moment angepasst, am nächsten Morgen erinnert.',
      he: 'תמדה דיגיטלי, בנוי בתוך המשחק. הרמות כוסית בתרבויות ושפות רבות, מותאמות לרגע, נזכרות בבוקר שאחרי.',
      pt: 'Um tamada digital, integrado no jogo. Brindes de muitas culturas e línguas, ajustados ao momento, recordados na manhã seguinte.',
    },
    'index.ann.toasts.cta': {
      en: 'Read more', fr: 'En savoir plus', ru: 'Подробнее', es: 'Saber más',
      uk: 'Дізнатись більше', it: 'Scopri di più', de: 'Mehr erfahren',
      he: 'קרא עוד', pt: 'Saber mais',
    },

    'index.ann.somm.eyebrow_for': {
      en: 'For sommeliers', fr: 'Pour les sommeliers', ru: 'Для сомелье',
      es: 'Para sumilleres', uk: 'Для сомельє', it: 'Per i sommelier',
      de: 'Für Sommeliers', he: 'לסומלייה', pt: 'Para sommeliers',
    },
    'index.ann.somm.eyebrow_two': {
      en: 'Two sides', fr: 'Deux versants', ru: 'Две стороны',
      es: 'Dos caras', uk: 'Дві сторони', it: 'Due lati',
      de: 'Zwei Seiten', he: 'שני צדדים', pt: 'Dois lados',
    },
    'index.ann.somm.title': {
      en: 'Real <em>sommeliers</em>, in the room and in the app.',
      fr: 'De vrais <em>sommeliers</em>, dans la salle et dans l\'application.',
      ru: 'Настоящие <em>сомелье</em>, в зале и в приложении.',
      es: '<em>Sumilleres</em> reales, en la sala y en la aplicación.',
      uk: 'Справжні <em>сомельє</em>, у залі та в застосунку.',
      it: 'Veri <em>sommelier</em>, nella sala e nell\'app.',
      de: 'Echte <em>Sommeliers</em>, im Raum und in der App.',
      he: '<em>סומלייה</em> אמיתיים, בחדר ובאפליקציה.',
      pt: '<em>Sommeliers</em> reais, na sala e na aplicação.',
    },
    'index.ann.somm.sub': {
      en: 'We work alongside Spanish sommelier associations and host live tastings. A digital sommelier sits inside the game when no human is in the room.',
      fr: 'Nous travaillons aux côtés des associations espagnoles de sommeliers et organisons des dégustations en direct. Un sommelier numérique siège dans le jeu lorsqu\'aucun humain n\'est dans la salle.',
      ru: 'Мы работаем вместе с испанскими ассоциациями сомелье и проводим живые дегустации. Цифровой сомелье сидит внутри игры, когда в комнате нет живого специалиста.',
      es: 'Trabajamos junto a las asociaciones españolas de sumilleres y organizamos catas en vivo. Un sumiller digital se sienta dentro del juego cuando no hay un humano en la sala.',
      uk: 'Ми працюємо разом з іспанськими асоціаціями сомельє та проводимо живі дегустації. Цифровий сомельє сидить у грі, коли в кімнаті немає живого фахівця.',
      it: 'Lavoriamo a fianco delle associazioni spagnole di sommelier e ospitiamo degustazioni dal vivo. Un sommelier digitale siede dentro il gioco quando non c\'è un umano nella sala.',
      de: 'Wir arbeiten mit spanischen Sommelier-Verbänden zusammen und veranstalten Live-Verkostungen. Ein digitaler Sommelier sitzt im Spiel, wenn kein Mensch im Raum ist.',
      he: 'אנחנו עובדים יחד עם איגודי הסומלייה הספרדים ומארחים טעימות חיות. סומלייה דיגיטלי יושב בתוך המשחק כשאין אדם בחדר.',
      pt: 'Trabalhamos junto com as associações espanholas de sommeliers e organizamos provas ao vivo. Um sommelier digital senta-se dentro do jogo quando não há ninguém na sala.',
    },
    'index.ann.somm.cta': {
      en: 'For sommeliers', fr: 'Pour les sommeliers', ru: 'Для сомелье',
      es: 'Para sumilleres', uk: 'Для сомельє', it: 'Per i sommelier',
      de: 'Für Sommeliers', he: 'לסומלייה', pt: 'Para sommeliers',
    },

    // ========== INDEX PROTOTYPES SECTION ==========
    'index.proto.section_label': {
      en: 'The work, in motion', fr: 'Le travail, en mouvement', ru: 'Работа в движении',
      es: 'El trabajo, en movimiento', uk: 'Робота в русі', it: 'Il lavoro, in movimento',
      de: 'Die Arbeit, in Bewegung', he: 'העבודה, בתנועה', pt: 'O trabalho, em movimento',
    },
    'index.proto.section_title': {
      en: 'Four <em>prototypes</em>, one direction.',
      fr: 'Quatre <em>prototypes</em>, une direction.',
      ru: 'Четыре <em>прототипа</em>, одно направление.',
      es: 'Cuatro <em>prototipos</em>, una dirección.',
      uk: 'Чотири <em>прототипи</em>, один напрямок.',
      it: 'Quattro <em>prototipi</em>, una direzione.',
      de: 'Vier <em>Prototypen</em>, eine Richtung.',
      he: 'ארבעה <em>אבטיפוסים</em>, כיוון אחד.',
      pt: 'Quatro <em>protótipos</em>, uma direção.',
    },
    'index.proto.section_intro': {
      en: 'These are working visual prototypes, not the live product. Each one explores a different surface of what we\'re building. Click any to step inside and walk through the screens.',
      fr: 'Ce sont des prototypes visuels en cours, pas le produit en direct. Chacun explore une surface différente de ce que nous construisons. Cliquez sur l\'un d\'eux pour entrer et parcourir les écrans.',
      ru: 'Это рабочие визуальные прототипы, а не живой продукт. Каждый исследует свою грань того, что мы строим. Нажми на любой, чтобы зайти внутрь и пройти по экранам.',
      es: 'Estos son prototipos visuales en funcionamiento, no el producto en vivo. Cada uno explora una cara diferente de lo que estamos construyendo. Haz clic en cualquiera para entrar y recorrer las pantallas.',
      uk: 'Це робочі візуальні прототипи, а не живий продукт. Кожен досліджує свою грань того, що ми будуємо. Натисни на будь-який, щоб зайти всередину і пройти екранами.',
      it: 'Questi sono prototipi visivi funzionanti, non il prodotto live. Ognuno esplora una faccia diversa di ciò che stiamo costruendo. Clicca su uno qualsiasi per entrare e percorrere le schermate.',
      de: 'Das sind funktionierende visuelle Prototypen, nicht das Live-Produkt. Jeder erkundet eine andere Seite dessen, was wir bauen. Klicke auf einen, um hineinzugehen und die Bildschirme durchzugehen.',
      he: 'אלה אבטיפוסים חזותיים פעילים, לא המוצר החי. כל אחד חוקר פן אחר של מה שאנחנו בונים. לחץ על אחד מהם כדי להיכנס ולעבור על המסכים.',
      pt: 'Estes são protótipos visuais funcionais, não o produto ao vivo. Cada um explora uma face diferente daquilo que estamos a construir. Clica em qualquer um para entrar e percorrer os ecrãs.',
    },

    // Prototype card titles & descriptions
    'index.proto.card1.meta': {
      en: '01 · Member & subscription',
      fr: '01 · Adhésion et abonnement',
      ru: '01 · Подписка участника',
      es: '01 · Miembros y suscripción',
      uk: '01 · Членство та підписка',
      it: '01 · Iscrizione e abbonamento',
      de: '01 · Mitglied und Abo',
      he: '01 · חברות ומינוי',
      pt: '01 · Adesão e subscrição',
    },
    'index.proto.card1.title': {
      en: 'The <em>brand</em> face.',
      fr: 'Le visage de la <em>marque</em>.',
      ru: 'Лицо <em>бренда</em>.',
      es: 'La cara de la <em>marca</em>.',
      uk: 'Обличчя <em>бренду</em>.',
      it: 'Il volto del <em>marchio</em>.',
      de: 'Das <em>Marken</em>-Gesicht.',
      he: 'פני ה<em>מותג</em>.',
      pt: 'A face da <em>marca</em>.',
    },
    'index.proto.card1.desc': {
      en: 'Subscription tiers, member dashboard, producer view, event booking. The cinematic prototype showing how someone enters the world of Tasting & Toasting and what their first months look like.',
      fr: 'Niveaux d\'abonnement, tableau de bord membre, vue producteur, réservation d\'événements. Le prototype cinématographique montrant comment quelqu\'un entre dans le monde de Tasting & Toasting et à quoi ressemblent ses premiers mois.',
      ru: 'Уровни подписки, панель участника, представление производителя, бронирование событий. Кинематографичный прототип, показывающий, как человек входит в мир Tasting & Toasting и как выглядят его первые месяцы.',
      es: 'Niveles de suscripción, panel del miembro, vista del productor, reserva de eventos. El prototipo cinematográfico que muestra cómo alguien entra en el mundo de Tasting & Toasting y cómo son sus primeros meses.',
      uk: 'Рівні підписки, панель учасника, перегляд виробника, бронювання подій. Кінематографічний прототип, що показує, як людина входить у світ Tasting & Toasting і якими є її перші місяці.',
      it: 'Livelli di abbonamento, dashboard membro, vista produttore, prenotazione eventi. Il prototipo cinematografico che mostra come qualcuno entra nel mondo di Tasting & Toasting e come sono i suoi primi mesi.',
      de: 'Abo-Stufen, Mitglieder-Dashboard, Produzentenansicht, Eventbuchung. Der filmische Prototyp, der zeigt, wie jemand in die Welt von Tasting & Toasting eintritt und wie die ersten Monate aussehen.',
      he: 'דרגות מינוי, לוח חברים, תצוגת יצרן, הזמנת אירועים. האבטיפוס הקולנועי שמראה איך מישהו נכנס לעולם של Tasting & Toasting ואיך נראים החודשים הראשונים שלו.',
      pt: 'Níveis de subscrição, painel de membro, vista do produtor, reserva de eventos. O protótipo cinematográfico que mostra como alguém entra no mundo de Tasting & Toasting e como são os seus primeiros meses.',
    },
    'index.proto.card2.meta': {
      en: '02 · Game flow', fr: '02 · Flux de jeu', ru: '02 · Игровой процесс',
      es: '02 · Flujo de juego', uk: '02 · Хід гри', it: '02 · Flusso di gioco',
      de: '02 · Spielverlauf', he: '02 · מהלך המשחק', pt: '02 · Fluxo de jogo',
    },
    'index.proto.card2.title': {
      en: 'The <em>tasting</em> game.',
      fr: 'Le jeu de <em>dégustation</em>.',
      ru: 'Игра <em>дегустации</em>.',
      es: 'El juego de la <em>cata</em>.',
      uk: 'Гра <em>дегустації</em>.',
      it: 'Il gioco della <em>degustazione</em>.',
      de: 'Das <em>Verkostungs</em>-Spiel.',
      he: 'משחק ה<em>טעימה</em>.',
      pt: 'O jogo da <em>prova</em>.',
    },
    'index.proto.card2.desc': {
      en: 'A blind tasting party game played across phones. Setup, wine reveals, scoring, and the moment everyone learns who guessed right. The core experience that gives the brand its name.',
      fr: 'Un jeu de dégustation à l\'aveugle entre téléphones. Mise en place, révélations de vin, notation, et le moment où tout le monde apprend qui a deviné juste. L\'expérience centrale qui donne son nom à la marque.',
      ru: 'Игра в слепую дегустацию, разыгрываемая по телефонам. Подготовка, раскрытие вин, подсчёт очков и момент, когда все узнают, кто угадал. Главный опыт, который даёт бренду его имя.',
      es: 'Un juego de cata a ciegas jugado a través de teléfonos. Configuración, revelación de vinos, puntuación y el momento en el que todos descubren quién acertó. La experiencia central que le da el nombre a la marca.',
      uk: 'Гра в сліпу дегустацію, що грається через телефони. Налаштування, розкриття вин, підрахунок балів і момент, коли всі дізнаються, хто вгадав. Головний досвід, що дає бренду його ім\'я.',
      it: 'Un gioco di degustazione alla cieca giocato sui telefoni. Configurazione, rivelazione dei vini, punteggio e il momento in cui tutti scoprono chi ha indovinato. L\'esperienza centrale che dà il nome al marchio.',
      de: 'Ein Blindverkostungs-Partyspiel über Telefone. Einrichtung, Weinenthüllung, Punktevergabe und der Moment, in dem alle erfahren, wer richtig getippt hat. Das Kernerlebnis, das der Marke ihren Namen gibt.',
      he: 'משחק טעימה עיוורת שמשוחק בין טלפונים. הגדרה, חשיפת היינות, ניקוד והרגע בו כולם מגלים מי ניחש נכון. החוויה המרכזית שנותנת למותג את שמו.',
      pt: 'Um jogo de prova às cegas jogado através de telemóveis. Configuração, revelação dos vinhos, pontuação e o momento em que todos descobrem quem acertou. A experiência central que dá o nome à marca.',
    },
    'index.proto.card3.meta': {
      en: '03 · Operations', fr: '03 · Opérations', ru: '03 · Операции',
      es: '03 · Operaciones', uk: '03 · Операції', it: '03 · Operazioni',
      de: '03 · Betrieb', he: '03 · תפעול', pt: '03 · Operações',
    },
    'index.proto.card3.title': {
      en: 'The <em>company</em>, working.',
      fr: 'La <em>société</em>, en marche.',
      ru: '<em>Компания</em> в работе.',
      es: 'La <em>compañía</em>, funcionando.',
      uk: '<em>Компанія</em> у роботі.',
      it: 'La <em>società</em>, al lavoro.',
      de: 'Das <em>Unternehmen</em>, am Werk.',
      he: 'ה<em>חברה</em>, פועלת.',
      pt: 'A <em>empresa</em>, em ação.',
    },
    'index.proto.card3.desc': {
      en: 'Sign up, event scheduling, sommelier engagement, checkout, the tasting center calendar. The infrastructure side, what keeps the experience running in the background.',
      fr: 'Inscription, planification d\'événements, engagement de sommeliers, paiement, calendrier du centre de dégustation. Le côté infrastructure, ce qui fait fonctionner l\'expérience en arrière-plan.',
      ru: 'Регистрация, расписание событий, привлечение сомелье, оплата, календарь центра дегустации. Инфраструктурная сторона, то, что держит опыт на ходу за кадром.',
      es: 'Registro, programación de eventos, contratación de sumilleres, pago, calendario del centro de cata. El lado de la infraestructura, lo que mantiene la experiencia funcionando en segundo plano.',
      uk: 'Реєстрація, планування подій, залучення сомельє, оплата, календар центру дегустації. Інфраструктурна сторона, те, що тримає досвід у русі за кадром.',
      it: 'Registrazione, programmazione eventi, ingaggio sommelier, checkout, calendario del centro di degustazione. Il lato infrastruttura, ciò che fa funzionare l\'esperienza dietro le quinte.',
      de: 'Anmeldung, Eventplanung, Sommelier-Engagement, Bezahlung, Kalender des Verkostungszentrums. Die Infrastrukturseite, was das Erlebnis im Hintergrund am Laufen hält.',
      he: 'הרשמה, תזמון אירועים, התקשרות עם סומלייה, תשלום, יומן מרכז הטעימות. צד התשתית, מה שגורם לחוויה לפעול ברקע.',
      pt: 'Inscrição, agendamento de eventos, contratação de sommeliers, pagamento, calendário do centro de provas. O lado da infraestrutura, o que mantém a experiência a funcionar nos bastidores.',
    },
    'index.proto.card4.meta': {
      en: '04 · Wave 1 player', fr: '04 · Lecteur vague 1', ru: '04 · Первая волна',
      es: '04 · Jugador ola 1', uk: '04 · Перша хвиля', it: '04 · Player onda 1',
      de: '04 · Welle 1 Player', he: '04 · גל 1', pt: '04 · Jogador onda 1',
    },
    'index.proto.card4.title': {
      en: 'The <em>first</em> release.',
      fr: 'La <em>première</em> sortie.',
      ru: '<em>Первый</em> релиз.',
      es: 'El <em>primer</em> lanzamiento.',
      uk: '<em>Перший</em> реліз.',
      it: 'La <em>prima</em> versione.',
      de: 'Der <em>erste</em> Release.',
      he: 'ה<em>השקה</em> הראשונה.',
      pt: 'O <em>primeiro</em> lançamento.',
    },
    'index.proto.card4.desc': {
      en: 'A focused MVP slice of the player experience: auth, home, joining a game, browsing the catalog, ordering a kit. Closer to what the first real users will hold in their hand.',
      fr: 'Une tranche MVP ciblée de l\'expérience joueur : authentification, accueil, rejoindre un jeu, parcourir le catalogue, commander un kit. Plus proche de ce que les premiers utilisateurs réels auront en main.',
      ru: 'Сфокусированный MVP-срез опыта игрока: вход, главная, присоединение к игре, просмотр каталога, заказ набора. Ближе к тому, что первые настоящие пользователи будут держать в руках.',
      es: 'Una porción MVP enfocada de la experiencia del jugador: autenticación, inicio, unirse a una partida, explorar el catálogo, pedir un kit. Más cerca de lo que los primeros usuarios reales tendrán en la mano.',
      uk: 'Сфокусований MVP-зріз досвіду гравця: вхід, головна, приєднання до гри, перегляд каталогу, замовлення набору. Ближче до того, що перші реальні користувачі триматимуть у руках.',
      it: 'Una fetta MVP mirata dell\'esperienza del giocatore: autenticazione, home, partecipazione a una partita, navigazione del catalogo, ordine di un kit. Più vicino a quello che i primi utenti reali avranno in mano.',
      de: 'Ein fokussierter MVP-Ausschnitt der Spielererfahrung: Anmeldung, Startseite, einem Spiel beitreten, Katalog durchsuchen, Kit bestellen. Näher an dem, was die ersten echten Nutzer in der Hand halten werden.',
      he: 'פרוסת MVP ממוקדת של חוויית השחקן: אימות, בית, הצטרפות למשחק, עיון בקטלוג, הזמנת ערכה. קרוב יותר למה שהמשתמשים האמיתיים הראשונים יחזיקו בידם.',
      pt: 'Uma fatia MVP focada da experiência do jogador: autenticação, início, entrar num jogo, navegar pelo catálogo, encomendar um kit. Mais próximo daquilo que os primeiros utilizadores reais vão ter na mão.',
    },
    'index.proto.cta_open': {
      en: 'Open prototype', fr: 'Ouvrir le prototype', ru: 'Открыть прототип',
      es: 'Abrir prototipo', uk: 'Відкрити прототип', it: 'Apri prototipo',
      de: 'Prototyp öffnen', he: 'פתח אבטיפוס', pt: 'Abrir protótipo',
    },

    // ========== INDEX ABOUT SECTION ==========
    'index.about.section_label': {
      en: 'The company', fr: 'La société', ru: 'Компания',
      es: 'La compañía', uk: 'Компанія', it: 'La società',
      de: 'Das Unternehmen', he: 'החברה', pt: 'A empresa',
    },
    'index.about.title': {
      en: 'Who we <em>are</em>.',
      fr: 'Qui nous <em>sommes</em>.',
      ru: '<em>Кто</em> мы.',
      es: 'Quiénes <em>somos</em>.',
      uk: '<em>Хто</em> ми.',
      it: 'Chi <em>siamo</em>.',
      de: 'Wer wir <em>sind</em>.',
      he: 'מי <em>אנחנו</em>.',
      pt: 'Quem <em>somos</em>.',
    },
    'index.about.p1': {
      en: 'Tasting & Toasting is being built to be a wine experience company, entering the European market through Spain.',
      fr: 'Tasting & Toasting se construit comme une société d\'expériences œnologiques, entrant sur le marché européen par l\'Espagne.',
      ru: 'Tasting & Toasting строится как компания винного опыта, входящая на европейский рынок через Испанию.',
      es: 'Tasting & Toasting se está construyendo como una compañía de experiencias enológicas, entrando en el mercado europeo a través de España.',
      uk: 'Tasting & Toasting будується як компанія винного досвіду, що виходить на європейський ринок через Іспанію.',
      it: 'Tasting & Toasting si sta costruendo come una società di esperienze enologiche, entrando nel mercato europeo attraverso la Spagna.',
      de: 'Tasting & Toasting wird als Weinerlebnisgesellschaft aufgebaut, die über Spanien auf den europäischen Markt geht.',
      he: 'Tasting & Toasting נבנית כחברת חוויות יין, שנכנסת לשוק האירופי דרך ספרד.',
      pt: 'A Tasting & Toasting está a ser construída como uma empresa de experiências enológicas, a entrar no mercado europeu através de Espanha.',
    },
    'index.about.p2': {
      en: 'We position ourselves as multi-functional. Wine education, curated kits, hosted tastings, event organization, sommelier engagement, these are the directions. Today, we\'re in pre-launch and pre-licensing. No commercial wine activity yet.',
      fr: 'Nous nous positionnons comme multifonctionnels. Éducation vinicole, kits sélectionnés, dégustations animées, organisation d\'événements, engagement de sommeliers, ce sont nos directions. Aujourd\'hui, nous sommes en avant-lancement et avant-licence. Aucune activité commerciale de vin pour l\'instant.',
      ru: 'Мы позиционируем себя как многофункциональные. Винное образование, кураторские наборы, проводимые дегустации, организация событий, привлечение сомелье, вот наши направления. Сегодня мы в стадии до запуска и до лицензий. Пока никакой коммерческой винной деятельности.',
      es: 'Nos posicionamos como multifuncionales. Educación enológica, kits seleccionados, catas dirigidas, organización de eventos, contratación de sumilleres, son nuestras direcciones. Hoy estamos en pre-lanzamiento y pre-licencia. Ninguna actividad comercial de vino todavía.',
      uk: 'Ми позиціюємо себе як багатофункціональних. Винна освіта, кураторські набори, проведені дегустації, організація подій, залучення сомельє, ось наші напрямки. Сьогодні ми на стадії до запуску та до ліцензій. Поки що жодної комерційної винної діяльності.',
      it: 'Ci posizioniamo come multifunzionali. Educazione enologica, kit selezionati, degustazioni guidate, organizzazione eventi, ingaggio sommelier, queste sono le nostre direzioni. Oggi siamo in pre-lancio e pre-licenza. Ancora nessuna attività commerciale di vino.',
      de: 'Wir positionieren uns multifunktional. Weinbildung, kuratierte Kits, geführte Verkostungen, Eventorganisation, Sommelier-Engagement, das sind unsere Richtungen. Heute sind wir vor dem Start und vor der Lizenzierung. Noch keine kommerzielle Weinaktivität.',
      he: 'אנחנו ממצבים את עצמנו כרב-תכליתיים. חינוך יין, ערכות מובחרות, טעימות מודרכות, ארגון אירועים, התקשרות עם סומלייה, אלה הכיוונים שלנו. היום אנחנו בטרום השקה וטרום רישוי. אין עדיין פעילות מסחרית של יין.',
      pt: 'Posicionamo-nos como multifuncionais. Educação enológica, kits selecionados, provas guiadas, organização de eventos, contratação de sommeliers, estas são as nossas direções. Hoje estamos em pré-lançamento e pré-licenciamento. Ainda nenhuma atividade comercial de vinho.',
    },
    'index.about.p3': {
      en: 'The prototypes you see here are the design and product work we\'ve done while the legal and operational foundation is being prepared. They\'re a window into where we\'re headed, not a live storefront.',
      fr: 'Les prototypes que vous voyez ici sont le travail de design et de produit que nous avons fait pendant que les bases légales et opérationnelles se préparent. Ils sont une fenêtre vers notre direction, pas une vitrine en direct.',
      ru: 'Прототипы, которые ты здесь видишь, это работа по дизайну и продукту, которую мы проделали, пока готовятся юридические и операционные основы. Это окно в наше будущее, а не живая витрина.',
      es: 'Los prototipos que ves aquí son el trabajo de diseño y producto que hemos hecho mientras se prepara la base legal y operativa. Son una ventana hacia donde nos dirigimos, no una vitrina en vivo.',
      uk: 'Прототипи, які ти тут бачиш, це робота з дизайну та продукту, яку ми зробили, поки готується юридичний та операційний фундамент. Це вікно в наше майбутнє, а не жива вітрина.',
      it: 'I prototipi che vedi qui sono il lavoro di design e prodotto che abbiamo fatto mentre si prepara la base legale e operativa. Sono una finestra verso dove stiamo andando, non una vetrina dal vivo.',
      de: 'Die Prototypen, die du hier siehst, sind die Design- und Produktarbeit, die wir gemacht haben, während die rechtliche und operative Grundlage vorbereitet wird. Sie sind ein Fenster zu dem, wohin wir gehen, kein Live-Schaufenster.',
      he: 'האבטיפוסים שאתה רואה כאן הם עבודת העיצוב והמוצר שעשינו בזמן שהבסיס המשפטי והתפעולי נמצא בהכנה. הם חלון אל לאן אנחנו הולכים, לא חלון ראווה חי.',
      pt: 'Os protótipos que vês aqui são o trabalho de design e produto que fizemos enquanto a base legal e operacional está a ser preparada. São uma janela para onde nos dirigimos, não uma montra ao vivo.',
    },
    'index.about.p4': {
      en: 'If you\'d like to be in touch, about wine, design, partnership, regulation, or just curiosity, write to us.',
      fr: 'Si tu veux nous contacter, à propos de vin, de design, de partenariat, de réglementation, ou par simple curiosité, écris-nous.',
      ru: 'Если ты хочешь связаться с нами, о вине, дизайне, партнёрстве, регулировании, или просто из любопытства, напиши нам.',
      es: 'Si quieres ponerte en contacto, sobre vino, diseño, colaboración, regulación, o solo por curiosidad, escríbenos.',
      uk: 'Якщо ти хочеш зв\'язатись з нами, про вино, дизайн, партнерство, регулювання, або просто з цікавості, напиши нам.',
      it: 'Se vuoi metterti in contatto, su vino, design, partnership, regolamentazione, o per pura curiosità, scrivici.',
      de: 'Wenn du Kontakt aufnehmen möchtest, zu Wein, Design, Partnerschaft, Regulierung, oder einfach aus Neugier, schreib uns.',
      he: 'אם אתה רוצה ליצור קשר, על יין, עיצוב, שותפות, רגולציה, או סתם מסקרנות, כתוב לנו.',
      pt: 'Se queres entrar em contacto, sobre vinho, design, parceria, regulação, ou apenas por curiosidade, escreve-nos.',
    },
    'index.about.facts_label': {
      en: 'Company facts', fr: 'Données de la société', ru: 'Данные компании',
      es: 'Datos de la compañía', uk: 'Дані компанії', it: 'Dati della società',
      de: 'Unternehmensdaten', he: 'נתוני החברה', pt: 'Dados da empresa',
    },
    'index.about.facts.parent': {
      en: 'Parent', fr: 'Maison-mère', ru: 'Материнская', es: 'Matriz',
      uk: 'Материнська', it: 'Capogruppo', de: 'Muttergesellschaft',
      he: 'חברה אם', pt: 'Empresa-mãe',
    },
    'index.about.facts.form': {
      en: 'Form', fr: 'Forme', ru: 'Форма', es: 'Forma',
      uk: 'Форма', it: 'Forma', de: 'Rechtsform',
      he: 'צורה משפטית', pt: 'Forma',
    },
    'index.about.facts.form_value': {
      en: 'Delaware Corporation, USA', fr: 'Société du Delaware, USA',
      ru: 'Корпорация Делавэр, США', es: 'Sociedad de Delaware, EE.UU.',
      uk: 'Корпорація Делавер, США', it: 'Società del Delaware, USA',
      de: 'Delaware Corporation, USA', he: 'תאגיד דלאוור, ארה״ב',
      pt: 'Sociedade do Delaware, EUA',
    },
    'index.about.facts.filing': {
      en: 'Filing No.', fr: 'Nº de dépôt', ru: 'Регистрационный №',
      es: 'Nº de registro', uk: 'Реєстраційний №', it: 'Nº di registro',
      de: 'Reg.-Nr.', he: 'מס׳ רישום', pt: 'Nº de registo',
    },
    'index.about.facts.incorporated': {
      en: 'Incorporated', fr: 'Constituée le', ru: 'Зарегистрирована',
      es: 'Constituida', uk: 'Зареєстрована', it: 'Costituita',
      de: 'Gegründet', he: 'התאגדה', pt: 'Constituída',
    },
    'index.about.facts.incorporated_value': {
      en: '02 June 2023', fr: '02 juin 2023', ru: '02 июня 2023',
      es: '02 de junio de 2023', uk: '02 червня 2023', it: '02 giugno 2023',
      de: '02. Juni 2023', he: '02 ביוני 2023', pt: '02 de junho de 2023',
    },
    'index.about.facts.spanish_entity': {
      en: 'Spanish entity', fr: 'Entité espagnole', ru: 'Испанская компания',
      es: 'Entidad española', uk: 'Іспанська компанія', it: 'Entità spagnola',
      de: 'Spanische Einheit', he: 'ישות ספרדית', pt: 'Entidade espanhola',
    },
    'index.about.facts.spanish_value': {
      en: 'Tasting And Toasting SL <em>(in registration)</em>',
      fr: 'Tasting And Toasting SL <em>(en cours d\'enregistrement)</em>',
      ru: 'Tasting And Toasting SL <em>(в процессе регистрации)</em>',
      es: 'Tasting And Toasting SL <em>(en registro)</em>',
      uk: 'Tasting And Toasting SL <em>(у процесі реєстрації)</em>',
      it: 'Tasting And Toasting SL <em>(in registrazione)</em>',
      de: 'Tasting And Toasting SL <em>(in Eintragung)</em>',
      he: 'Tasting And Toasting SL <em>(בהליך רישום)</em>',
      pt: 'Tasting And Toasting SL <em>(em registo)</em>',
    },
    'index.about.facts.base': {
      en: 'Operating base', fr: 'Base opérationnelle', ru: 'Операционная база',
      es: 'Base operativa', uk: 'Операційна база', it: 'Base operativa',
      de: 'Operativer Sitz', he: 'בסיס תפעולי', pt: 'Base operacional',
    },
    'index.about.facts.base_value': {
      en: 'Valencia, Spain', fr: 'Valence, Espagne', ru: 'Валенсия, Испания',
      es: 'Valencia, España', uk: 'Валенсія, Іспанія', it: 'Valencia, Spagna',
      de: 'Valencia, Spanien', he: 'ולנסיה, ספרד', pt: 'Valência, Espanha',
    },
    'index.about.facts.status': {
      en: 'Status', fr: 'Statut', ru: 'Статус', es: 'Estado',
      uk: 'Статус', it: 'Stato', de: 'Status', he: 'מצב', pt: 'Estado',
    },
    'index.about.facts.status_value': {
      en: 'Pre-launch · Pre-licensing',
      fr: 'Avant lancement · Avant licence',
      ru: 'До запуска · До лицензий',
      es: 'Pre-lanzamiento · Pre-licencia',
      uk: 'До запуску · До ліцензій',
      it: 'Pre-lancio · Pre-licenza',
      de: 'Vor dem Start · Vor Lizenzierung',
      he: 'טרום השקה · טרום רישוי',
      pt: 'Pré-lançamento · Pré-licenciamento',
    },
    'index.about.facts.contact': {
      en: 'Contact', fr: 'Contact', ru: 'Контакт', es: 'Contacto',
      uk: 'Контакт', it: 'Contatto', de: 'Kontakt', he: 'איש קשר', pt: 'Contacto',
    },

  } // close s
};

// ============================================================
// LANGUAGE SWITCHER LOGIC
// ============================================================
(function() {
  const I18N = window.TT_I18N;

  function getCurrentLang() {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('lang');
    if (fromUrl && I18N.langs[fromUrl]) return fromUrl;
    return 'en';
  }

  function setLang(lang) {
    if (!I18N.langs[lang]) return;
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.location.href = url.toString();
  }

  function applyLang(lang) {
    if (!I18N.langs[lang]) lang = 'en';
    const meta = I18N.langs[lang];

    // Set HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;

    // Replace all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const dict = I18N.s[key];
      if (!dict) return;
      const value = dict[lang] || dict.en;
      // Allow basic <em>/<strong>/<br> tags from translations
      el.innerHTML = value;
    });

    // Replace data-i18n-attr (e.g., title="...", aria-label="...")
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const spec = el.getAttribute('data-i18n-attr'); // "attr:key"
      spec.split(',').forEach(pair => {
        const [attr, key] = pair.trim().split(':');
        const dict = I18N.s[key];
        if (dict) el.setAttribute(attr, dict[lang] || dict.en);
      });
    });

    // Update language switcher current display
    const trigger = document.querySelector('.lang-trigger');
    if (trigger) {
      const flag = trigger.querySelector('use');
      const label = trigger.querySelector('.lang-trigger-code');
      if (flag) flag.setAttribute('href', '#' + meta.flag);
      if (label) label.textContent = lang.toUpperCase();
    }

    // Mark active item in dropdown
    document.querySelectorAll('.lang-item').forEach(item => {
      item.classList.toggle('active', item.dataset.lang === lang);
    });

    // Save subsequent navigation: rewrite all internal anchor hrefs to keep ?lang=
    if (lang !== 'en') {
      document.querySelectorAll('a[href]').forEach(a => {
        const href = a.getAttribute('href');
        if (!href) return;
        if (href.startsWith('http://') || href.startsWith('https://')) return;
        if (href.startsWith('mailto:') || href.startsWith('tel:')) return;
        if (href.startsWith('#')) return;
        if (href.includes('?lang=')) return;
        const sep = href.includes('?') ? '&' : '?';
        a.setAttribute('href', href + sep + 'lang=' + lang);
      });
    }
  }

  // Public API
  window.TT_I18N.getCurrentLang = getCurrentLang;
  window.TT_I18N.setLang = setLang;
  window.TT_I18N.applyLang = applyLang;

  // Bootstrap on DOM ready
  function init() {
    const lang = getCurrentLang();
    applyLang(lang);

    // Wire up dropdown toggle
    const trigger = document.querySelector('.lang-trigger');
    const menu = document.querySelector('.lang-menu');
    if (trigger && menu) {
      trigger.addEventListener('click', e => {
        e.stopPropagation();
        menu.classList.toggle('open');
      });
      document.addEventListener('click', e => {
        if (!menu.contains(e.target) && !trigger.contains(e.target)) {
          menu.classList.remove('open');
        }
      });
      menu.querySelectorAll('.lang-item').forEach(item => {
        item.addEventListener('click', e => {
          e.preventDefault();
          setLang(item.dataset.lang);
        });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

// === TOASTS PAGE STRINGS ===
// Toasts page translations — extends window.TT_I18N.s
(function() {
  if (!window.TT_I18N) return;
  Object.assign(window.TT_I18N.s, {

    // ========== TOASTS HERO ==========
    'toasts.hero.eyebrow_announcement': {
      en: 'Announcement', fr: 'Annonce', ru: 'Анонс', es: 'Anuncio',
      uk: 'Анонс', it: 'Annuncio', de: 'Ankündigung',
      he: 'הודעה', pt: 'Anúncio',
    },
    'toasts.hero.eyebrow_side': {
      en: 'The toasts side of T&T',
      fr: 'Le côté toasts de T&T',
      ru: 'Сторона тостов T&T',
      es: 'El lado de los brindis de T&T',
      uk: 'Сторона тостів T&T',
      it: 'Il lato brindisi di T&T',
      de: 'Die Toasts-Seite von T&T',
      he: 'הצד של הרמת הכוסית של T&T',
      pt: 'O lado dos brindes de T&T',
    },
    'toasts.hero.title': {
      en: 'A new kind of <em>toasting</em>, quietly assisted.',
      fr: 'Un nouveau type de <em>toasts</em>, discrètement assisté.',
      ru: 'Новый вид <em>тостов</em>, тихо подсказанных.',
      es: 'Un nuevo tipo de <em>brindis</em>, asistido en silencio.',
      uk: 'Новий вид <em>тостів</em>, з тихою підтримкою.',
      it: 'Un nuovo tipo di <em>brindisi</em>, assistito con discrezione.',
      de: 'Eine neue Art von <em>Trinksprüchen</em>, leise unterstützt.',
      he: 'סוג חדש של <em>הרמות כוסית</em>, נתמך בשקט.',
      pt: 'Um novo tipo de <em>brindes</em>, discretamente assistido.',
    },
    'toasts.hero.sub': {
      en: 'A <span class="accent">digital toastmaster</span> built into the Tasting & Toasting game. Toasts that know the room, the moment, and the people, drawn from a growing library of cultures and languages. <strong>Coming soon.</strong>',
      fr: 'Un <span class="accent">tamada numérique</span> intégré au jeu Tasting & Toasting. Des toasts qui connaissent la salle, le moment et les personnes, tirés d\'une bibliothèque grandissante de cultures et de langues. <strong>Bientôt.</strong>',
      ru: '<span class="accent">Цифровой тамада</span>, встроенный в игру Tasting & Toasting. Тосты, которые знают комнату, момент и людей, из растущей библиотеки культур и языков. <strong>Скоро.</strong>',
      es: 'Un <span class="accent">tamada digital</span> integrado en el juego Tasting & Toasting. Brindis que conocen la sala, el momento y las personas, extraídos de una biblioteca creciente de culturas e idiomas. <strong>Próximamente.</strong>',
      uk: '<span class="accent">Цифровий тамада</span>, вбудований у гру Tasting & Toasting. Тости, що знають кімнату, момент і людей, з бібліотеки культур і мов, що зростає. <strong>Невдовзі.</strong>',
      it: 'Un <span class="accent">tamada digitale</span> integrato nel gioco Tasting & Toasting. Brindisi che conoscono la sala, il momento e le persone, attinti da una biblioteca crescente di culture e lingue. <strong>In arrivo.</strong>',
      de: 'Ein <span class="accent">digitaler Tamada</span>, im Spiel Tasting & Toasting eingebaut. Trinksprüche, die den Raum, den Moment und die Menschen kennen, aus einer wachsenden Bibliothek von Kulturen und Sprachen. <strong>Demnächst.</strong>',
      he: '<span class="accent">תמדה דיגיטלי</span> בנוי בתוך משחק Tasting & Toasting. הרמות כוסית שמכירות את החדר, את הרגע ואת האנשים, מתוך ספרייה הולכת וגדלה של תרבויות ושפות. <strong>בקרוב.</strong>',
      pt: 'Um <span class="accent">tamada digital</span> integrado no jogo Tasting & Toasting. Brindes que conhecem a sala, o momento e as pessoas, retirados de uma biblioteca crescente de culturas e línguas. <strong>Em breve.</strong>',
    },
    'toasts.hero.btn_touch': {
      en: 'Be in touch', fr: 'Nous contacter', ru: 'Связаться',
      es: 'Contactar', uk: 'Зв\'язатись', it: 'Contattaci',
      de: 'Kontakt aufnehmen', he: 'יצירת קשר', pt: 'Em contacto',
    },
    'toasts.hero.btn_how': {
      en: 'How it works', fr: 'Comment ça marche', ru: 'Как это работает',
      es: 'Cómo funciona', uk: 'Як це працює', it: 'Come funziona',
      de: 'Wie es funktioniert', he: 'איך זה עובד', pt: 'Como funciona',
    },
    'toasts.hero.quote_text': {
      en: '"A toast is not the speech, it is the moment everyone leans in."',
      fr: '« Un toast n\'est pas le discours, c\'est le moment où chacun se penche en avant. »',
      ru: '«Тост, это не речь, это момент, когда все наклоняются вперёд».',
      es: '«Un brindis no es el discurso, es el momento en que todos se inclinan hacia adelante.»',
      uk: '«Тост, це не промова, це момент, коли всі нахиляються вперед».',
      it: '«Un brindisi non è il discorso, è il momento in cui tutti si sporgono in avanti.»',
      de: '„Ein Trinkspruch ist nicht die Rede, er ist der Moment, in dem alle sich vorbeugen."',
      he: '"הרמת כוסית אינה הנאום, היא הרגע שבו כולם רוכנים לפנים."',
      pt: '«Um brinde não é o discurso, é o momento em que todos se inclinam para a frente.»',
    },
    'toasts.hero.quote_attr': {
      en: 'An old saying, more or less', fr: 'Un vieux dicton, à peu près',
      ru: 'Старая поговорка, более-менее', es: 'Un viejo dicho, más o menos',
      uk: 'Стара приказка, більш-менш', it: 'Un vecchio detto, più o meno',
      de: 'Ein altes Sprichwort, mehr oder weniger',
      he: 'אמרה ישנה, פחות או יותר',
      pt: 'Um velho ditado, mais ou menos',
    },

    // ========== TOASTS THINKING SECTION ==========
    'toasts.thinking.label': {
      en: 'The thinking', fr: 'La réflexion', ru: 'Мысль',
      es: 'El pensamiento', uk: 'Думка', it: 'Il pensiero',
      de: 'Der Gedanke', he: 'המחשבה', pt: 'O pensamento',
    },
    'toasts.thinking.title': {
      en: 'Half of <em>Tasting & Toasting</em> is the toasting.',
      fr: 'La moitié de <em>Tasting & Toasting</em>, c\'est le toast.',
      ru: 'Половина <em>Tasting & Toasting</em>, это тосты.',
      es: 'La mitad de <em>Tasting & Toasting</em> son los brindis.',
      uk: 'Половина <em>Tasting & Toasting</em>, це тости.',
      it: 'Metà di <em>Tasting & Toasting</em> è il brindisi.',
      de: 'Die Hälfte von <em>Tasting & Toasting</em> ist das Anstoßen.',
      he: 'חצי מ-<em>Tasting & Toasting</em> זה הרמת הכוסית.',
      pt: 'Metade de <em>Tasting & Toasting</em> são os brindes.',
    },
    'toasts.thinking.intro': {
      en: 'The name was never a play on words. Tasting is what we put on the table. Toasting is what happens above it, the words that turn a dinner into a memory. We built the game side first. Now we are building the half that everyone actually quotes the next morning.',
      fr: 'Le nom n\'a jamais été un jeu de mots. La dégustation, c\'est ce que nous mettons sur la table. Le toast, c\'est ce qui se passe au-dessus, les mots qui transforment un dîner en souvenir. Nous avons construit le côté jeu d\'abord. Maintenant nous construisons la moitié que tout le monde cite vraiment le lendemain matin.',
      ru: 'Имя никогда не было игрой слов. Дегустация, это то, что мы ставим на стол. Тост, это то, что происходит над ним, слова, превращающие ужин в воспоминание. Сначала мы построили игровую сторону. Теперь строим ту половину, которую все на самом деле цитируют наутро.',
      es: 'El nombre nunca fue un juego de palabras. La cata es lo que ponemos sobre la mesa. El brindis es lo que pasa por encima, las palabras que convierten una cena en un recuerdo. Construimos primero el lado del juego. Ahora estamos construyendo la mitad que todos citan a la mañana siguiente.',
      uk: 'Назва ніколи не була грою слів. Дегустація, це те, що ми ставимо на стіл. Тост, це те, що відбувається над ним, слова, які перетворюють вечерю на спогад. Спочатку ми побудували ігрову сторону. Тепер будуємо ту половину, яку всі насправді цитують наступного ранку.',
      it: 'Il nome non è mai stato un gioco di parole. La degustazione è ciò che mettiamo sul tavolo. Il brindisi è ciò che accade sopra, le parole che trasformano una cena in un ricordo. Abbiamo costruito prima il lato gioco. Ora stiamo costruendo la metà che tutti citano davvero la mattina dopo.',
      de: 'Der Name war nie ein Wortspiel. Die Verkostung ist das, was wir auf den Tisch stellen. Das Anstoßen ist das, was darüber passiert, die Worte, die ein Abendessen zur Erinnerung machen. Wir haben die Spielseite zuerst gebaut. Jetzt bauen wir die Hälfte, die alle am nächsten Morgen wirklich zitieren.',
      he: 'השם מעולם לא היה משחק מילים. הטעימה היא מה שאנחנו מניחים על השולחן. הרמת הכוסית היא מה שקורה מעליו, המילים שהופכות ארוחה לזיכרון. בנינו קודם את צד המשחק. עכשיו אנחנו בונים את החצי שכולם באמת מצטטים בבוקר שאחרי.',
      pt: 'O nome nunca foi um jogo de palavras. A prova é o que pomos em cima da mesa. O brinde é o que acontece por cima, as palavras que transformam um jantar numa memória. Construímos o lado do jogo primeiro. Agora estamos a construir a metade que toda a gente cita realmente na manhã seguinte.',
    },

    // ========== TOASTS HOW IT WORKS ==========
    'toasts.how.label': {
      en: 'How it works', fr: 'Comment ça marche', ru: 'Как это работает',
      es: 'Cómo funciona', uk: 'Як це працює', it: 'Come funziona',
      de: 'Wie es funktioniert', he: 'איך זה עובד', pt: 'Como funciona',
    },
    'toasts.how.title': {
      en: 'A <em>library</em>, a <em>moment</em>, a <em>voice</em>.',
      fr: 'Une <em>bibliothèque</em>, un <em>moment</em>, une <em>voix</em>.',
      ru: '<em>Библиотека</em>, <em>момент</em>, <em>голос</em>.',
      es: 'Una <em>biblioteca</em>, un <em>momento</em>, una <em>voz</em>.',
      uk: '<em>Бібліотека</em>, <em>момент</em>, <em>голос</em>.',
      it: 'Una <em>biblioteca</em>, un <em>momento</em>, una <em>voce</em>.',
      de: 'Eine <em>Bibliothek</em>, ein <em>Moment</em>, eine <em>Stimme</em>.',
      he: '<em>ספרייה</em>, <em>רגע</em>, <em>קול</em>.',
      pt: 'Uma <em>biblioteca</em>, um <em>momento</em>, uma <em>voz</em>.',
    },
    'toasts.how.intro': {
      en: 'Three things, working together. A growing library of toasts curated by people who actually know the cultures. A sense of the moment, so the toast fits the room. And, soon, a voice that can read it aloud in the right language.',
      fr: 'Trois choses qui fonctionnent ensemble. Une bibliothèque grandissante de toasts sélectionnés par des gens qui connaissent vraiment les cultures. Le sens du moment, pour que le toast colle à la salle. Et, bientôt, une voix capable de le lire à haute voix dans la bonne langue.',
      ru: 'Три вещи, работающие вместе. Растущая библиотека тостов, отобранных людьми, которые действительно знают культуры. Чувство момента, чтобы тост подходил комнате. И, скоро, голос, который сможет прочитать его вслух на нужном языке.',
      es: 'Tres cosas, trabajando juntas. Una biblioteca creciente de brindis seleccionados por personas que realmente conocen las culturas. Sentido del momento, para que el brindis encaje con la sala. Y, pronto, una voz que pueda leerlo en voz alta en el idioma adecuado.',
      uk: 'Три речі, що працюють разом. Бібліотека тостів, що зростає, відібрана людьми, які справді знають культури. Чуття моменту, щоб тост пасував кімнаті. І, невдовзі, голос, що зможе прочитати його вголос правильною мовою.',
      it: 'Tre cose che lavorano insieme. Una biblioteca crescente di brindisi selezionati da persone che conoscono davvero le culture. Senso del momento, perché il brindisi si adatti alla sala. E, presto, una voce capace di leggerlo ad alta voce nella lingua giusta.',
      de: 'Drei Dinge, die zusammenarbeiten. Eine wachsende Bibliothek von Trinksprüchen, ausgewählt von Menschen, die die Kulturen wirklich kennen. Ein Gespür für den Moment, damit der Trinkspruch zum Raum passt. Und bald eine Stimme, die ihn in der richtigen Sprache laut vorlesen kann.',
      he: 'שלושה דברים, פועלים יחד. ספרייה הולכת וגדלה של הרמות כוסית שנאספו על ידי אנשים שבאמת מכירים את התרבויות. תחושת הרגע, כדי שההרמה תתאים לחדר. ובקרוב, קול שיוכל להקריא אותה בשפה הנכונה.',
      pt: 'Três coisas, a trabalhar juntas. Uma biblioteca crescente de brindes selecionados por pessoas que realmente conhecem as culturas. Sentido do momento, para que o brinde se encaixe na sala. E, em breve, uma voz que possa lê-lo em voz alta na língua certa.',
    },

    // Pillar 01: Library
    'toasts.pillar1.num': {
      en: '01 · Library', fr: '01 · Bibliothèque', ru: '01 · Библиотека',
      es: '01 · Biblioteca', uk: '01 · Бібліотека', it: '01 · Biblioteca',
      de: '01 · Bibliothek', he: '01 · ספרייה', pt: '01 · Biblioteca',
    },
    'toasts.pillar1.title': {
      en: 'Curated by <em>people</em> who know the table.',
      fr: 'Sélectionnée par des <em>personnes</em> qui connaissent la table.',
      ru: 'Собрана <em>людьми</em>, которые знают стол.',
      es: 'Seleccionada por <em>personas</em> que conocen la mesa.',
      uk: 'Зібрана <em>людьми</em>, які знають стіл.',
      it: 'Curata da <em>persone</em> che conoscono il tavolo.',
      de: 'Zusammengestellt von <em>Menschen</em>, die den Tisch kennen.',
      he: 'נאספה על ידי <em>אנשים</em> שמכירים את השולחן.',
      pt: 'Selecionada por <em>pessoas</em> que conhecem a mesa.',
    },
    'toasts.pillar1.desc': {
      en: 'Every toast in the starting library is reviewed by native speakers and writers from the cultures they belong to. Georgian toasts read by Georgians, Jewish toasts by Jews, Spanish by Spaniards. The library grows as the community grows.',
      fr: 'Chaque toast de la bibliothèque de départ est relu par des locuteurs natifs et des écrivains issus des cultures auxquelles ils appartiennent. Les toasts géorgiens lus par des Géorgiens, les toasts juifs par des Juifs, les espagnols par des Espagnols. La bibliothèque grandit avec la communauté.',
      ru: 'Каждый тост в начальной библиотеке проверен носителями языка и писателями из тех культур, к которым он принадлежит. Грузинские тосты читают грузины, еврейские, евреи, испанские, испанцы. Библиотека растёт вместе с сообществом.',
      es: 'Cada brindis de la biblioteca inicial está revisado por hablantes nativos y escritores de las culturas a las que pertenece. Los brindis georgianos leídos por georgianos, los judíos por judíos, los españoles por españoles. La biblioteca crece a medida que crece la comunidad.',
      uk: 'Кожен тост у початковій бібліотеці перевірений носіями мови та письменниками з тих культур, до яких він належить. Грузинські тости читають грузини, єврейські, євреї, іспанські, іспанці. Бібліотека росте разом зі спільнотою.',
      it: 'Ogni brindisi nella biblioteca iniziale è controllato da madrelingua e scrittori delle culture a cui appartiene. I brindisi georgiani letti da georgiani, gli ebraici dagli ebrei, gli spagnoli dagli spagnoli. La biblioteca cresce con la crescita della comunità.',
      de: 'Jeder Trinkspruch in der Startbibliothek wird von Muttersprachlern und Autoren aus den jeweiligen Kulturen geprüft. Georgische Trinksprüche werden von Georgiern gelesen, jüdische von Juden, spanische von Spaniern. Die Bibliothek wächst mit der Gemeinschaft.',
      he: 'כל הרמת כוסית בספרייה הראשונית נבדקת על ידי דוברי שפת אם וכותבים מהתרבויות אליהן היא שייכת. הרמות גאורגיות נקראות על ידי גאורגים, יהודיות על ידי יהודים, ספרדיות על ידי ספרדים. הספרייה גדלה עם הקהילה.',
      pt: 'Cada brinde na biblioteca inicial é revisto por falantes nativos e escritores das culturas a que pertencem. Os brindes georgianos lidos por georgianos, os judaicos por judeus, os espanhóis por espanhóis. A biblioteca cresce à medida que a comunidade cresce.',
    },

    // Pillar 02: Moment
    'toasts.pillar2.num': {
      en: '02 · Moment', fr: '02 · Moment', ru: '02 · Момент',
      es: '02 · Momento', uk: '02 · Момент', it: '02 · Momento',
      de: '02 · Moment', he: '02 · רגע', pt: '02 · Momento',
    },
    'toasts.pillar2.title': {
      en: 'Toasts that <em>fit</em> the room.',
      fr: 'Des toasts qui <em>collent</em> à la salle.',
      ru: 'Тосты, что <em>подходят</em> комнате.',
      es: 'Brindis que <em>encajan</em> con la sala.',
      uk: 'Тости, що <em>пасують</em> кімнаті.',
      it: 'Brindisi che <em>calzano</em> alla sala.',
      de: 'Trinksprüche, die zum <em>Raum</em> passen.',
      he: 'הרמות כוסית ש<em>מתאימות</em> לחדר.',
      pt: 'Brindes que <em>encaixam</em> na sala.',
    },
    'toasts.pillar2.desc': {
      en: 'When you set up a game, the host sets the tone. Birthday or wake. Old friends or strangers. Wedding eve or quiet weeknight. The right toasts are surfaced for the right moments, opening, mid-game, the final glass.',
      fr: 'Quand tu prépares une partie, l\'hôte donne le ton. Anniversaire ou veillée. Vieux amis ou inconnus. Veille de mariage ou soirée tranquille en semaine. Les bons toasts remontent aux bons moments, ouverture, milieu de partie, dernier verre.',
      ru: 'Когда ты готовишь игру, ведущий задаёт тон. День рождения или поминки. Старые друзья или незнакомцы. Канун свадьбы или спокойный будний вечер. Правильные тосты всплывают в правильные моменты, открытие, середина, последний бокал.',
      es: 'Cuando preparas una partida, el anfitrión marca el tono. Cumpleaños o velatorio. Viejos amigos o desconocidos. Víspera de boda o velada tranquila entre semana. Los brindis correctos aparecen en los momentos correctos, apertura, mitad de juego, copa final.',
      uk: 'Коли ти готуєш гру, ведучий задає тон. День народження чи поминки. Старі друзі чи незнайомці. Переддень весілля чи спокійний будній вечір. Правильні тости спливають у правильні моменти, відкриття, середина, останній келих.',
      it: 'Quando prepari una partita, l\'ospite dà il tono. Compleanno o veglia. Vecchi amici o sconosciuti. Vigilia di nozze o serata tranquilla infrasettimanale. I brindisi giusti emergono nei momenti giusti, apertura, metà partita, calice finale.',
      de: 'Wenn du ein Spiel einrichtest, gibt der Gastgeber den Ton an. Geburtstag oder Totenwache. Alte Freunde oder Fremde. Hochzeitsabend oder ruhiger Wochenabend. Die richtigen Trinksprüche kommen zu den richtigen Momenten an die Oberfläche, Eröffnung, Spielmitte, das letzte Glas.',
      he: 'כשאתה מקים משחק, המארח קובע את הטון. יום הולדת או אזכרה. חברים ותיקים או זרים. ערב חתונה או ערב חול שקט. ההרמות הנכונות עולות ברגעים הנכונים, פתיחה, אמצע משחק, הכוס האחרונה.',
      pt: 'Quando preparas um jogo, o anfitrião define o tom. Aniversário ou velório. Velhos amigos ou desconhecidos. Véspera de casamento ou serão tranquilo da semana. Os brindes certos aparecem nos momentos certos, abertura, meio do jogo, último copo.',
    },

    // Pillar 03: Voice
    'toasts.pillar3.num': {
      en: '03 · Voice', fr: '03 · Voix', ru: '03 · Голос',
      es: '03 · Voz', uk: '03 · Голос', it: '03 · Voce',
      de: '03 · Stimme', he: '03 · קול', pt: '03 · Voz',
    },
    'toasts.pillar3.title': {
      en: 'Spoken in your <em>language</em>.',
      fr: 'Dit dans ta <em>langue</em>.',
      ru: 'Произнесён на твоём <em>языке</em>.',
      es: 'Hablado en tu <em>idioma</em>.',
      uk: 'Промовлений твоєю <em>мовою</em>.',
      it: 'Pronunciato nella tua <em>lingua</em>.',
      de: 'Gesprochen in deiner <em>Sprache</em>.',
      he: 'נאמר ב<em>שפה</em> שלך.',
      pt: 'Falado na tua <em>língua</em>.',
    },
    'toasts.pillar3.desc': {
      en: 'Read aloud, in a voice you choose, in the language of the room. A male voice for an old grandfather\'s blessing, a softer voice for a wedding toast. Coming after the first launch.',
      fr: 'Lu à haute voix, avec une voix que tu choisis, dans la langue de la salle. Une voix masculine pour la bénédiction d\'un vieux grand-père, une voix plus douce pour un toast de mariage. Disponible après le premier lancement.',
      ru: 'Читается вслух голосом, который ты выбираешь, на языке комнаты. Мужской голос для благословения старого деда, мягче, для свадебного тоста. Появится после первого запуска.',
      es: 'Leído en voz alta, con la voz que elijas, en el idioma de la sala. Una voz masculina para la bendición de un viejo abuelo, una voz más suave para un brindis de boda. Llegará después del primer lanzamiento.',
      uk: 'Читається вголос, голосом, який ти обираєш, мовою кімнати. Чоловічий голос для благословення старого діда, м\'якший, для весільного тосту. З\'явиться після першого запуску.',
      it: 'Letto ad alta voce, con una voce che scegli tu, nella lingua della sala. Una voce maschile per la benedizione di un vecchio nonno, una voce più morbida per un brindisi di nozze. In arrivo dopo il primo lancio.',
      de: 'Vorgelesen, in einer Stimme deiner Wahl, in der Sprache des Raums. Eine männliche Stimme für den Segen eines alten Großvaters, eine sanftere für einen Hochzeitstrinkspruch. Kommt nach dem ersten Start.',
      he: 'מוקרא בקול, בקול שאתה בוחר, בשפת החדר. קול גברי לברכה של סבא זקן, קול רך יותר להרמת כוסית בחתונה. יגיע אחרי ההשקה הראשונה.',
      pt: 'Lido em voz alta, com uma voz que escolhes, na língua da sala. Uma voz masculina para a bênção de um velho avô, uma voz mais suave para um brinde de casamento. Chega depois do primeiro lançamento.',
    },

    // ========== TOASTS CULTURES SECTION ==========
    'toasts.cultures.label': {
      en: 'Cultures', fr: 'Cultures', ru: 'Культуры', es: 'Culturas',
      uk: 'Культури', it: 'Culture', de: 'Kulturen',
      he: 'תרבויות', pt: 'Culturas',
    },
    'toasts.cultures.title': {
      en: 'A toast from <em>somewhere</em>.',
      fr: 'Un toast venu de <em>quelque part</em>.',
      ru: 'Тост <em>откуда-то</em>.',
      es: 'Un brindis venido de <em>algún lugar</em>.',
      uk: 'Тост <em>звідкись</em>.',
      it: 'Un brindisi da <em>qualche parte</em>.',
      de: 'Ein Trinkspruch von <em>irgendwo</em>.',
      he: 'הרמת כוסית מ<em>איפשהו</em>.',
      pt: 'Um brinde vindo de <em>algures</em>.',
    },
    'toasts.cultures.intro': {
      en: 'Toasts belong to places. We are starting with the cultures we know best, and the ones our community keeps asking for. The list grows as native curators join.',
      fr: 'Les toasts appartiennent à des lieux. Nous commençons par les cultures que nous connaissons le mieux et par celles que notre communauté ne cesse de réclamer. La liste s\'allonge à mesure que des curateurs natifs nous rejoignent.',
      ru: 'Тосты принадлежат местам. Начинаем с культур, которые знаем лучше всего, и тех, о которых наше сообщество постоянно просит. Список растёт по мере присоединения местных кураторов.',
      es: 'Los brindis pertenecen a lugares. Empezamos por las culturas que mejor conocemos, y por aquellas que nuestra comunidad sigue pidiendo. La lista crece a medida que se unen curadores nativos.',
      uk: 'Тости належать до місць. Починаємо з культур, які знаємо найкраще, і тих, про які наша спільнота постійно просить. Список зростає в міру приєднання місцевих кураторів.',
      it: 'I brindisi appartengono a luoghi. Iniziamo dalle culture che conosciamo meglio e da quelle che la nostra comunità continua a chiedere. La lista cresce man mano che si uniscono curatori nativi.',
      de: 'Trinksprüche gehören zu Orten. Wir beginnen mit den Kulturen, die wir am besten kennen, und mit denen, nach denen unsere Gemeinschaft immer wieder fragt. Die Liste wächst, wenn einheimische Kuratoren dazukommen.',
      he: 'הרמות כוסית שייכות למקומות. אנחנו מתחילים עם התרבויות שאנחנו מכירים הכי טוב, ועם אלה שהקהילה שלנו ממשיכה לבקש. הרשימה גדלה ככל שאוצרים מקומיים מצטרפים.',
      pt: 'Os brindes pertencem a lugares. Começamos pelas culturas que conhecemos melhor, e por aquelas que a nossa comunidade continua a pedir. A lista cresce à medida que curadores nativos se juntam.',
    },
    'toasts.cultures.growing': {
      en: 'and growing', fr: 'et la liste s\'allonge', ru: 'и продолжается',
      es: 'y creciendo', uk: 'і зростає', it: 'e in crescita',
      de: 'und wächst', he: 'וממשיכה לגדול', pt: 'e a crescer',
    },
    'toasts.cultures.georgian_meta': {
      en: 'Tamada tradition', fr: 'Tradition du tamada', ru: 'Традиция тамады',
      es: 'Tradición del tamada', uk: 'Традиція тамади', it: 'Tradizione del tamada',
      de: 'Tamada-Tradition', he: 'מסורת התמדה', pt: 'Tradição do tamada',
    },
    'toasts.cultures.jewish_meta': {
      en: 'L\'chaim, badchan', fr: 'L\'chaim, badchan', ru: 'Лехаим, бадхен',
      es: 'L\'chaim, badján', uk: 'Лехаім, бадхен', it: 'L\'chaim, badchan',
      de: 'L\'chaim, Badchan', he: 'לחיים, בדחן', pt: 'L\'chaim, badchan',
    },
    'toasts.cultures.spanish_meta': {
      en: 'Brindis', fr: 'Brindis', ru: 'Брúндис', es: 'Brindis',
      uk: 'Бріндіс', it: 'Brindis', de: 'Brindis', he: 'ברינדיס', pt: 'Brindis',
    },
    'toasts.cultures.russian_meta': {
      en: 'Caucasian roots', fr: 'Racines caucasiennes', ru: 'Кавказские корни',
      es: 'Raíces caucásicas', uk: 'Кавказьке коріння', it: 'Radici caucasiche',
      de: 'Kaukasische Wurzeln', he: 'שורשים קווקזיים', pt: 'Raízes caucasianas',
    },
    'toasts.cultures.italian_meta': {
      en: 'Brindisi', fr: 'Brindisi', ru: 'Бриндизи',
      es: 'Brindisi', uk: 'Бріндізі', it: 'Brindisi',
      de: 'Brindisi', he: 'ברינדיזי', pt: 'Brindisi',
    },
    'toasts.cultures.french_meta': {
      en: 'Toast porté', fr: 'Toast porté', ru: 'Произнесённый тост',
      es: 'Toast porté', uk: 'Промовлений тост', it: 'Toast porté',
      de: 'Toast porté', he: 'טוסט פורטה', pt: 'Toast porté',
    },
    'toasts.cultures.greek_meta': {
      en: 'Symposium echoes', fr: 'Échos du symposium', ru: 'Эхо симпозиума',
      es: 'Ecos del simposio', uk: 'Відлуння симпозіуму', it: 'Echi del simposio',
      de: 'Echos des Symposions', he: 'הדים של הסימפוזיון', pt: 'Ecos do simpósio',
    },

    // ========== TOASTS MOMENTS ==========
    'toasts.moments.label': {
      en: 'Inside the game', fr: 'À l\'intérieur du jeu', ru: 'Внутри игры',
      es: 'Dentro del juego', uk: 'Усередині гри', it: 'Dentro il gioco',
      de: 'Im Spiel', he: 'בתוך המשחק', pt: 'Dentro do jogo',
    },
    'toasts.moments.title': {
      en: 'Five <em>moments</em> for a glass raised.',
      fr: 'Cinq <em>moments</em> pour lever son verre.',
      ru: 'Пять <em>моментов</em>, чтобы поднять бокал.',
      es: 'Cinco <em>momentos</em> para alzar la copa.',
      uk: 'П\'ять <em>моментів</em>, щоб підняти келих.',
      it: 'Cinque <em>momenti</em> per alzare il calice.',
      de: 'Fünf <em>Momente</em>, ein Glas zu heben.',
      he: 'חמישה <em>רגעים</em> להרמת כוס.',
      pt: 'Cinco <em>momentos</em> para erguer o copo.',
    },
    'toasts.moments.intro': {
      en: 'The toasts are not a separate app. They live inside the Tasting & Toasting game, surfacing at the moments where a real toastmaster would pause the table.',
      fr: 'Les toasts ne sont pas une application à part. Ils vivent dans le jeu Tasting & Toasting, et apparaissent aux moments où un vrai tamada arrêterait la tablée.',
      ru: 'Тосты, это не отдельное приложение. Они живут внутри игры Tasting & Toasting, всплывая в те моменты, когда настоящий тамада остановил бы стол.',
      es: 'Los brindis no son una aplicación aparte. Viven dentro del juego Tasting & Toasting, surgiendo en los momentos en los que un tamada real haría una pausa en la mesa.',
      uk: 'Тости, це не окремий застосунок. Вони живуть усередині гри Tasting & Toasting, спливаючи у ті моменти, коли справжній тамада зупинив би стіл.',
      it: 'I brindisi non sono un\'app separata. Vivono dentro il gioco Tasting & Toasting, emergendo nei momenti in cui un vero tamada fermerebbe la tavola.',
      de: 'Die Trinksprüche sind keine eigene App. Sie leben im Tasting & Toasting Spiel und tauchen in den Momenten auf, in denen ein echter Tamada den Tisch innehalten lassen würde.',
      he: 'הרמות הכוסית אינן אפליקציה נפרדת. הן חיות בתוך משחק Tasting & Toasting, ועולות ברגעים שבהם תמדה אמיתי היה משתיק את השולחן.',
      pt: 'Os brindes não são uma aplicação à parte. Vivem dentro do jogo Tasting & Toasting, surgindo nos momentos em que um verdadeiro tamada faria uma pausa à mesa.',
    },
    'toasts.moments.m1_title': {
      en: 'The opening', fr: 'L\'ouverture', ru: 'Открытие', es: 'La apertura',
      uk: 'Відкриття', it: 'L\'apertura', de: 'Die Eröffnung',
      he: 'הפתיחה', pt: 'A abertura',
    },
    'toasts.moments.m1_desc': {
      en: 'Before the first cork comes out. A line that sets the table, names the occasion, and tells the room why we are here.',
      fr: 'Avant que le premier bouchon ne saute. Une phrase qui plante le décor, nomme l\'occasion et dit à la salle pourquoi nous sommes là.',
      ru: 'Прежде чем выйдет первая пробка. Строка, которая накрывает стол, называет повод и говорит залу, зачем мы здесь.',
      es: 'Antes de que salga el primer corcho. Una frase que pone la mesa, nombra la ocasión y dice a la sala por qué estamos aquí.',
      uk: 'Перш ніж вилетить перший корок. Рядок, що накриває стіл, називає привід і каже залу, чому ми тут.',
      it: 'Prima che salti il primo tappo. Una frase che apparecchia il tavolo, nomina l\'occasione e dice alla sala perché siamo qui.',
      de: 'Bevor der erste Korken knallt. Ein Satz, der den Tisch deckt, den Anlass benennt und dem Raum sagt, warum wir hier sind.',
      he: 'לפני שהפקק הראשון יוצא. שורה שמסדרת את השולחן, נותנת שם לאירוע ואומרת לחדר למה אנחנו כאן.',
      pt: 'Antes de sair a primeira rolha. Uma frase que põe a mesa, dá nome à ocasião e diz à sala por que estamos aqui.',
    },
    'toasts.moments.m2_title': {
      en: 'For each bottle', fr: 'Pour chaque bouteille', ru: 'Для каждой бутылки',
      es: 'Para cada botella', uk: 'До кожної пляшки', it: 'Per ogni bottiglia',
      de: 'Zu jeder Flasche', he: 'לכל בקבוק', pt: 'Para cada garrafa',
    },
    'toasts.moments.m2_desc': {
      en: 'Optional, when the host wants it. A short toast for the wine itself, the place it came from, the people who made it.',
      fr: 'Optionnel, quand l\'hôte le souhaite. Un court toast pour le vin lui-même, le lieu d\'où il vient, les personnes qui l\'ont fait.',
      ru: 'По желанию ведущего. Короткий тост за само вино, за место, откуда оно, за людей, которые его сделали.',
      es: 'Opcional, cuando el anfitrión lo quiere. Un brindis corto por el vino mismo, el lugar de donde viene, la gente que lo hizo.',
      uk: 'За бажанням ведучого. Короткий тост за саме вино, за місце, звідки воно, за людей, що його зробили.',
      it: 'Opzionale, quando l\'ospite lo vuole. Un breve brindisi al vino stesso, al luogo da cui viene, alle persone che l\'hanno fatto.',
      de: 'Optional, wenn der Gastgeber es will. Ein kurzer Trinkspruch auf den Wein selbst, den Ort, woher er kommt, die Menschen, die ihn gemacht haben.',
      he: 'אופציונלי, כאשר המארח רוצה. הרמת כוסית קצרה ליין עצמו, למקום שממנו הגיע, לאנשים שעשו אותו.',
      pt: 'Opcional, quando o anfitrião quiser. Um brinde curto ao vinho em si, ao lugar de onde veio, às pessoas que o fizeram.',
    },
    'toasts.moments.m3_title': {
      en: 'Mid-game pause', fr: 'Pause à mi-partie', ru: 'Пауза в середине игры',
      es: 'Pausa a mitad de juego', uk: 'Пауза в середині гри',
      it: 'Pausa a metà partita', de: 'Spielmitte-Pause',
      he: 'הפסקת אמצע משחק', pt: 'Pausa a meio do jogo',
    },
    'toasts.moments.m3_desc': {
      en: 'After a few rounds, when the energy starts to drift. A toast that pulls everyone back to the table.',
      fr: 'Après quelques tours, quand l\'énergie commence à se relâcher. Un toast qui ramène tout le monde à la table.',
      ru: 'После нескольких раундов, когда энергия начинает уплывать. Тост, что возвращает всех к столу.',
      es: 'Tras unas rondas, cuando la energía empieza a dispersarse. Un brindis que vuelve a traer a todos a la mesa.',
      uk: 'Після кількох раундів, коли енергія починає розпливатись. Тост, що повертає всіх до столу.',
      it: 'Dopo qualche round, quando l\'energia comincia a calare. Un brindisi che riporta tutti al tavolo.',
      de: 'Nach ein paar Runden, wenn die Energie zu verfliegen beginnt. Ein Trinkspruch, der alle zurück an den Tisch holt.',
      he: 'אחרי כמה סבבים, כשהאנרגיה מתחילה להישחק. הרמת כוסית שמחזירה את כולם לשולחן.',
      pt: 'Depois de algumas rondas, quando a energia começa a dispersar. Um brinde que traz todos de volta à mesa.',
    },
    'toasts.moments.m4_title': {
      en: 'Before the final glass', fr: 'Avant le dernier verre', ru: 'Перед последним бокалом',
      es: 'Antes de la última copa', uk: 'Перед останнім келихом',
      it: 'Prima del calice finale', de: 'Vor dem letzten Glas',
      he: 'לפני הכוס האחרונה', pt: 'Antes do último copo',
    },
    'toasts.moments.m4_desc': {
      en: 'When the last bottle is about to be poured. A heavier toast. The one people will remember.',
      fr: 'Quand la dernière bouteille s\'apprête à être servie. Un toast plus lourd. Celui dont on se souviendra.',
      ru: 'Когда вот-вот разольют последнюю бутылку. Тост потяжелее. Тот, что запомнят.',
      es: 'Cuando se va a servir la última botella. Un brindis más pesado. Ese que la gente recordará.',
      uk: 'Коли ось-ось розіллють останню пляшку. Тост важчий. Той, що запам\'ятається.',
      it: 'Quando l\'ultima bottiglia sta per essere versata. Un brindisi più pesante. Quello che la gente ricorderà.',
      de: 'Wenn die letzte Flasche gleich eingeschenkt wird. Ein gewichtigerer Trinkspruch. Der, an den man sich erinnern wird.',
      he: 'כשהבקבוק האחרון עומד להימזג. הרמת כוסית כבדה יותר. זו שאנשים יזכרו.',
      pt: 'Quando a última garrafa está prestes a ser servida. Um brinde mais pesado. Aquele de que se vão lembrar.',
    },
    'toasts.moments.m5_title': {
      en: 'The closing', fr: 'La clôture', ru: 'Закрытие',
      es: 'El cierre', uk: 'Закриття', it: 'La chiusura',
      de: 'Der Abschluss', he: 'הסיום', pt: 'O encerramento',
    },
    'toasts.moments.m5_desc': {
      en: 'After the winner is revealed, after the laughter. A toast to the night itself.',
      fr: 'Après que le gagnant est révélé, après les rires. Un toast à la soirée elle-même.',
      ru: 'После того, как объявлен победитель, после смеха. Тост за саму ночь.',
      es: 'Tras revelar al ganador, tras la risa. Un brindis por la noche misma.',
      uk: 'Після оголошення переможця, після сміху. Тост за саму ніч.',
      it: 'Dopo che è stato rivelato il vincitore, dopo le risate. Un brindisi alla serata stessa.',
      de: 'Nachdem der Sieger feststeht, nach dem Lachen. Ein Trinkspruch auf den Abend selbst.',
      he: 'אחרי שהזוכה מתגלה, אחרי הצחוק. הרמת כוסית ללילה עצמו.',
      pt: 'Depois de revelado o vencedor, depois das gargalhadas. Um brinde à própria noite.',
    },
    'toasts.moments.aside_label': {
      en: 'A note for hosts', fr: 'Une note pour les hôtes', ru: 'Заметка для ведущих',
      es: 'Una nota para anfitriones', uk: 'Записка для ведучих',
      it: 'Una nota per gli ospiti', de: 'Eine Notiz für Gastgeber',
      he: 'הערה למארחים', pt: 'Uma nota para anfitriões',
    },
    'toasts.moments.aside_text': {
      en: 'You set the moments at the start of the game. Skip the ones you don\'t want. Add your own. The toasts are a guide, not a script.',
      fr: 'Tu choisis les moments au début de la partie. Saute ceux dont tu ne veux pas. Ajoute les tiens. Les toasts sont un guide, pas un script.',
      ru: 'Ты задаёшь моменты в начале игры. Пропусти те, что не нужны. Добавь свои. Тосты, это путеводитель, а не сценарий.',
      es: 'Tú estableces los momentos al inicio del juego. Salta los que no quieras. Añade los tuyos. Los brindis son una guía, no un guion.',
      uk: 'Ти задаєш моменти на початку гри. Пропусти ті, що не потрібні. Додай свої. Тости, це провідник, а не сценарій.',
      it: 'Imposti tu i momenti all\'inizio della partita. Salta quelli che non vuoi. Aggiungi i tuoi. I brindisi sono una guida, non un copione.',
      de: 'Du legst die Momente zu Beginn des Spiels fest. Überspringe die, die du nicht willst. Füge eigene hinzu. Die Trinksprüche sind ein Leitfaden, kein Skript.',
      he: 'אתה קובע את הרגעים בתחילת המשחק. דלג על אלה שאתה לא רוצה. הוסף משלך. ההרמות הן מדריך, לא תסריט.',
      pt: 'Defines os momentos no início do jogo. Salta os que não queres. Adiciona os teus. Os brindes são um guia, não um guião.',
    },
    'toasts.moments.aside_sig': {
      en: 'From the makers', fr: 'De la part des créateurs', ru: 'От создателей',
      es: 'De los creadores', uk: 'Від творців', it: 'Dai creatori',
      de: 'Von den Machern', he: 'מהיוצרים', pt: 'Dos criadores',
    },

    // ========== TOASTS VOICE TEASER ==========
    'toasts.voice.label': {
      en: 'Coming after first launch', fr: 'Disponible après le premier lancement',
      ru: 'Появится после первого запуска', es: 'Llega tras el primer lanzamiento',
      uk: 'З\'явиться після першого запуску', it: 'In arrivo dopo il primo lancio',
      de: 'Kommt nach dem ersten Start', he: 'יגיע אחרי ההשקה הראשונה',
      pt: 'A chegar depois do primeiro lançamento',
    },
    'toasts.voice.title': {
      en: 'Read <em>aloud</em>, in your language.',
      fr: 'Lu à <em>haute voix</em>, dans ta langue.',
      ru: 'Прочтён <em>вслух</em>, на твоём языке.',
      es: 'Leído en <em>voz alta</em>, en tu idioma.',
      uk: 'Прочитаний <em>вголос</em>, твоєю мовою.',
      it: 'Letto a <em>voce alta</em>, nella tua lingua.',
      de: 'Vorgelesen, <em>laut</em>, in deiner Sprache.',
      he: 'מוקרא ב<em>קול</em>, בשפה שלך.',
      pt: 'Lido em <em>voz alta</em>, na tua língua.',
    },
    'toasts.voice.desc': {
      en: 'Voiced toasts in the languages of the table, male or female voice, your pick. Recorded yourself if you want, or borrowed from our shelf. Coming in the second wave, after the first version of the game ships.',
      fr: 'Des toasts vocalisés dans les langues de la tablée, voix masculine ou féminine, à toi de choisir. Enregistrés par tes soins si tu veux, ou empruntés à notre étagère. Arriveront dans la deuxième vague, après la sortie de la première version du jeu.',
      ru: 'Озвученные тосты на языках стола, мужской или женский голос, твой выбор. Записанные тобой, если хочешь, или одолженные с нашей полки. Появятся во второй волне, после выхода первой версии игры.',
      es: 'Brindis con voz en los idiomas de la mesa, voz masculina o femenina, tú eliges. Grabados por ti si quieres, o tomados de nuestro estante. Llegan en la segunda ola, después del lanzamiento de la primera versión del juego.',
      uk: 'Озвучені тости мовами столу, чоловічий або жіночий голос, твій вибір. Записані тобою, якщо хочеш, або взяті з нашої полиці. З\'являться у другій хвилі, після виходу першої версії гри.',
      it: 'Brindisi recitati nelle lingue del tavolo, voce maschile o femminile, a tua scelta. Registrati da te se vuoi, o presi in prestito dal nostro scaffale. In arrivo nella seconda ondata, dopo l\'uscita della prima versione del gioco.',
      de: 'Vertonte Trinksprüche in den Sprachen des Tisches, männliche oder weibliche Stimme, deine Wahl. Selbst aufgenommen, wenn du willst, oder von unserem Regal geliehen. Kommen in der zweiten Welle, nach Erscheinen der ersten Spielversion.',
      he: 'הרמות כוסית מוקלטות בשפות השולחן, קול גברי או נשי, לבחירתך. מוקלטות על ידך אם תרצה, או מושאלות מהמדף שלנו. יגיעו בגל השני, אחרי שתצא הגרסה הראשונה של המשחק.',
      pt: 'Brindes com voz nas línguas da mesa, voz masculina ou feminina, à tua escolha. Gravados por ti se quiseres, ou emprestados da nossa estante. Chegam na segunda vaga, depois do lançamento da primeira versão do jogo.',
    },
    'toasts.voice.langs': {
      en: 'English, Spanish, French, Russian, Italian, German, Ukrainian, Hebrew, Portuguese, and others to follow',
      fr: 'Anglais, espagnol, français, russe, italien, allemand, ukrainien, hébreu, portugais, et d\'autres à venir',
      ru: 'Английский, испанский, французский, русский, итальянский, немецкий, украинский, иврит, португальский, и другие в дальнейшем',
      es: 'Inglés, español, francés, ruso, italiano, alemán, ucraniano, hebreo, portugués, y otros a continuación',
      uk: 'Англійська, іспанська, французька, російська, італійська, німецька, українська, іврит, португальська, та інші згодом',
      it: 'Inglese, spagnolo, francese, russo, italiano, tedesco, ucraino, ebraico, portoghese, e altre a seguire',
      de: 'Englisch, Spanisch, Französisch, Russisch, Italienisch, Deutsch, Ukrainisch, Hebräisch, Portugiesisch, und weitere folgen',
      he: 'אנגלית, ספרדית, צרפתית, רוסית, איטלקית, גרמנית, אוקראינית, עברית, פורטוגזית, ועוד יבואו',
      pt: 'Inglês, espanhol, francês, russo, italiano, alemão, ucraniano, hebraico, português, e outras a seguir',
    },
    'toasts.voice.tag': {
      en: 'A voice, soon', fr: 'Une voix, bientôt', ru: 'Голос, скоро',
      es: 'Una voz, pronto', uk: 'Голос, невдовзі', it: 'Una voce, presto',
      de: 'Eine Stimme, bald', he: 'קול, בקרוב', pt: 'Uma voz, em breve',
    },

    // ========== TOASTS CTA ==========
    'toasts.cta.label': {
      en: 'Be in touch', fr: 'Restons en contact', ru: 'Будем на связи',
      es: 'Mantente en contacto', uk: 'Будьмо на зв\'язку', it: 'Restiamo in contatto',
      de: 'Bleib in Kontakt', he: 'בקשר', pt: 'Em contacto',
    },
    'toasts.cta.title': {
      en: 'Enjoy your party with toasts<br>that will be <em>remembered</em>.',
      fr: 'Profite de ta soirée avec des toasts<br>dont on se <em>souviendra</em>.',
      ru: 'Наслаждайся вечером с тостами,<br>которые <em>запомнятся</em>.',
      es: 'Disfruta tu fiesta con brindis<br>que se <em>recordarán</em>.',
      uk: 'Насолоджуйся вечіркою з тостами,<br>що <em>запам\'ятаються</em>.',
      it: 'Goditi la serata con brindisi<br>che si <em>ricorderanno</em>.',
      de: 'Genieß deinen Abend mit Trinksprüchen,<br>an die man sich <em>erinnert</em>.',
      he: 'תהנה מהמסיבה שלך עם הרמות כוסית<br>ש<em>ייזכרו</em>.',
      pt: 'Aproveita a tua festa com brindes<br>que serão <em>lembrados</em>.',
    },
    'toasts.cta.body': {
      en: 'We are still building. If you want to know when it ships, if you want to curate toasts in your culture, if you simply want to argue that we got something wrong, write to us. Real people, one inbox.',
      fr: 'Nous construisons encore. Si tu veux savoir quand ça sortira, si tu veux sélectionner des toasts dans ta culture, ou simplement nous dire que nous nous sommes trompés, écris-nous. De vraies personnes, une seule boîte de réception.',
      ru: 'Мы всё ещё строим. Если хочешь узнать, когда выйдет, если хочешь курировать тосты в своей культуре, или просто поспорить, что мы где-то ошиблись, напиши нам. Живые люди, один ящик.',
      es: 'Todavía estamos construyendo. Si quieres saber cuándo sale, si quieres curar brindis en tu cultura, o simplemente decirnos que nos equivocamos en algo, escríbenos. Personas reales, un solo buzón.',
      uk: 'Ми ще будуємо. Якщо хочеш знати, коли вийде, якщо хочеш курувати тости у своїй культурі, або просто посперечатись, що ми десь помилились, напиши нам. Живі люди, одна скринька.',
      it: 'Stiamo ancora costruendo. Se vuoi sapere quando uscirà, se vuoi curare brindisi nella tua cultura, o semplicemente dirci che ci siamo sbagliati su qualcosa, scrivici. Persone vere, una sola casella.',
      de: 'Wir bauen noch. Wenn du wissen willst, wann es kommt, wenn du Trinksprüche in deiner Kultur kuratieren willst, oder einfach sagen willst, dass wir etwas falsch gemacht haben, schreib uns. Echte Menschen, ein Postfach.',
      he: 'אנחנו עדיין בונים. אם אתה רוצה לדעת מתי זה יוצא, אם אתה רוצה לאצור הרמות כוסית בתרבות שלך, או פשוט להגיד לנו שטעינו במשהו, כתוב לנו. אנשים אמיתיים, תיבת דואר אחת.',
      pt: 'Ainda estamos a construir. Se queres saber quando sai, se queres curar brindes na tua cultura, ou simplesmente dizer-nos que nos enganámos nalguma coisa, escreve-nos. Pessoas reais, uma só caixa de entrada.',
    },
    'toasts.cta.btn_back': {
      en: 'Back to the site', fr: 'Retour au site', ru: 'На главную',
      es: 'Volver al sitio', uk: 'На головну', it: 'Torna al sito',
      de: 'Zurück zur Startseite', he: 'חזרה לאתר', pt: 'Voltar ao site',
    },

  });
})();


// === TOASTS PAGE: pillars + moments + cta (added v0.4.0 stage 2) ===
(function() {
  if (!window.TT_I18N) return;
  Object.assign(window.TT_I18N.s, {

    // 3 PILLARS
    'toasts.pillar1.num': {
      en: '01 · Library', fr: '01 · Bibliothèque', ru: '01 · Библиотека', es: '01 · Biblioteca',
      uk: '01 · Бібліотека', it: '01 · Biblioteca', de: '01 · Bibliothek',
      he: '01 · ספרייה', pt: '01 · Biblioteca',
    },
    'toasts.pillar1.title': {
      en: 'Curated by <em>people</em> who know the table.',
      fr: 'Curatée par <em>des gens</em> qui connaissent la table.',
      ru: 'Собрана <em>людьми</em>, знающими стол.',
      es: 'Seleccionada por <em>personas</em> que conocen la mesa.',
      uk: 'Зібрана <em>людьми</em>, які знають стіл.',
      it: 'Curata da <em>persone</em> che conoscono il tavolo.',
      de: 'Kuratiert von <em>Menschen</em>, die den Tisch kennen.',
      he: 'אוצרים <em>אנשים</em> שמכירים את השולחן.',
      pt: 'Curada por <em>pessoas</em> que conhecem a mesa.',
    },
    'toasts.pillar1.desc': {
      en: 'Every toast in the starting library is reviewed by native speakers and writers from the cultures they belong to. Georgian toasts read by Georgians, Jewish toasts by Jews, Spanish by Spaniards. The library grows as the community grows.',
      fr: 'Chaque toast de la bibliothèque de départ est relu par des locuteurs natifs et des écrivains issus des cultures auxquelles il appartient. Les toasts géorgiens lus par des Géorgiens, les toasts juifs par des Juifs, les espagnols par des Espagnols. La bibliothèque grandit avec la communauté.',
      ru: 'Каждый тост в стартовой библиотеке читают носители языка и авторы из тех культур, которым он принадлежит. Грузинские тосты читают грузины, еврейские, евреи, испанские, испанцы. Библиотека растёт вместе с сообществом.',
      es: 'Cada brindis de la biblioteca inicial es revisado por hablantes nativos y escritores de las culturas a las que pertenece. Los brindis georgianos los leen georgianos, los judíos los leen judíos, los españoles los leen españoles. La biblioteca crece a medida que crece la comunidad.',
      uk: 'Кожен тост у початковій бібліотеці перечитують носії мови та автори з тих культур, до яких він належить. Грузинські тости читають грузини, єврейські, євреї, іспанські, іспанці. Бібліотека росте разом зі спільнотою.',
      it: 'Ogni brindisi nella biblioteca iniziale è rivisto da parlanti nativi e scrittori delle culture a cui appartiene. I brindisi georgiani letti dai georgiani, quelli ebraici dagli ebrei, quelli spagnoli dagli spagnoli. La biblioteca cresce con la comunità.',
      de: 'Jeder Trinkspruch in der Anfangsbibliothek wird von Muttersprachlern und Autoren aus den jeweiligen Kulturen gelesen. Georgische Sprüche von Georgiern, jüdische von Juden, spanische von Spaniern. Die Bibliothek wächst mit der Gemeinschaft.',
      he: 'כל הרמת כוסית בספרייה הראשונית נסקרת על ידי דוברי שפת אם וכותבים מהתרבויות שאליהן היא שייכת. הרמות כוסית גרוזיניות נקראות בידי גרוזינים, יהודיות בידי יהודים, ספרדיות בידי ספרדים. הספרייה גדלה ככל שהקהילה גדלה.',
      pt: 'Cada brinde na biblioteca inicial é revisto por falantes nativos e escritores das culturas a que pertence. Brindes georgianos lidos por georgianos, judeus por judeus, espanhóis por espanhóis. A biblioteca cresce à medida que a comunidade cresce.',
    },

    'toasts.pillar2.num': {
      en: '02 · Moment', fr: '02 · Moment', ru: '02 · Момент', es: '02 · Momento',
      uk: '02 · Момент', it: '02 · Momento', de: '02 · Moment',
      he: '02 · רגע', pt: '02 · Momento',
    },
    'toasts.pillar2.title': {
      en: 'Toasts that <em>fit</em> the room.',
      fr: 'Des toasts qui <em>conviennent</em> à la salle.',
      ru: 'Тосты, которые <em>подходят</em> залу.',
      es: 'Brindis que <em>encajan</em> con la sala.',
      uk: 'Тости, що <em>пасують</em> залу.',
      it: 'Brindisi che <em>si adattano</em> alla sala.',
      de: 'Trinksprüche, die zum <em>Raum</em> passen.',
      he: 'הרמות כוסית ש<em>מתאימות</em> לחדר.',
      pt: 'Brindes que <em>encaixam</em> na sala.',
    },
    'toasts.pillar2.desc': {
      en: 'When you set up a game, the host sets the tone. Birthday or wake. Old friends or strangers. Wedding eve or quiet weeknight. The right toasts are surfaced for the right moments, opening, mid-game, the final glass.',
      fr: 'Lors de la configuration d\'une partie, l\'hôte donne le ton. Anniversaire ou veillée. Vieux amis ou inconnus. Veille de mariage ou tranquille soir de semaine. Les bons toasts apparaissent aux bons moments, ouverture, milieu de partie, verre final.',
      ru: 'Когда ты настраиваешь игру, хозяин задаёт тон. День рождения или поминки. Старые друзья или незнакомцы. Канун свадьбы или тихий будний вечер. Правильные тосты всплывают в правильные моменты, начало, середина, последний бокал.',
      es: 'Cuando preparas una partida, el anfitrión marca el tono. Cumpleaños o velatorio. Viejos amigos o desconocidos. Víspera de boda o tranquila noche entre semana. Los brindis adecuados aparecen en los momentos adecuados, apertura, mitad de partida, copa final.',
      uk: 'Коли ти налаштовуєш гру, господар задає тон. День народження або поминки. Старі друзі чи незнайомці. Передвесільна ніч чи тихий буденний вечір. Правильні тости спливають у правильні моменти, відкриття, середина, останній келих.',
      it: 'Quando imposti una partita, il padrone di casa dà il tono. Compleanno o veglia. Vecchi amici o sconosciuti. Vigilia di nozze o tranquilla sera infrasettimanale. I brindisi giusti emergono nei momenti giusti, apertura, metà partita, bicchiere finale.',
      de: 'Wenn du ein Spiel aufsetzt, gibt der Gastgeber den Ton an. Geburtstag oder Trauerfeier. Alte Freunde oder Fremde. Hochzeitsvorabend oder ruhiger Wochentag. Die richtigen Trinksprüche erscheinen in den richtigen Momenten, Eröffnung, Mitte des Spiels, letztes Glas.',
      he: 'כשאתה מקים משחק, המארח קובע את הטון. יום הולדת או אבל. חברים ותיקים או זרים. ערב חתונה או ערב חול שקט. ההרמות הנכונות עולות ברגעים הנכונים, פתיחה, אמצע, הכוס האחרונה.',
      pt: 'Quando preparas um jogo, o anfitrião marca o tom. Aniversário ou velório. Velhos amigos ou desconhecidos. Véspera de casamento ou tranquilo serão de semana. Os brindes certos surgem nos momentos certos, abertura, meio da partida, copo final.',
    },

    'toasts.pillar3.num': {
      en: '03 · Voice', fr: '03 · Voix', ru: '03 · Голос', es: '03 · Voz',
      uk: '03 · Голос', it: '03 · Voce', de: '03 · Stimme',
      he: '03 · קול', pt: '03 · Voz',
    },
    'toasts.pillar3.title': {
      en: 'Spoken in your <em>language</em>.',
      fr: 'Prononcé dans <em>ta langue</em>.',
      ru: 'Произнесён на <em>твоём языке</em>.',
      es: 'Pronunciado en <em>tu idioma</em>.',
      uk: 'Вимовлений <em>твоєю мовою</em>.',
      it: 'Pronunciato nella <em>tua lingua</em>.',
      de: 'Gesprochen in <em>deiner Sprache</em>.',
      he: 'נאמר ב<em>שפה שלך</em>.',
      pt: 'Dito na <em>tua língua</em>.',
    },
    'toasts.pillar3.desc': {
      en: 'Read aloud, in a voice you choose, in the language of the room. A male voice for an old grandfather\'s blessing, a softer voice for a wedding toast. Coming after the first launch.',
      fr: 'Lu à voix haute, dans une voix de ton choix, dans la langue de la salle. Une voix masculine pour la bénédiction d\'un vieux grand-père, une voix plus douce pour un toast de mariage. Bientôt, après le premier lancement.',
      ru: 'Прочитан вслух, голосом твоего выбора, на языке зала. Мужской голос для благословения старого деда, голос помягче для свадебного тоста. Скоро, после первого запуска.',
      es: 'Leído en voz alta, con una voz de tu elección, en el idioma de la sala. Una voz masculina para la bendición de un viejo abuelo, una voz más suave para un brindis de boda. Pronto, tras el primer lanzamiento.',
      uk: 'Прочитаний вголос, голосом твого вибору, мовою зали. Чоловічий голос для благословення старого діда, м\'якший для весільного тосту. Скоро, після першого запуску.',
      it: 'Letto ad alta voce, con una voce a tua scelta, nella lingua della sala. Una voce maschile per la benedizione di un vecchio nonno, una voce più morbida per un brindisi di matrimonio. In arrivo, dopo il primo lancio.',
      de: 'Vorgelesen, mit einer Stimme deiner Wahl, in der Sprache des Raums. Eine männliche Stimme für den Segen eines alten Großvaters, eine sanftere für einen Hochzeitsspruch. Bald, nach dem ersten Start.',
      he: 'נקרא בקול, בקול שתבחר, בשפת החדר. קול גברי לברכת סבא זקן, קול רך יותר להרמת כוסית בחתונה. בקרוב, אחרי ההשקה הראשונה.',
      pt: 'Lido em voz alta, numa voz à tua escolha, na língua da sala. Uma voz masculina para a bênção de um velho avô, uma voz mais suave para um brinde de casamento. Em breve, após o primeiro lançamento.',
    },

    // 5 MOMENTS
    'toasts.moment1.title': {
      en: 'The opening', fr: 'L\'ouverture', ru: 'Открытие', es: 'La apertura',
      uk: 'Відкриття', it: 'L\'apertura', de: 'Die Eröffnung',
      he: 'הפתיחה', pt: 'A abertura',
    },
    'toasts.moment1.desc': {
      en: 'Before the first cork comes out. A line that sets the table, names the occasion, and tells the room why we are here.',
      fr: 'Avant que le premier bouchon ne saute. Une phrase qui pose la table, nomme l\'occasion, et dit à la salle pourquoi nous sommes là.',
      ru: 'До того как откроют первую бутылку. Строка, которая настраивает стол, называет повод и говорит залу, зачем мы здесь.',
      es: 'Antes de que salga el primer corcho. Una línea que prepara la mesa, nombra la ocasión y le dice a la sala por qué estamos aquí.',
      uk: 'До того, як вилетить перший корок. Рядок, що налаштовує стіл, називає привід і каже залу, чому ми тут.',
      it: 'Prima che esca il primo tappo. Una frase che prepara il tavolo, nomina l\'occasione e dice alla sala perché siamo qui.',
      de: 'Bevor der erste Korken knallt. Ein Satz, der den Tisch ordnet, den Anlass benennt und dem Raum sagt, warum wir hier sind.',
      he: 'לפני שהפקק הראשון יוצא. שורה שמסדרת את השולחן, נותנת שם לאירוע ואומרת לחדר למה אנחנו כאן.',
      pt: 'Antes de a primeira rolha sair. Uma linha que prepara a mesa, nomeia a ocasião e diz à sala porque estamos aqui.',
    },
    'toasts.moment2.title': {
      en: 'For each bottle', fr: 'Pour chaque bouteille', ru: 'К каждой бутылке',
      es: 'Para cada botella', uk: 'До кожної пляшки', it: 'Per ogni bottiglia',
      de: 'Zu jeder Flasche', he: 'לכל בקבוק', pt: 'Para cada garrafa',
    },
    'toasts.moment2.desc': {
      en: 'Optional, when the host wants it. A short toast for the wine itself, the place it came from, the people who made it.',
      fr: 'Optionnel, quand l\'hôte le souhaite. Un court toast pour le vin lui-même, l\'endroit d\'où il vient, les gens qui l\'ont fait.',
      ru: 'По желанию, когда хозяин захочет. Короткий тост за само вино, за место откуда оно, за людей которые его сделали.',
      es: 'Opcional, cuando el anfitrión lo desea. Un brindis breve por el vino mismo, el lugar de donde viene, la gente que lo hizo.',
      uk: 'За бажанням, коли господар захоче. Короткий тост за саме вино, місце звідки воно, людей що його зробили.',
      it: 'Opzionale, quando il padrone di casa lo vuole. Un breve brindisi per il vino stesso, il luogo da cui proviene, le persone che lo hanno fatto.',
      de: 'Optional, wenn der Gastgeber es will. Ein kurzer Trinkspruch für den Wein selbst, den Ort, von dem er kommt, die Menschen, die ihn gemacht haben.',
      he: 'אופציונלי, כשהמארח רוצה. הרמת כוסית קצרה ליין עצמו, למקום ממנו הגיע, לאנשים שעשו אותו.',
      pt: 'Opcional, quando o anfitrião quer. Um brinde curto ao próprio vinho, ao lugar de onde vem, às pessoas que o fizeram.',
    },
    'toasts.moment3.title': {
      en: 'Mid-game pause', fr: 'Pause à mi-partie', ru: 'Пауза в середине игры',
      es: 'Pausa a mitad de partida', uk: 'Пауза посередині гри', it: 'Pausa a metà partita',
      de: 'Pause zur Spielmitte', he: 'הפסקת אמצע משחק', pt: 'Pausa a meio do jogo',
    },
    'toasts.moment3.desc': {
      en: 'After a few rounds, when the energy starts to drift. A toast that pulls everyone back to the table.',
      fr: 'Après quelques tours, quand l\'énergie commence à dériver. Un toast qui ramène tout le monde à la table.',
      ru: 'После нескольких раундов, когда энергия начинает рассеиваться. Тост, возвращающий всех к столу.',
      es: 'Después de algunas rondas, cuando la energía empieza a dispersarse. Un brindis que devuelve a todos a la mesa.',
      uk: 'Після кількох раундів, коли енергія починає розсіюватись. Тост, що повертає всіх до столу.',
      it: 'Dopo alcuni turni, quando l\'energia inizia a disperdersi. Un brindisi che riporta tutti al tavolo.',
      de: 'Nach ein paar Runden, wenn die Energie nachlässt. Ein Trinkspruch, der alle wieder an den Tisch holt.',
      he: 'אחרי כמה סבבים, כשהאנרגיה מתחילה להידלדל. הרמת כוסית שמחזירה את כולם לשולחן.',
      pt: 'Após algumas rondas, quando a energia começa a dispersar. Um brinde que traz toda a gente de volta à mesa.',
    },
    'toasts.moment4.title': {
      en: 'Before the final glass', fr: 'Avant le dernier verre', ru: 'Перед последним бокалом',
      es: 'Antes de la copa final', uk: 'Перед останнім келихом', it: 'Prima del bicchiere finale',
      de: 'Vor dem letzten Glas', he: 'לפני הכוס האחרונה', pt: 'Antes do copo final',
    },
    'toasts.moment4.desc': {
      en: 'When the last bottle is about to be poured. A heavier toast. The one people will remember.',
      fr: 'Quand la dernière bouteille est sur le point d\'être versée. Un toast plus lourd. Celui dont on se souviendra.',
      ru: 'Когда вот-вот откроют последнюю бутылку. Тост посерьёзнее. Тот, который запомнят.',
      es: 'Cuando está a punto de servirse la última botella. Un brindis más profundo. El que la gente recordará.',
      uk: 'Коли ось-ось наллють останню пляшку. Серйозніший тост. Той, що запам\'ятається.',
      it: 'Quando l\'ultima bottiglia sta per essere versata. Un brindisi più profondo. Quello che la gente ricorderà.',
      de: 'Wenn die letzte Flasche eingegossen wird. Ein gewichtigerer Trinkspruch. Der, an den man sich erinnert.',
      he: 'כשהבקבוק האחרון עומד להישפך. הרמת כוסית כבדה יותר. זו שיזכרו.',
      pt: 'Quando a última garrafa está prestes a ser servida. Um brinde mais pesado. O que as pessoas vão lembrar.',
    },
    'toasts.moment5.title': {
      en: 'The closing', fr: 'La clôture', ru: 'Закрытие',
      es: 'El cierre', uk: 'Завершення', it: 'La chiusura',
      de: 'Der Abschluss', he: 'הסיום', pt: 'O encerramento',
    },
    'toasts.moment5.desc': {
      en: 'After the winner is revealed, after the laughter. A toast to the night itself.',
      fr: 'Après que le gagnant est révélé, après les rires. Un toast à la nuit elle-même.',
      ru: 'После того как объявят победителя, после смеха. Тост за саму ночь.',
      es: 'Después de revelar al ganador, después de las risas. Un brindis por la noche misma.',
      uk: 'Після того як оголосять переможця, після сміху. Тост за саму ніч.',
      it: 'Dopo che il vincitore viene rivelato, dopo le risate. Un brindisi alla notte stessa.',
      de: 'Nachdem der Sieger bekannt gegeben wurde, nach dem Lachen. Ein Trinkspruch auf die Nacht selbst.',
      he: 'אחרי שחושפים את המנצח, אחרי הצחוקים. הרמת כוסית לעצם הלילה.',
      pt: 'Depois de revelado o vencedor, depois das risadas. Um brinde à própria noite.',
    },

    'toasts.cultures.note_label': {
      en: 'Tamada tradition', fr: 'Tradition tamada', ru: 'Традиция тамады',
      es: 'Tradición tamada', uk: 'Традиція тамади', it: 'Tradizione tamada',
      de: 'Tamada-Tradition', he: 'מסורת תמדה', pt: 'Tradição tamada',
    },

  });
})();


// === SOMMELIERS PAGE strings ===
(function() {
  if (!window.TT_I18N) return;
  Object.assign(window.TT_I18N.s, {

    'sommeliers.hero.eyebrow_label': {
      en: 'Sommeliers', fr: 'Sommeliers', ru: 'Сомелье', es: 'Sumilleres',
      uk: 'Сомельє', it: 'Sommelier', de: 'Sommeliers',
      he: 'סומלייה', pt: 'Sommeliers',
    },
    'sommeliers.hero.eyebrow_side': {
      en: 'The professionals, and the app',
      fr: 'Les professionnels, et l\'application',
      ru: 'Профессионалы и приложение',
      es: 'Los profesionales, y la aplicación',
      uk: 'Професіонали та застосунок',
      it: 'I professionisti, e l\'app',
      de: 'Die Profis, und die App',
      he: 'אנשי המקצוע, והאפליקציה',
      pt: 'Os profissionais, e a aplicação',
    },
    'sommeliers.hero.title': {
      en: 'Real <em>sommeliers</em><br>in the room.<br>A digital one in the app.',
      fr: 'De vrais <em>sommeliers</em><br>dans la salle.<br>Un numérique dans l\'application.',
      ru: 'Настоящие <em>сомелье</em><br>в зале.<br>Цифровой в приложении.',
      es: 'Sumilleres <em>reales</em><br>en la sala.<br>Uno digital en la aplicación.',
      uk: 'Справжні <em>сомельє</em><br>в залі.<br>Цифровий у застосунку.',
      it: '<em>Sommelier</em> veri<br>nella sala.<br>Uno digitale nell\'app.',
      de: 'Echte <em>Sommeliers</em><br>im Raum.<br>Ein digitaler in der App.',
      he: '<em>סומלייה</em> אמיתיים<br>בחדר.<br>אחד דיגיטלי באפליקציה.',
      pt: '<em>Sommeliers</em> reais<br>na sala.<br>Um digital na aplicação.',
    },
    'sommeliers.hero.sub': {
      en: 'The sommelier is the heart of any serious wine table. We are building Tasting & Toasting around them, not around them. We host events with professional sommeliers in Spain. And inside the app, a <span class="accent">digital sommelier</span> sits next to whoever is hosting the game, or next to every player when no one is.',
      fr: 'Le sommelier est le cœur de toute table de vin sérieuse. Nous construisons Tasting & Toasting autour d\'eux, pas à côté d\'eux. Nous organisons des événements avec des sommeliers professionnels en Espagne. Et dans l\'application, un <span class="accent">sommelier numérique</span> se tient à côté de la personne qui anime la partie, ou à côté de chaque joueur quand personne ne le fait.',
      ru: 'Сомелье, сердце любого серьёзного винного стола. Мы строим Tasting & Toasting вокруг них, не помимо них. Мы проводим события с профессиональными сомелье в Испании. А в приложении <span class="accent">цифровой сомелье</span> сидит рядом с тем, кто ведёт игру, или рядом с каждым игроком, когда никто не ведёт.',
      es: 'El sumiller es el corazón de cualquier mesa de vino seria. Construimos Tasting & Toasting alrededor de ellos, no a su lado. Organizamos eventos con sumilleres profesionales en España. Y dentro de la aplicación, un <span class="accent">sumiller digital</span> se sienta junto a quien dirige la partida, o junto a cada jugador cuando nadie lo hace.',
      uk: 'Сомельє, серце будь-якого серйозного винного столу. Ми будуємо Tasting & Toasting навколо них, а не повз них. Ми проводимо події з професійними сомельє в Іспанії. А у застосунку <span class="accent">цифровий сомельє</span> сидить поруч із тим, хто веде гру, або поруч з кожним гравцем, коли ніхто не веде.',
      it: 'Il sommelier è il cuore di qualsiasi tavolo del vino serio. Stiamo costruendo Tasting & Toasting attorno a loro, non accanto a loro. Organizziamo eventi con sommelier professionisti in Spagna. E nell\'app, un <span class="accent">sommelier digitale</span> si siede accanto a chi conduce la partita, o accanto a ogni giocatore quando nessuno lo fa.',
      de: 'Der Sommelier ist das Herz jedes ernsthaften Weintisches. Wir bauen Tasting & Toasting um sie herum auf, nicht neben ihnen. Wir veranstalten Events mit professionellen Sommeliers in Spanien. Und in der App sitzt ein <span class="accent">digitaler Sommelier</span> neben demjenigen, der das Spiel leitet, oder neben jedem Spieler, wenn niemand leitet.',
      he: 'הסומלייה הוא הלב של כל שולחן יין רציני. אנחנו בונים את Tasting & Toasting סביבם, לא לידם. אנחנו מארחים אירועים עם סומלייה מקצועיים בספרד. ובתוך האפליקציה, <span class="accent">סומלייה דיגיטלי</span> יושב ליד מי שמנחה את המשחק, או ליד כל שחקן כשאף אחד לא מנחה.',
      pt: 'O sommelier é o coração de qualquer mesa de vinho séria. Estamos a construir Tasting & Toasting à sua volta, não ao lado deles. Organizamos eventos com sommeliers profissionais em Espanha. E dentro da aplicação, um <span class="accent">sommelier digital</span> senta-se ao lado de quem conduz a partida, ou ao lado de cada jogador quando ninguém conduz.',
    },
    'sommeliers.hero.btn_write': {
      en: 'For sommeliers, write to us', fr: 'Sommeliers, écrivez-nous', ru: 'Сомелье, напишите нам',
      es: 'Sumilleres, escríbenos', uk: 'Сомельє, напишіть нам', it: 'Sommelier, scriveteci',
      de: 'Sommeliers, schreibt uns', he: 'סומלייה, כתבו לנו', pt: 'Sommeliers, escreve-nos',
    },
    'sommeliers.hero.btn_how': {
      en: 'How it works in the app', fr: 'Comment ça marche dans l\'app', ru: 'Как работает в приложении',
      es: 'Cómo funciona en la app', uk: 'Як працює у застосунку', it: 'Come funziona nell\'app',
      de: 'Wie es in der App funktioniert', he: 'איך זה עובד באפליקציה', pt: 'Como funciona na app',
    },

    // TWO SIDES
    'sommeliers.two.label': {
      en: 'The two sides', fr: 'Les deux versants', ru: 'Две стороны',
      es: 'Las dos caras', uk: 'Дві сторони', it: 'I due lati',
      de: 'Die zwei Seiten', he: 'שני הצדדים', pt: 'Os dois lados',
    },
    'sommeliers.two.title': {
      en: 'A profession, and a <em>tool</em> beside it.',
      fr: 'Un métier, et un <em>outil</em> à ses côtés.',
      ru: 'Профессия и <em>инструмент</em> рядом.',
      es: 'Una profesión, y una <em>herramienta</em> a su lado.',
      uk: 'Професія і <em>інструмент</em> поруч.',
      it: 'Una professione, e uno <em>strumento</em> al suo fianco.',
      de: 'Ein Beruf, und ein <em>Werkzeug</em> daneben.',
      he: 'מקצוע, ו<em>כלי</em> לצדו.',
      pt: 'Uma profissão, e uma <em>ferramenta</em> ao seu lado.',
    },
    'sommeliers.two.intro': {
      en: 'A real sommelier reads the room, the bottle, and the people. Software does not replace that, ever. But software can carry the memory, the timing, the small reminders, and let the sommelier focus on what only a sommelier can do.',
      fr: 'Un vrai sommelier lit la salle, la bouteille et les gens. Le logiciel ne remplace pas cela, jamais. Mais le logiciel peut porter la mémoire, le timing, les petits rappels, et laisser le sommelier se concentrer sur ce que seul un sommelier peut faire.',
      ru: 'Настоящий сомелье читает зал, бутылку и людей. Софт это никогда не заменит. Но софт может нести память, тайминг, мелкие напоминания, и позволить сомелье сосредоточиться на том, что может только сомелье.',
      es: 'Un sumiller real lee la sala, la botella y a las personas. El software no reemplaza eso, nunca. Pero el software puede cargar con la memoria, los tiempos, los pequeños recordatorios, y dejar al sumiller concentrarse en lo que solo un sumiller puede hacer.',
      uk: 'Справжній сомельє читає зал, пляшку та людей. Софт це ніколи не замінить. Але софт може нести пам\'ять, тайминг, дрібні нагадування, і дозволити сомельє зосередитись на тому, що може лише сомельє.',
      it: 'Un vero sommelier legge la sala, la bottiglia e le persone. Il software non lo sostituisce, mai. Ma il software può portare la memoria, i tempi, i piccoli promemoria, e lasciare che il sommelier si concentri su ciò che solo un sommelier può fare.',
      de: 'Ein echter Sommelier liest den Raum, die Flasche und die Menschen. Software ersetzt das nicht, niemals. Aber Software kann das Gedächtnis tragen, das Timing, die kleinen Erinnerungen, und den Sommelier sich auf das konzentrieren lassen, was nur ein Sommelier kann.',
      he: 'סומלייה אמיתי קורא את החדר, את הבקבוק ואת האנשים. תוכנה לא מחליפה את זה, לעולם. אבל תוכנה יכולה לשאת את הזיכרון, את התזמון, את התזכורות הקטנות, ולתת לסומלייה להתמקד במה שרק סומלייה יכול לעשות.',
      pt: 'Um sommelier real lê a sala, a garrafa e as pessoas. O software não substitui isso, nunca. Mas o software pode carregar a memória, o timing, os pequenos lembretes, e deixar o sommelier concentrar-se no que só um sommelier consegue fazer.',
    },

    // ASSOCIATIONS
    'sommeliers.assoc.label': {
      en: 'The world of Spanish sommellerie',
      fr: 'Le monde de la sommellerie espagnole',
      ru: 'Мир испанской сомельерии',
      es: 'El mundo de la sumillería española',
      uk: 'Світ іспанської сомельєрії',
      it: 'Il mondo della sommellerie spagnola',
      de: 'Die Welt der spanischen Sommellerie',
      he: 'עולם הסומלייה הספרדי',
      pt: 'O mundo da sommellerie espanhola',
    },
    'sommeliers.assoc.title': {
      en: 'The associations we <em>look up to</em>.',
      fr: 'Les associations que nous <em>admirons</em>.',
      ru: 'Ассоциации, на которые мы <em>смотрим снизу вверх</em>.',
      es: 'Las asociaciones que <em>admiramos</em>.',
      uk: 'Асоціації, на які ми <em>дивимось знизу вгору</em>.',
      it: 'Le associazioni che <em>guardiamo con rispetto</em>.',
      de: 'Die Verbände, zu denen wir <em>aufschauen</em>.',
      he: 'האיגודים שאנחנו <em>מעריכים</em>.',
      pt: 'As associações que <em>admiramos</em>.',
    },
    'sommeliers.assoc.intro': {
      en: 'Spain has a deep, well-organized sommelier profession with national, regional, and international structures. We are not part of these institutions. We respect them. We hope to build alongside their members. If you are part of any of these and want to talk to us, write.',
      fr: 'L\'Espagne a une profession de sommelier profonde et bien organisée avec des structures nationales, régionales et internationales. Nous ne faisons pas partie de ces institutions. Nous les respectons. Nous espérons construire aux côtés de leurs membres. Si vous faites partie de l\'une d\'elles et souhaitez nous parler, écrivez.',
      ru: 'У Испании глубокая, хорошо организованная профессия сомелье с национальными, региональными и международными структурами. Мы не часть этих институтов. Мы уважаем их. Мы надеемся строить рядом с их членами. Если ты часть какой-то из них и хочешь говорить с нами, напиши.',
      es: 'España tiene una profesión de sumiller profunda y bien organizada con estructuras nacionales, regionales e internacionales. No formamos parte de estas instituciones. Las respetamos. Esperamos construir junto a sus miembros. Si formas parte de alguna de ellas y quieres hablar con nosotros, escribe.',
      uk: 'В Іспанії глибока, добре організована професія сомельє з національними, регіональними та міжнародними структурами. Ми не частина цих інституцій. Ми поважаємо їх. Сподіваємось будувати поруч з їхніми членами. Якщо ти частина будь-якої з них і хочеш говорити з нами, напиши.',
      it: 'La Spagna ha una professione di sommelier profonda e ben organizzata con strutture nazionali, regionali e internazionali. Non facciamo parte di queste istituzioni. Le rispettiamo. Speriamo di costruire al fianco dei loro membri. Se fai parte di una di queste e vuoi parlare con noi, scrivi.',
      de: 'Spanien hat einen tiefen, gut organisierten Sommelier-Beruf mit nationalen, regionalen und internationalen Strukturen. Wir gehören nicht zu diesen Institutionen. Wir respektieren sie. Wir hoffen, neben ihren Mitgliedern zu bauen. Wenn du zu einer von ihnen gehörst und mit uns sprechen willst, schreib.',
      he: 'לספרד יש מקצוע סומלייה עמוק ומאורגן היטב עם מבנים לאומיים, אזוריים ובינלאומיים. אנחנו לא חלק מהמוסדות האלה. אנחנו מכבדים אותם. אנחנו מקווים לבנות לצד חבריהם. אם אתה חלק מאחד מהם ורוצה לדבר איתנו, כתוב.',
      pt: 'Espanha tem uma profissão de sommelier profunda e bem organizada com estruturas nacionais, regionais e internacionais. Não fazemos parte dessas instituições. Respeitamo-las. Esperamos construir ao lado dos seus membros. Se fazes parte de alguma delas e queres falar connosco, escreve.',
    },
    'sommeliers.assoc.disclaimer': {
      en: 'A note. The associations above are referenced because they shape the world we work in. We have no formal affiliation, partnership, or endorsement with any of them at this stage. Any future collaboration will be announced explicitly and named on this page. We welcome conversation.',
      fr: 'Une note. Les associations ci-dessus sont mentionnées car elles façonnent le monde dans lequel nous travaillons. Nous n\'avons aucune affiliation formelle, partenariat ou soutien avec aucune d\'entre elles à ce stade. Toute collaboration future sera annoncée explicitement et nommée sur cette page. Nous accueillons la conversation.',
      ru: 'Замечание. Ассоциации выше упомянуты потому что они формируют мир, в котором мы работаем. У нас нет формальной аффилиации, партнёрства или поддержки ни с одной из них на данном этапе. Любое будущее сотрудничество будет анонсировано явно и названо на этой странице. Мы открыты к разговору.',
      es: 'Una nota. Las asociaciones de arriba se mencionan porque dan forma al mundo en el que trabajamos. No tenemos afiliación formal, asociación, ni respaldo con ninguna de ellas en esta etapa. Cualquier colaboración futura se anunciará explícitamente y se nombrará en esta página. Damos la bienvenida a la conversación.',
      uk: 'Зауваження. Асоціації вище згадані тому що вони формують світ, у якому ми працюємо. Ми не маємо формальної афіліації, партнерства чи підтримки з жодною з них на цьому етапі. Будь-яка майбутня співпраця буде оголошена явно і названа на цій сторінці. Ми відкриті до розмови.',
      it: 'Una nota. Le associazioni sopra sono menzionate perché plasmano il mondo in cui lavoriamo. Non abbiamo alcuna affiliazione formale, partnership o sostegno con nessuna di esse in questa fase. Qualsiasi collaborazione futura sarà annunciata esplicitamente e nominata in questa pagina. Diamo il benvenuto alla conversazione.',
      de: 'Eine Anmerkung. Die obigen Verbände werden erwähnt, weil sie die Welt prägen, in der wir arbeiten. Wir haben in dieser Phase keine formelle Zugehörigkeit, Partnerschaft oder Unterstützung mit einem von ihnen. Jede zukünftige Zusammenarbeit wird ausdrücklich angekündigt und auf dieser Seite genannt. Wir begrüßen das Gespräch.',
      he: 'הערה. האיגודים מעלה מוזכרים כי הם מעצבים את העולם בו אנחנו עובדים. אין לנו זיקה רשמית, שותפות או חסות עם אף אחד מהם בשלב זה. כל שיתוף פעולה עתידי יוכרז במפורש ויצוין בעמוד זה. אנחנו מברכים על השיחה.',
      pt: 'Uma nota. As associações acima são mencionadas porque moldam o mundo em que trabalhamos. Não temos qualquer afiliação formal, parceria ou apoio com nenhuma delas nesta fase. Qualquer colaboração futura será anunciada explicitamente e nomeada nesta página. Damos as boas-vindas à conversa.',
    },

    // OFFER & ASK
    'sommeliers.offer.label': {
      en: 'For working sommeliers', fr: 'Pour les sommeliers en exercice',
      ru: 'Для работающих сомелье', es: 'Para sumilleres en activo',
      uk: 'Для працюючих сомельє', it: 'Per sommelier in attività',
      de: 'Für aktive Sommeliers', he: 'לסומלייה פעילים',
      pt: 'Para sommeliers ativos',
    },
    'sommeliers.offer.title': {
      en: 'A two-way <em>arrangement</em>.',
      fr: 'Un <em>arrangement</em> dans les deux sens.',
      ru: 'Двусторонняя <em>договорённость</em>.',
      es: 'Un <em>arreglo</em> de dos vías.',
      uk: 'Двостороння <em>домовленість</em>.',
      it: 'Un <em>accordo</em> a doppio senso.',
      de: 'Eine beidseitige <em>Vereinbarung</em>.',
      he: '<em>הסדר</em> דו-כיווני.',
      pt: 'Um <em>arranjo</em> de mão dupla.',
    },
    'sommeliers.offer.intro': {
      en: 'If you are a sommelier reading this, here is what we offer, and what we hope to get in return. Real numbers and contract terms are negotiated case by case. The frame below is the starting point.',
      fr: 'Si vous êtes un sommelier qui lit ceci, voici ce que nous offrons et ce que nous espérons obtenir en retour. Les chiffres réels et les conditions contractuelles sont négociés au cas par cas. Le cadre ci-dessous est le point de départ.',
      ru: 'Если ты сомелье и читаешь это, вот что мы предлагаем и что надеемся получить взамен. Реальные цифры и условия контракта обсуждаются индивидуально. Рамка ниже, отправная точка.',
      es: 'Si eres sumiller y estás leyendo esto, aquí está lo que ofrecemos, y lo que esperamos recibir a cambio. Los números reales y términos de contrato se negocian caso por caso. El marco siguiente es el punto de partida.',
      uk: 'Якщо ти сомельє і читаєш це, ось що ми пропонуємо і що сподіваємось отримати взамін. Реальні цифри та умови контракту обговорюються індивідуально. Рамка нижче, відправна точка.',
      it: 'Se sei un sommelier che sta leggendo questo, ecco cosa offriamo e cosa speriamo di ottenere in cambio. I numeri reali e i termini contrattuali sono negoziati caso per caso. La cornice qui sotto è il punto di partenza.',
      de: 'Wenn du Sommelier bist und das liest, hier ist, was wir anbieten und was wir uns im Gegenzug erhoffen. Tatsächliche Zahlen und Vertragsbedingungen werden im Einzelfall verhandelt. Der Rahmen unten ist der Ausgangspunkt.',
      he: 'אם אתה סומלייה וקורא את זה, הנה מה שאנחנו מציעים, ומה שאנחנו מקווים לקבל בתמורה. מספרים אמיתיים ותנאי חוזה נסגרים לפי מקרה. המסגרת למטה היא נקודת ההתחלה.',
      pt: 'Se és sommelier e estás a ler isto, aqui está o que oferecemos, e o que esperamos receber em troca. Números reais e termos de contrato são negociados caso a caso. O quadro abaixo é o ponto de partida.',
    },
    'sommeliers.offer.head_us': {
      en: 'What we offer', fr: 'Ce que nous offrons', ru: 'Что мы предлагаем',
      es: 'Lo que ofrecemos', uk: 'Що ми пропонуємо', it: 'Cosa offriamo',
      de: 'Was wir anbieten', he: 'מה שאנחנו מציעים', pt: 'O que oferecemos',
    },
    'sommeliers.offer.head_us_title': {
      en: 'What you get from <em>us</em>.',
      fr: 'Ce que vous obtenez de <em>nous</em>.',
      ru: 'Что ты получаешь от <em>нас</em>.',
      es: 'Lo que recibes de <em>nosotros</em>.',
      uk: 'Що ти отримуєш від <em>нас</em>.',
      it: 'Cosa ottieni da <em>noi</em>.',
      de: 'Was du von <em>uns</em> bekommst.',
      he: 'מה שאתה מקבל <em>מאיתנו</em>.',
      pt: 'O que recebes de <em>nós</em>.',
    },
    'sommeliers.offer.head_ask': {
      en: 'What we ask', fr: 'Ce que nous demandons', ru: 'Что мы просим',
      es: 'Lo que pedimos', uk: 'Що ми просимо', it: 'Cosa chiediamo',
      de: 'Was wir bitten', he: 'מה שאנחנו מבקשים', pt: 'O que pedimos',
    },
    'sommeliers.offer.head_ask_title': {
      en: 'What you give in <em>return</em>.',
      fr: 'Ce que vous donnez en <em>retour</em>.',
      ru: 'Что ты даёшь <em>взамен</em>.',
      es: 'Lo que das a <em>cambio</em>.',
      uk: 'Що ти даєш <em>взамін</em>.',
      it: 'Cosa dai in <em>cambio</em>.',
      de: 'Was du im <em>Gegenzug</em> gibst.',
      he: 'מה שאתה נותן <em>בתמורה</em>.',
      pt: 'O que dás em <em>retorno</em>.',
    },

    // IN-APP MODES
    'sommeliers.modes.label': {
      en: 'Inside the app', fr: 'Dans l\'application', ru: 'Внутри приложения',
      es: 'Dentro de la app', uk: 'Всередині застосунку', it: 'Dentro l\'app',
      de: 'In der App', he: 'בתוך האפליקציה', pt: 'Dentro da aplicação',
    },
    'sommeliers.modes.title': {
      en: 'The digital sommelier, two <em>modes</em>.',
      fr: 'Le sommelier numérique, deux <em>modes</em>.',
      ru: 'Цифровой сомелье, два <em>режима</em>.',
      es: 'El sumiller digital, dos <em>modos</em>.',
      uk: 'Цифровий сомельє, два <em>режими</em>.',
      it: 'Il sommelier digitale, due <em>modalità</em>.',
      de: 'Der digitale Sommelier, zwei <em>Modi</em>.',
      he: 'הסומלייה הדיגיטלי, שני <em>מצבים</em>.',
      pt: 'O sommelier digital, dois <em>modos</em>.',
    },
    'sommeliers.modes.intro': {
      en: 'The game runs in one of two ways, depending on whether someone is hosting the room. The digital sommelier behaves differently in each. In both cases, it is the quiet brain behind the table, never the loud voice at it.',
      fr: 'La partie se déroule de l\'une des deux manières, selon que quelqu\'un anime la salle ou non. Le sommelier numérique se comporte différemment dans chacune. Dans les deux cas, c\'est le cerveau silencieux derrière la table, jamais la voix forte à celle-ci.',
      ru: 'Игра идёт одним из двух способов, в зависимости от того, ведёт ли кто-то комнату. Цифровой сомелье ведёт себя по-разному в каждом. В обоих случаях он, тихий мозг за столом, никогда громкий голос за ним.',
      es: 'La partida funciona de una de dos maneras, según si alguien dirige la sala o no. El sumiller digital se comporta de manera diferente en cada una. En ambos casos, es el cerebro silencioso detrás de la mesa, nunca la voz alta en ella.',
      uk: 'Гра йде одним із двох способів, залежно від того, чи веде хтось кімнату. Цифровий сомельє поводиться по-різному в кожному. В обох випадках він, тихий мозок за столом, ніколи гучний голос за ним.',
      it: 'La partita si svolge in uno dei due modi, a seconda che qualcuno conduca la sala. Il sommelier digitale si comporta diversamente in ciascuno. In entrambi i casi, è il cervello silenzioso dietro il tavolo, mai la voce forte ad esso.',
      de: 'Das Spiel läuft auf eine von zwei Arten, je nachdem, ob jemand den Raum leitet. Der digitale Sommelier verhält sich in jedem unterschiedlich. In beiden Fällen ist er der stille Geist hinter dem Tisch, niemals die laute Stimme an ihm.',
      he: 'המשחק רץ באחד משני דרכים, תלוי אם מישהו מנחה את החדר. הסומלייה הדיגיטלי מתנהג אחרת בכל אחד. בשני המקרים, הוא המוח השקט מאחורי השולחן, לעולם לא הקול הרם בו.',
      pt: 'O jogo decorre de uma de duas formas, dependendo de alguém estar a conduzir a sala. O sommelier digital comporta-se de forma diferente em cada um. Em ambos os casos, é o cérebro silencioso por trás da mesa, nunca a voz alta a ela.',
    },

    'sommeliers.mode1.eyebrow': {
      en: 'Mode 01 · Hosted game', fr: 'Mode 01 · Partie animée',
      ru: 'Режим 01 · Игра с ведущим', es: 'Modo 01 · Partida con anfitrión',
      uk: 'Режим 01 · Гра з ведучим', it: 'Modalità 01 · Partita condotta',
      de: 'Modus 01 · Geleitetes Spiel', he: 'מצב 01 · משחק מונחה',
      pt: 'Modo 01 · Jogo conduzido',
    },
    'sommeliers.mode1.title': {
      en: 'When a <em>host</em> leads the room.',
      fr: 'Quand un <em>animateur</em> dirige la salle.',
      ru: 'Когда <em>ведущий</em> ведёт комнату.',
      es: 'Cuando un <em>anfitrión</em> dirige la sala.',
      uk: 'Коли <em>ведучий</em> веде кімнату.',
      it: 'Quando un <em>conduttore</em> guida la sala.',
      de: 'Wenn ein <em>Gastgeber</em> den Raum leitet.',
      he: 'כשה<em>מנחה</em> מוביל את החדר.',
      pt: 'Quando um <em>anfitrião</em> conduz a sala.',
    },
    'sommeliers.mode2.eyebrow': {
      en: 'Mode 02 · Simultaneous game', fr: 'Mode 02 · Partie simultanée',
      ru: 'Режим 02 · Одновременная игра', es: 'Modo 02 · Partida simultánea',
      uk: 'Режим 02 · Одночасна гра', it: 'Modalità 02 · Partita simultanea',
      de: 'Modus 02 · Gleichzeitiges Spiel', he: 'מצב 02 · משחק בו-זמני',
      pt: 'Modo 02 · Jogo simultâneo',
    },
    'sommeliers.mode2.title': {
      en: 'When <em>no one</em> is hosting.',
      fr: 'Quand <em>personne</em> n\'anime.',
      ru: 'Когда <em>никто</em> не ведёт.',
      es: 'Cuando <em>nadie</em> dirige.',
      uk: 'Коли <em>ніхто</em> не веде.',
      it: 'Quando <em>nessuno</em> conduce.',
      de: 'Wenn <em>niemand</em> leitet.',
      he: 'כש<em>אף אחד</em> לא מנחה.',
      pt: 'Quando <em>ninguém</em> conduz.',
    },
    'sommeliers.modes.aside': {
      en: 'The host role is a permission, not a separate account. Anyone in the group can be assigned the host. Switch it any time.',
      fr: 'Le rôle d\'hôte est une permission, pas un compte séparé. N\'importe qui dans le groupe peut être désigné comme hôte. Changez à tout moment.',
      ru: 'Роль ведущего, это разрешение, а не отдельный аккаунт. Любой в группе может стать ведущим. Меняй в любой момент.',
      es: 'El rol de anfitrión es un permiso, no una cuenta separada. Cualquiera en el grupo puede ser designado anfitrión. Cámbialo cuando quieras.',
      uk: 'Роль ведучого, це дозвіл, а не окремий обліковий запис. Будь-хто в групі може стати ведучим. Перемикай у будь-який час.',
      it: 'Il ruolo di conduttore è un permesso, non un account separato. Chiunque nel gruppo può essere designato conduttore. Cambialo in qualsiasi momento.',
      de: 'Die Rolle des Gastgebers ist eine Berechtigung, kein separates Konto. Jeder in der Gruppe kann zum Gastgeber bestimmt werden. Wechsel jederzeit.',
      he: 'תפקיד המנחה הוא הרשאה, לא חשבון נפרד. כל אחד בקבוצה יכול להיות מנחה. החלף בכל זמן.',
      pt: 'O papel de anfitrião é uma permissão, não uma conta separada. Qualquer pessoa do grupo pode ser designada anfitrião. Muda quando quiseres.',
    },

    // CTA
    'sommeliers.cta.label': {
      en: 'Be in touch', fr: 'Restons en contact', ru: 'Связаться',
      es: 'En contacto', uk: 'Зв\'язатися', it: 'Contattaci',
      de: 'In Kontakt', he: 'יצירת קשר', pt: 'Em contacto',
    },
    'sommeliers.cta.title': {
      en: 'If you are a <em>sommelier</em>, we want to hear from you.',
      fr: 'Si vous êtes <em>sommelier</em>, nous voulons vous entendre.',
      ru: 'Если ты <em>сомелье</em>, мы хотим тебя услышать.',
      es: 'Si eres <em>sumiller</em>, queremos escucharte.',
      uk: 'Якщо ти <em>сомельє</em>, ми хочемо тебе почути.',
      it: 'Se sei un <em>sommelier</em>, vogliamo sentirti.',
      de: 'Wenn du <em>Sommelier</em> bist, wollen wir von dir hören.',
      he: 'אם אתה <em>סומלייה</em>, אנחנו רוצים לשמוע ממך.',
      pt: 'Se és <em>sommelier</em>, queremos ouvir-te.',
    },
    'sommeliers.cta.body': {
      en: 'Working in Madrid, Valencia, anywhere in Spain. Recently certified or thirty years in the trade. Independent, restaurant-based, or tied to a bodega. Writing to us is the first step. Real people, one inbox.',
      fr: 'Travaillant à Madrid, Valence, partout en Espagne. Récemment certifié ou trente ans dans le métier. Indépendant, basé en restaurant, ou lié à une bodega. Nous écrire est la première étape. Des vraies personnes, une seule boîte de réception.',
      ru: 'Работающий в Мадриде, Валенсии, в любой точке Испании. Недавно сертифицирован или тридцать лет в профессии. Независимый, ресторанный или связанный с бодегой. Написать нам, первый шаг. Реальные люди, один ящик.',
      es: 'Trabajando en Madrid, Valencia, en cualquier parte de España. Recién certificado o treinta años en el oficio. Independiente, de restaurante, o vinculado a una bodega. Escribirnos es el primer paso. Personas reales, una bandeja.',
      uk: 'Працюєш у Мадриді, Валенсії, будь-де в Іспанії. Нещодавно сертифікований чи тридцять років у професії. Незалежний, ресторанний, чи пов\'язаний з бодегою. Написати нам, перший крок. Реальні люди, одна скринька.',
      it: 'Lavori a Madrid, Valencia, ovunque in Spagna. Appena certificato o trent\'anni nel mestiere. Indipendente, di ristorante, o legato a una bodega. Scriverci è il primo passo. Persone reali, una sola casella.',
      de: 'Arbeitend in Madrid, Valencia, überall in Spanien. Frisch zertifiziert oder dreißig Jahre im Beruf. Unabhängig, Restaurant-basiert oder an eine Bodega gebunden. Uns zu schreiben ist der erste Schritt. Echte Menschen, ein Postfach.',
      he: 'עובד במדריד, ולנסיה, בכל מקום בספרד. הוסמך לאחרונה או שלושים שנה במקצוע. עצמאי, מבוסס מסעדה, או קשור לבודגה. לכתוב אלינו הוא הצעד הראשון. אנשים אמיתיים, תיבה אחת.',
      pt: 'A trabalhar em Madrid, Valencia, em qualquer parte de Espanha. Recém-certificado ou trinta anos no ofício. Independente, de restaurante, ou ligado a uma adega. Escrever-nos é o primeiro passo. Pessoas reais, uma caixa.',
    },
    'sommeliers.cta.btn_back': {
      en: 'Back to the site', fr: 'Retour au site', ru: 'На главную',
      es: 'Volver al sitio', uk: 'На головну', it: 'Torna al sito',
      de: 'Zurück zur Startseite', he: 'חזרה לאתר', pt: 'Voltar ao site',
    },

  });
})();


// === v0.4.1 PATCH: previously unmarked strings ===
(function() {
  if (!window.TT_I18N) return;
  Object.assign(window.TT_I18N.s, {

    // INDEX prototype card chips (proto-card-screens)
    'index.proto.chip.landing': {
      en: 'Landing', fr: 'Accueil', ru: 'Лендинг', es: 'Inicio',
      uk: 'Лендінг', it: 'Atterraggio', de: 'Startseite',
      he: 'נחיתה', pt: 'Página inicial',
    },
    'index.proto.chip.subscription': {
      en: 'Subscription', fr: 'Abonnement', ru: 'Подписка', es: 'Suscripción',
      uk: 'Підписка', it: 'Abbonamento', de: 'Abonnement',
      he: 'מנוי', pt: 'Assinatura',
    },
    'index.proto.chip.dashboard': {
      en: 'Dashboard', fr: 'Tableau de bord', ru: 'Панель', es: 'Panel',
      uk: 'Панель', it: 'Pannello', de: 'Dashboard',
      he: 'לוח בקרה', pt: 'Painel',
    },
    'index.proto.chip.cap_scan': {
      en: 'CAP scan', fr: 'Scan CAP', ru: 'CAP скан', es: 'Escáner CAP',
      uk: 'CAP скан', it: 'Scansione CAP', de: 'CAP-Scan',
      he: 'סריקת CAP', pt: 'Leitura CAP',
    },
    'index.proto.chip.producer': {
      en: 'Producer', fr: 'Producteur', ru: 'Производитель', es: 'Productor',
      uk: 'Виробник', it: 'Produttore', de: 'Erzeuger',
      he: 'יצרן', pt: 'Produtor',
    },
    'index.proto.chip.event': {
      en: 'Event', fr: 'Événement', ru: 'Событие', es: 'Evento',
      uk: 'Подія', it: 'Evento', de: 'Veranstaltung',
      he: 'אירוע', pt: 'Evento',
    },
    'index.proto.chip.setup': {
      en: 'Setup', fr: 'Configuration', ru: 'Настройка', es: 'Configuración',
      uk: 'Налаштування', it: 'Impostazione', de: 'Einrichtung',
      he: 'הגדרה', pt: 'Configuração',
    },
    'index.proto.chip.wines': {
      en: 'Wines', fr: 'Vins', ru: 'Вина', es: 'Vinos',
      uk: 'Вина', it: 'Vini', de: 'Weine',
      he: 'יינות', pt: 'Vinhos',
    },
    'index.proto.chip.round': {
      en: 'Round', fr: 'Manche', ru: 'Раунд', es: 'Ronda',
      uk: 'Раунд', it: 'Turno', de: 'Runde',
      he: 'סיבוב', pt: 'Ronda',
    },
    'index.proto.chip.scoresheet': {
      en: 'Scoresheet', fr: 'Feuille de score', ru: 'Лист подсчёта', es: 'Hoja de puntuación',
      uk: 'Лист підрахунку', it: 'Foglio punteggio', de: 'Wertungsblatt',
      he: 'גיליון ניקוד', pt: 'Folha de pontos',
    },
    'index.proto.chip.reveal': {
      en: 'Reveal', fr: 'Révélation', ru: 'Раскрытие', es: 'Revelación',
      uk: 'Розкриття', it: 'Rivelazione', de: 'Enthüllung',
      he: 'חשיפה', pt: 'Revelação',
    },
    'index.proto.chip.after': {
      en: 'After', fr: 'Après', ru: 'После', es: 'Después',
      uk: 'Після', it: 'Dopo', de: 'Danach',
      he: 'אחרי', pt: 'Depois',
    },
    'index.proto.chip.signup': {
      en: 'Sign up', fr: 'Inscription', ru: 'Регистрация', es: 'Registro',
      uk: 'Реєстрація', it: 'Iscrizione', de: 'Anmeldung',
      he: 'הרשמה', pt: 'Inscrição',
    },
    'index.proto.chip.events': {
      en: 'Events', fr: 'Événements', ru: 'События', es: 'Eventos',
      uk: 'Події', it: 'Eventi', de: 'Veranstaltungen',
      he: 'אירועים', pt: 'Eventos',
    },
    'index.proto.chip.sommelier': {
      en: 'Sommelier', fr: 'Sommelier', ru: 'Сомелье', es: 'Sumiller',
      uk: 'Сомельє', it: 'Sommelier', de: 'Sommelier',
      he: 'סומלייה', pt: 'Sommelier',
    },
    'index.proto.chip.checkout': {
      en: 'Checkout', fr: 'Paiement', ru: 'Оплата', es: 'Pago',
      uk: 'Оплата', it: 'Pagamento', de: 'Kasse',
      he: 'תשלום', pt: 'Pagamento',
    },
    'index.proto.chip.tasting_center': {
      en: 'Tasting Center', fr: 'Centre de dégustation', ru: 'Центр дегустации', es: 'Centro de catas',
      uk: 'Центр дегустації', it: 'Centro degustazioni', de: 'Verkostungszentrum',
      he: 'מרכז טעימות', pt: 'Centro de provas',
    },
    'index.proto.chip.calendar': {
      en: 'Calendar', fr: 'Calendrier', ru: 'Календарь', es: 'Calendario',
      uk: 'Календар', it: 'Calendario', de: 'Kalender',
      he: 'לוח שנה', pt: 'Calendário',
    },
    'index.proto.chip.auth': {
      en: 'Auth', fr: 'Auth', ru: 'Авторизация', es: 'Auth',
      uk: 'Авторизація', it: 'Autenticazione', de: 'Anmeldung',
      he: 'אימות', pt: 'Autenticação',
    },
    'index.proto.chip.home': {
      en: 'Home', fr: 'Accueil', ru: 'Главная', es: 'Inicio',
      uk: 'Головна', it: 'Home', de: 'Startseite',
      he: 'בית', pt: 'Início',
    },
    'index.proto.chip.join': {
      en: 'Join', fr: 'Rejoindre', ru: 'Присоединиться', es: 'Unirse',
      uk: 'Приєднатись', it: 'Unisciti', de: 'Beitreten',
      he: 'הצטרפות', pt: 'Entrar',
    },
    'index.proto.chip.home_game': {
      en: 'Home game', fr: 'Partie à domicile', ru: 'Домашняя игра', es: 'Partida en casa',
      uk: 'Домашня гра', it: 'Partita a casa', de: 'Heimspiel',
      he: 'משחק בבית', pt: 'Jogo em casa',
    },
    'index.proto.chip.catalog': {
      en: 'Catalog', fr: 'Catalogue', ru: 'Каталог', es: 'Catálogo',
      uk: 'Каталог', it: 'Catalogo', de: 'Katalog',
      he: 'קטלוג', pt: 'Catálogo',
    },
    'index.proto.chip.cart': {
      en: 'Cart', fr: 'Panier', ru: 'Корзина', es: 'Carrito',
      uk: 'Кошик', it: 'Carrello', de: 'Warenkorb',
      he: 'עגלה', pt: 'Carrinho',
    },

    // CULTURE NAMES (the .em span inside culture-name)
    'toasts.cultures.georgian_name': {
      en: 'Georgian', fr: 'Géorgien', ru: 'Грузинский', es: 'Georgiano',
      uk: 'Грузинський', it: 'Georgiano', de: 'Georgisch',
      he: 'גאורגי', pt: 'Georgiano',
    },
    'toasts.cultures.jewish_name': {
      en: 'Jewish', fr: 'Juif', ru: 'Еврейский', es: 'Judío',
      uk: 'Єврейський', it: 'Ebraico', de: 'Jüdisch',
      he: 'יהודי', pt: 'Judaico',
    },
    'toasts.cultures.spanish_name': {
      en: 'Spanish', fr: 'Espagnol', ru: 'Испанский', es: 'Español',
      uk: 'Іспанський', it: 'Spagnolo', de: 'Spanisch',
      he: 'ספרדי', pt: 'Espanhol',
    },
    'toasts.cultures.russian_name': {
      en: 'Russian', fr: 'Russe', ru: 'Русский', es: 'Ruso',
      uk: 'Російський', it: 'Russo', de: 'Russisch',
      he: 'רוסי', pt: 'Russo',
    },
    'toasts.cultures.italian_name': {
      en: 'Italian', fr: 'Italien', ru: 'Итальянский', es: 'Italiano',
      uk: 'Італійський', it: 'Italiano', de: 'Italienisch',
      he: 'איטלקי', pt: 'Italiano',
    },
    'toasts.cultures.french_name': {
      en: 'French', fr: 'Français', ru: 'Французский', es: 'Francés',
      uk: 'Французький', it: 'Francese', de: 'Französisch',
      he: 'צרפתי', pt: 'Francês',
    },
    'toasts.cultures.greek_name': {
      en: 'Greek', fr: 'Grec', ru: 'Греческий', es: 'Griego',
      uk: 'Грецький', it: 'Greco', de: 'Griechisch',
      he: 'יווני', pt: 'Grego',
    },

    // SOMMELIERS — TWO SIDES (the big missing blocks)
    'sommeliers.side1.num': {
      en: '01 · The human', fr: '01 · L\'humain', ru: '01 · Человек', es: '01 · El humano',
      uk: '01 · Людина', it: '01 · L\'umano', de: '01 · Der Mensch',
      he: '01 · האדם', pt: '01 · O humano',
    },
    'sommeliers.side1.title': {
      en: 'A <em>profession</em> we believe in.',
      fr: 'Un <em>métier</em> auquel nous croyons.',
      ru: '<em>Профессия</em>, в которую мы верим.',
      es: 'Una <em>profesión</em> en la que creemos.',
      uk: '<em>Професія</em>, в яку ми віримо.',
      it: 'Una <em>professione</em> in cui crediamo.',
      de: 'Ein <em>Beruf</em>, an den wir glauben.',
      he: '<em>מקצוע</em> שאנחנו מאמינים בו.',
      pt: 'Uma <em>profissão</em> em que acreditamos.',
    },
    'sommeliers.side1.desc': {
      en: 'We host live tastings, dinners, and curated nights with working sommeliers across Spain. They lead. They speak. They pour. They are the reason the night is memorable. We provide the framework, the venue partners, the audience, and the operational backbone. They bring the wine and the words.',
      fr: 'Nous organisons des dégustations en direct, des dîners et des soirées sélectionnées avec des sommeliers en activité partout en Espagne. Ils dirigent. Ils parlent. Ils servent. Ils sont la raison pour laquelle la soirée est mémorable. Nous fournissons le cadre, les lieux partenaires, le public et la colonne vertébrale opérationnelle. Ils apportent le vin et les mots.',
      ru: 'Мы проводим живые дегустации, ужины и кураторские вечера с работающими сомелье по всей Испании. Они ведут. Они говорят. Они наливают. Они причина того, что вечер запомнится. Мы даём рамку, партнёрские площадки, аудиторию и операционный костяк. Они приносят вино и слова.',
      es: 'Organizamos catas en vivo, cenas y veladas seleccionadas con sumilleres en activo por toda España. Ellos dirigen. Ellos hablan. Ellos sirven. Ellos son la razón de que la noche sea memorable. Nosotros proporcionamos el marco, los espacios asociados, la audiencia y la columna vertebral operativa. Ellos aportan el vino y las palabras.',
      uk: 'Ми проводимо живі дегустації, вечері та кураторські вечори з працюючими сомельє по всій Іспанії. Вони ведуть. Вони говорять. Вони наливають. Вони причина того, що вечір запам\'ятається. Ми надаємо рамку, партнерські майданчики, аудиторію та операційний хребет. Вони приносять вино і слова.',
      it: 'Organizziamo degustazioni dal vivo, cene e serate curate con sommelier attivi in tutta la Spagna. Loro guidano. Loro parlano. Loro versano. Sono il motivo per cui la serata è memorabile. Noi forniamo il quadro, i locali partner, il pubblico e la spina dorsale operativa. Loro portano il vino e le parole.',
      de: 'Wir veranstalten Live-Verkostungen, Abendessen und kuratierte Nächte mit aktiven Sommeliers in ganz Spanien. Sie leiten. Sie sprechen. Sie schenken ein. Sie sind der Grund, warum der Abend in Erinnerung bleibt. Wir liefern den Rahmen, die Partnerlokale, das Publikum und das operative Rückgrat. Sie bringen den Wein und die Worte.',
      he: 'אנחנו מארחים טעימות חיות, ארוחות ערב ולילות מאוצרים עם סומלייה פעילים ברחבי ספרד. הם מובילים. הם מדברים. הם מוזגים. הם הסיבה שהלילה זכור. אנחנו מספקים את המסגרת, את שותפי המקום, את הקהל ואת עמוד השדרה התפעולי. הם מביאים את היין ואת המילים.',
      pt: 'Organizamos provas ao vivo, jantares e noites curadas com sommeliers em atividade por toda a Espanha. Eles lideram. Eles falam. Eles servem. São a razão pela qual a noite é memorável. Nós fornecemos o enquadramento, os locais parceiros, a audiência e a coluna operacional. Eles trazem o vinho e as palavras.',
    },
    'sommeliers.side1.quote': {
      en: '"The wine talks. The sommelier translates. We make the room quiet enough to hear them both."',
      fr: '« Le vin parle. Le sommelier traduit. Nous rendons la salle assez calme pour les entendre tous les deux. »',
      ru: '«Вино говорит. Сомелье переводит. Мы делаем зал достаточно тихим, чтобы услышать обоих».',
      es: '«El vino habla. El sumiller traduce. Hacemos que la sala esté lo suficientemente tranquila para oír a ambos».',
      uk: '«Вино говорить. Сомельє перекладає. Ми робимо зал досить тихим, щоб почути обох».',
      it: '«Il vino parla. Il sommelier traduce. Rendiamo la sala abbastanza silenziosa per sentirli entrambi.»',
      de: '„Der Wein spricht. Der Sommelier übersetzt. Wir machen den Raum leise genug, um beide zu hören."',
      he: '"היין מדבר. הסומלייה מתרגם. אנחנו עושים את החדר שקט מספיק כדי לשמוע את שניהם."',
      pt: '«O vinho fala. O sommelier traduz. Tornamos a sala silenciosa o bastante para os ouvir aos dois.»',
    },
    'sommeliers.side2.num': {
      en: '02 · The software', fr: '02 · Le logiciel', ru: '02 · Программа',
      es: '02 · El software', uk: '02 · Програма', it: '02 · Il software',
      de: '02 · Die Software', he: '02 · התוכנה', pt: '02 · O software',
    },
    'sommeliers.side2.title': {
      en: 'A <em>digital</em> sommelier inside the game.',
      fr: 'Un sommelier <em>numérique</em> dans le jeu.',
      ru: '<em>Цифровой</em> сомелье внутри игры.',
      es: 'Un sumiller <em>digital</em> dentro del juego.',
      uk: '<em>Цифровий</em> сомельє всередині гри.',
      it: 'Un sommelier <em>digitale</em> dentro il gioco.',
      de: 'Ein <em>digitaler</em> Sommelier im Spiel.',
      he: 'סומלייה <em>דיגיטלי</em> בתוך המשחק.',
      pt: 'Um sommelier <em>digital</em> dentro do jogo.',
    },
    'sommeliers.side2.desc': {
      en: 'When you play Tasting & Toasting at home, no professional is in the room. The app fills the gap, gently. It briefs the host on the wines, suggests the order to pour, surfaces tasting notes at the right moment, and steps aside when the conversation takes over. A guide, not a teacher.',
      fr: 'Quand tu joues à Tasting & Toasting à la maison, aucun professionnel n\'est dans la salle. L\'application comble le vide, doucement. Elle briefe l\'hôte sur les vins, suggère l\'ordre de service, fait remonter les notes de dégustation au bon moment, et s\'efface quand la conversation prend le relais. Un guide, pas un professeur.',
      ru: 'Когда ты играешь в Tasting & Toasting дома, в комнате нет профессионала. Приложение заполняет пробел, мягко. Оно вводит хозяина в курс по винам, предлагает порядок розлива, всплывает с заметками в нужный момент и отступает, когда разговор берёт верх. Гид, не учитель.',
      es: 'Cuando juegas a Tasting & Toasting en casa, no hay un profesional en la sala. La aplicación llena el vacío, con suavidad. Informa al anfitrión sobre los vinos, sugiere el orden de servicio, hace aparecer las notas de cata en el momento adecuado y se aparta cuando la conversación toma el relevo. Una guía, no un maestro.',
      uk: 'Коли ти граєш у Tasting & Toasting вдома, у кімнаті немає професіонала. Застосунок заповнює прогалину м\'яко. Вводить господаря в курс щодо вин, пропонує порядок розливу, спливає з нотатками у потрібний момент і відступає, коли розмова бере гору. Провідник, не вчитель.',
      it: 'Quando giochi a Tasting & Toasting a casa, nessun professionista è nella sala. L\'app riempie il vuoto, dolcemente. Informa il padrone di casa sui vini, suggerisce l\'ordine di servizio, fa emergere le note di degustazione al momento giusto e si fa da parte quando la conversazione prende il sopravvento. Una guida, non un insegnante.',
      de: 'Wenn du Tasting & Toasting zu Hause spielst, ist kein Profi im Raum. Die App füllt die Lücke, behutsam. Sie informiert den Gastgeber über die Weine, schlägt die Reihenfolge des Einschenkens vor, lässt Verkostungsnotizen im richtigen Moment auftauchen und tritt zur Seite, wenn das Gespräch übernimmt. Ein Führer, kein Lehrer.',
      he: 'כשאתה משחק ב-Tasting & Toasting בבית, אין איש מקצוע בחדר. האפליקציה ממלאת את החלל, בעדינות. היא מתדרכת את המארח על היינות, מציעה את סדר המזיגה, מעלה הערות טעימה ברגע הנכון, וזזה הצידה כשהשיחה משתלטת. מדריך, לא מורה.',
      pt: 'Quando jogas a Tasting & Toasting em casa, nenhum profissional está na sala. A aplicação preenche a lacuna, suavemente. Informa o anfitrião sobre os vinhos, sugere a ordem de serviço, faz aparecer as notas de prova no momento certo e afasta-se quando a conversa toma conta. Um guia, não um professor.',
    },
    'sommeliers.side2.quote': {
      en: '"The best technology is the one nobody notices. The toast lands. The bottle is right. The host looks confident. Quiet help, doing its work."',
      fr: '« La meilleure technologie est celle que personne ne remarque. Le toast atterrit. La bouteille est la bonne. L\'hôte a l\'air confiant. Une aide silencieuse, qui fait son travail. »',
      ru: '«Лучшая технология та, которую никто не замечает. Тост попадает в цель. Бутылка та самая. Хозяин выглядит уверенно. Тихая помощь делает свою работу».',
      es: '«La mejor tecnología es la que nadie nota. El brindis acierta. La botella es la correcta. El anfitrión parece seguro. Ayuda silenciosa, haciendo su trabajo».',
      uk: '«Найкраща технологія та, яку ніхто не помічає. Тост влучає. Пляшка та сама. Господар виглядає впевнено. Тиха допомога робить свою справу».',
      it: '«La migliore tecnologia è quella che nessuno nota. Il brindisi colpisce nel segno. La bottiglia è giusta. Il padrone di casa sembra sicuro. Aiuto silenzioso, che fa il suo lavoro.»',
      de: '„Die beste Technologie ist die, die niemand bemerkt. Der Trinkspruch sitzt. Die Flasche stimmt. Der Gastgeber wirkt sicher. Stille Hilfe, die ihre Arbeit tut."',
      he: '"הטכנולוגיה הטובה ביותר היא זו שאף אחד לא שם לב אליה. הרמת הכוסית קולעת. הבקבוק נכון. המארח נראה בטוח. עזרה שקטה עושה את עבודתה."',
      pt: '«A melhor tecnologia é a que ninguém repara. O brinde acerta. A garrafa está certa. O anfitrião parece confiante. Ajuda silenciosa, a fazer o seu trabalho.»',
    },

    // SOMMELIERS — ASSOCIATIONS (4 cards × meta+desc, names stay original Spanish/French)
    'sommeliers.assoc.uaes_meta': {
      en: 'National · Founded 1994 · Member of ASI',
      fr: 'National · Fondée en 1994 · Membre de l\'ASI',
      ru: 'Национальная · Основана 1994 · Член ASI',
      es: 'Nacional · Fundada 1994 · Miembro de ASI',
      uk: 'Національна · Заснована 1994 · Член ASI',
      it: 'Nazionale · Fondata 1994 · Membro ASI',
      de: 'National · Gegründet 1994 · Mitglied der ASI',
      he: 'לאומי · נוסד 1994 · חבר ASI',
      pt: 'Nacional · Fundada 1994 · Membro da ASI',
    },
    'sommeliers.assoc.uaes_desc': {
      en: 'The umbrella body for all regional Spanish sommelier associations. Hosts the Spanish national championship, partners with ASI on international training, represents Spain in global sommelier dialogue.',
      fr: 'L\'organisme parapluie de toutes les associations régionales espagnoles de sommeliers. Organise le championnat national espagnol, collabore avec l\'ASI sur la formation internationale, représente l\'Espagne dans le dialogue mondial des sommeliers.',
      ru: 'Зонтичная организация всех региональных испанских ассоциаций сомелье. Проводит испанский национальный чемпионат, сотрудничает с ASI по международному обучению, представляет Испанию в глобальном диалоге сомелье.',
      es: 'El organismo paraguas de todas las asociaciones regionales españolas de sumilleres. Organiza el campeonato nacional español, colabora con ASI en formación internacional, representa a España en el diálogo global de sumilleres.',
      uk: 'Парасолькова організація всіх регіональних іспанських асоціацій сомельє. Проводить іспанський національний чемпіонат, співпрацює з ASI у міжнародному навчанні, представляє Іспанію у глобальному діалозі сомельє.',
      it: 'L\'organismo ombrello di tutte le associazioni regionali spagnole di sommelier. Ospita il campionato nazionale spagnolo, collabora con ASI sulla formazione internazionale, rappresenta la Spagna nel dialogo globale dei sommelier.',
      de: 'Der Dachverband aller regionalen spanischen Sommelier-Vereinigungen. Veranstaltet die spanische Nationalmeisterschaft, kooperiert mit der ASI in der internationalen Ausbildung, vertritt Spanien im globalen Sommelier-Dialog.',
      he: 'הגוף המטרייה של כל איגודי הסומלייה האזוריים בספרד. מארח את אליפות ספרד הלאומית, שותף עם ASI בהכשרה בינלאומית, מייצג את ספרד בדיאלוג הסומלייה הגלובלי.',
      pt: 'O organismo guarda-chuva de todas as associações regionais espanholas de sommeliers. Organiza o campeonato nacional espanhol, colabora com a ASI na formação internacional, representa a Espanha no diálogo global de sommeliers.',
    },
    'sommeliers.assoc.asumad_meta': {
      en: 'Madrid · Regional', fr: 'Madrid · Régional', ru: 'Мадрид · Региональная',
      es: 'Madrid · Regional', uk: 'Мадрид · Регіональна', it: 'Madrid · Regionale',
      de: 'Madrid · Regional', he: 'מדריד · אזורי', pt: 'Madrid · Regional',
    },
    'sommeliers.assoc.asumad_desc': {
      en: 'The Madrid professional sommelier association. Brings together working sommeliers across hospitality, restaurants, distribution, and education. Hosts tastings, masterclasses, and mentorship for the city we are based in.',
      fr: 'L\'association professionnelle des sommeliers de Madrid. Rassemble les sommeliers en activité dans l\'hôtellerie, la restauration, la distribution et l\'éducation. Organise des dégustations, des masterclasses et du mentorat pour la ville où nous sommes basés.',
      ru: 'Мадридская профессиональная ассоциация сомелье. Объединяет работающих сомелье в гостиничном бизнесе, ресторанах, дистрибуции и образовании. Проводит дегустации, мастер-классы и менторство для города, в котором мы базируемся.',
      es: 'La asociación profesional de sumilleres de Madrid. Reúne a sumilleres en activo en hostelería, restauración, distribución y educación. Organiza catas, masterclasses y mentoría para la ciudad en la que estamos.',
      uk: 'Мадридська професійна асоціація сомельє. Об\'єднує працюючих сомельє у готельному бізнесі, ресторанах, дистрибуції та освіті. Проводить дегустації, майстер-класи та менторство для міста, в якому ми розташовані.',
      it: 'L\'associazione professionale dei sommelier di Madrid. Riunisce sommelier in attività nell\'ospitalità, nella ristorazione, nella distribuzione e nell\'istruzione. Organizza degustazioni, masterclass e mentorship per la città in cui ci troviamo.',
      de: 'Der professionelle Sommelier-Verband Madrids. Bringt aktive Sommeliers aus Gastgewerbe, Gastronomie, Vertrieb und Bildung zusammen. Veranstaltet Verkostungen, Meisterklassen und Mentoring für die Stadt, in der wir ansässig sind.',
      he: 'איגוד הסומלייה המקצועי של מדריד. מאחד סומלייה פעילים בענפי האירוח, המסעדנות, ההפצה וההשכלה. מארח טעימות, מאסטרקלאסים וחונכות בעיר בה אנו ממוקמים.',
      pt: 'A associação profissional de sommeliers de Madrid. Reúne sommeliers em atividade na hotelaria, restauração, distribuição e ensino. Organiza provas, masterclasses e mentoria para a cidade onde estamos.',
    },
    'sommeliers.assoc.asi_meta': {
      en: 'Global · Founded 1969 · Paris HQ',
      fr: 'Mondial · Fondée en 1969 · Siège Paris',
      ru: 'Глобальная · Основана 1969 · Штаб Париж',
      es: 'Global · Fundada 1969 · Sede en París',
      uk: 'Глобальна · Заснована 1969 · Штаб Париж',
      it: 'Globale · Fondata 1969 · Sede a Parigi',
      de: 'Global · Gegründet 1969 · Sitz Paris',
      he: 'גלובלי · נוסד 1969 · מטה פריז',
      pt: 'Global · Fundada 1969 · Sede em Paris',
    },
    'sommeliers.assoc.asi_desc': {
      en: 'The international body of national sommelier associations. Sixty-eight member countries. Runs the Best Sommelier of the World every three years. Sets the global standard for the profession we work with.',
      fr: 'L\'organisme international des associations nationales de sommeliers. Soixante-huit pays membres. Organise le concours du Meilleur Sommelier du Monde tous les trois ans. Fixe la norme mondiale pour la profession avec laquelle nous travaillons.',
      ru: 'Международная организация национальных ассоциаций сомелье. Шестьдесят восемь стран-членов. Каждые три года проводит конкурс «Лучший сомелье мира». Задаёт глобальный стандарт профессии, с которой мы работаем.',
      es: 'El organismo internacional de las asociaciones nacionales de sumilleres. Sesenta y ocho países miembros. Organiza el concurso al Mejor Sumiller del Mundo cada tres años. Establece el estándar global para la profesión con la que trabajamos.',
      uk: 'Міжнародна організація національних асоціацій сомельє. Шістдесят вісім країн-членів. Кожні три роки проводить «Кращий сомельє світу». Задає глобальний стандарт професії, з якою ми працюємо.',
      it: 'L\'organismo internazionale delle associazioni nazionali di sommelier. Sessantotto paesi membri. Organizza il concorso del Miglior Sommelier del Mondo ogni tre anni. Stabilisce lo standard globale per la professione con cui lavoriamo.',
      de: 'Das internationale Dachorgan der nationalen Sommelier-Verbände. Achtundsechzig Mitgliedsländer. Veranstaltet alle drei Jahre den Wettbewerb um den Besten Sommelier der Welt. Setzt den globalen Standard für den Beruf, mit dem wir arbeiten.',
      he: 'הגוף הבינלאומי של איגודי הסומלייה הלאומיים. שישים ושמונה מדינות חברות. מנהל את תחרות הסומלייה הטוב בעולם אחת לשלוש שנים. קובע את התקן העולמי למקצוע איתו אנחנו עובדים.',
      pt: 'O organismo internacional das associações nacionais de sommeliers. Sessenta e oito países membros. Organiza o concurso do Melhor Sommelier do Mundo de três em três anos. Define o padrão global para a profissão com que trabalhamos.',
    },
    'sommeliers.assoc.eec_meta': {
      en: 'Madrid · Education · 25+ years',
      fr: 'Madrid · Éducation · Plus de 25 ans',
      ru: 'Мадрид · Образование · 25+ лет',
      es: 'Madrid · Educación · Más de 25 años',
      uk: 'Мадрид · Освіта · 25+ років',
      it: 'Madrid · Istruzione · Oltre 25 anni',
      de: 'Madrid · Bildung · Über 25 Jahre',
      he: 'מדריד · השכלה · 25+ שנים',
      pt: 'Madrid · Educação · Mais de 25 anos',
    },
    'sommeliers.assoc.eec_desc': {
      en: 'Spain\'s reference school for professional sommelier training. Has formed over a thousand sommeliers across Spain, Europe, and Iberoamerica. A natural place for the next generation we hope to host on the platform.',
      fr: 'L\'école de référence en Espagne pour la formation professionnelle des sommeliers. A formé plus d\'un millier de sommeliers en Espagne, en Europe et en Ibéro-Amérique. Un lieu naturel pour la prochaine génération que nous espérons accueillir sur la plateforme.',
      ru: 'Эталонная школа Испании по профессиональной подготовке сомелье. Подготовила более тысячи сомелье по Испании, Европе и Ибероамерике. Естественное место для следующего поколения, которое мы надеемся принять на платформе.',
      es: 'La escuela de referencia en España para la formación profesional de sumilleres. Ha formado a más de mil sumilleres en España, Europa e Iberoamérica. Un lugar natural para la próxima generación que esperamos acoger en la plataforma.',
      uk: 'Еталонна школа Іспанії з професійної підготовки сомельє. Підготувала понад тисячу сомельє по Іспанії, Європі та Іберо-Америці. Природне місце для наступного покоління, яке ми сподіваємось прийняти на платформі.',
      it: 'La scuola di riferimento in Spagna per la formazione professionale dei sommelier. Ha formato oltre mille sommelier in Spagna, Europa e Ibero-America. Un luogo naturale per la prossima generazione che speriamo di ospitare sulla piattaforma.',
      de: 'Die Referenzschule Spaniens für die professionelle Sommelier-Ausbildung. Hat über tausend Sommeliers in Spanien, Europa und Iberoamerika ausgebildet. Ein natürlicher Ort für die nächste Generation, die wir auf der Plattform begrüßen möchten.',
      he: 'בית הספר המוביל בספרד להכשרה מקצועית של סומלייה. הכשיר מעל אלף סומלייה ברחבי ספרד, אירופה ואיברו-אמריקה. מקום טבעי לדור הבא שאנו מקווים לארח בפלטפורמה.',
      pt: 'A escola de referência em Espanha para a formação profissional de sommeliers. Formou mais de mil sommeliers em Espanha, Europa e Ibero-América. Um lugar natural para a próxima geração que esperamos acolher na plataforma.',
    },
    'sommeliers.assoc.eec_link': {
      en: 'Reference institution', fr: 'Institution de référence',
      ru: 'Эталонный институт', es: 'Institución de referencia',
      uk: 'Еталонний інститут', it: 'Istituzione di riferimento',
      de: 'Referenzinstitution', he: 'מוסד ייחוס', pt: 'Instituição de referência',
    },

    // OFFER LIST (5 items)
    'sommeliers.offer.i1.label': {
      en: 'Paid event hosting', fr: 'Animation d\'événements rémunérée',
      ru: 'Оплачиваемое ведение событий', es: 'Eventos remunerados',
      uk: 'Оплачуване ведення подій', it: 'Eventi retribuiti',
      de: 'Bezahlte Eventmoderation', he: 'אירועים בתשלום',
      pt: 'Eventos remunerados',
    },
    'sommeliers.offer.i1.body': {
      en: 'We pay sommeliers to lead our live tastings, dinners, and masterclasses. Day rate or revenue share, your preference.',
      fr: 'Nous payons les sommeliers pour animer nos dégustations en direct, dîners et masterclasses. Tarif journalier ou partage des revenus, à votre préférence.',
      ru: 'Мы платим сомелье за ведение наших живых дегустаций, ужинов и мастер-классов. Дневная ставка или процент от выручки, на твой выбор.',
      es: 'Pagamos a los sumilleres por dirigir nuestras catas en vivo, cenas y masterclasses. Tarifa diaria o porcentaje de ingresos, a tu elección.',
      uk: 'Ми платимо сомельє за ведення наших живих дегустацій, вечер і майстер-класів. Денна ставка або частка від виручки, на твій вибір.',
      it: 'Paghiamo i sommelier per condurre le nostre degustazioni dal vivo, cene e masterclass. Tariffa giornaliera o quota sui ricavi, a tua scelta.',
      de: 'Wir zahlen Sommeliers für die Leitung unserer Live-Verkostungen, Dinners und Meisterklassen. Tagessatz oder Umsatzbeteiligung, nach deiner Präferenz.',
      he: 'אנחנו משלמים לסומלייה על הנחיית טעימות חיות, ארוחות ערב ומאסטרקלאסים. תעריף יומי או אחוז מההכנסות, לבחירתך.',
      pt: 'Pagamos aos sommeliers para conduzir as nossas provas ao vivo, jantares e masterclasses. Tarifa diária ou partilha de receitas, à tua escolha.',
    },
    'sommeliers.offer.i2.label': {
      en: 'Audience and reach', fr: 'Audience et portée',
      ru: 'Аудитория и охват', es: 'Audiencia y alcance',
      uk: 'Аудиторія і охоплення', it: 'Pubblico e portata',
      de: 'Publikum und Reichweite', he: 'קהל וטווח', pt: 'Audiência e alcance',
    },
    'sommeliers.offer.i2.body': {
      en: 'A growing community of wine-curious players across Spain. Your name, your work, in front of people who care.',
      fr: 'Une communauté grandissante de joueurs curieux du vin à travers l\'Espagne. Votre nom, votre travail, devant des gens qui s\'y intéressent.',
      ru: 'Растущее сообщество игроков, интересующихся вином, по всей Испании. Твоё имя, твоя работа, перед людьми, которым это важно.',
      es: 'Una comunidad creciente de jugadores curiosos por el vino en toda España. Tu nombre, tu trabajo, ante personas a las que les importa.',
      uk: 'Зростаюча спільнота гравців, що цікавляться вином, по всій Іспанії. Твоє ім\'я, твоя робота, перед людьми, яким це важливо.',
      it: 'Una comunità crescente di giocatori curiosi del vino in tutta la Spagna. Il tuo nome, il tuo lavoro, davanti a persone a cui interessa.',
      de: 'Eine wachsende Gemeinschaft weinneugieriger Spieler in ganz Spanien. Dein Name, deine Arbeit, vor Menschen, denen es wichtig ist.',
      he: 'קהילה גדלה של שחקנים סקרנים ליין ברחבי ספרד. השם שלך, העבודה שלך, מול אנשים שאכפת להם.',
      pt: 'Uma comunidade crescente de jogadores curiosos por vinho em toda a Espanha. O teu nome, o teu trabalho, perante pessoas a quem importa.',
    },
    'sommeliers.offer.i3.label': {
      en: 'Content publication', fr: 'Publication de contenu',
      ru: 'Публикация контента', es: 'Publicación de contenido',
      uk: 'Публікація контенту', it: 'Pubblicazione di contenuti',
      de: 'Inhaltsveröffentlichung', he: 'פרסום תוכן', pt: 'Publicação de conteúdo',
    },
    'sommeliers.offer.i3.body': {
      en: 'Tasting notes, video, articles, masterclasses. Published under your name, distributed through the platform.',
      fr: 'Notes de dégustation, vidéo, articles, masterclasses. Publiés sous votre nom, distribués via la plateforme.',
      ru: 'Заметки о дегустации, видео, статьи, мастер-классы. Опубликованные под твоим именем, распространяемые через платформу.',
      es: 'Notas de cata, vídeo, artículos, masterclasses. Publicados bajo tu nombre, distribuidos a través de la plataforma.',
      uk: 'Дегустаційні нотатки, відео, статті, майстер-класи. Опубліковані під твоїм іменем, поширені через платформу.',
      it: 'Note di degustazione, video, articoli, masterclass. Pubblicati a tuo nome, distribuiti attraverso la piattaforma.',
      de: 'Verkostungsnotizen, Videos, Artikel, Meisterklassen. Veröffentlicht unter deinem Namen, über die Plattform verbreitet.',
      he: 'הערות טעימה, וידאו, מאמרים, מאסטרקלאסים. מתפרסמים תחת שמך, מופצים דרך הפלטפורמה.',
      pt: 'Notas de prova, vídeo, artigos, masterclasses. Publicados sob o teu nome, distribuídos através da plataforma.',
    },
    'sommeliers.offer.i4.label': {
      en: 'Brand and venue collaboration', fr: 'Collaboration marque et lieu',
      ru: 'Сотрудничество с брендами и площадками', es: 'Colaboración con marcas y locales',
      uk: 'Співпраця з брендами та локаціями', it: 'Collaborazione con brand e locali',
      de: 'Marken- und Locationkooperation', he: 'שיתוף פעולה עם מותגים ומקומות',
      pt: 'Colaboração com marcas e locais',
    },
    'sommeliers.offer.i4.body': {
      en: 'Joint events with restaurants, bodegas, and wine regions. We handle logistics, ticketing, and operations.',
      fr: 'Événements conjoints avec des restaurants, bodegas et régions viticoles. Nous gérons la logistique, la billetterie et les opérations.',
      ru: 'Совместные события с ресторанами, бодегами и винными регионами. Мы берём логистику, билеты и операционку.',
      es: 'Eventos conjuntos con restaurantes, bodegas y regiones vinícolas. Nosotros nos encargamos de la logística, las entradas y las operaciones.',
      uk: 'Спільні події з ресторанами, бодегами та винними регіонами. Ми беремо логістику, квитки та операційку.',
      it: 'Eventi congiunti con ristoranti, bodegas e regioni vinicole. Noi ci occupiamo della logistica, della biglietteria e delle operazioni.',
      de: 'Gemeinsame Events mit Restaurants, Bodegas und Weinregionen. Wir kümmern uns um Logistik, Ticketing und Betrieb.',
      he: 'אירועים משותפים עם מסעדות, יקבים ואזורי יין. אנחנו דואגים ללוגיסטיקה, לכרטיסים ולתפעול.',
      pt: 'Eventos conjuntos com restaurantes, adegas e regiões vinícolas. Tratamos da logística, bilheteira e operações.',
    },
    'sommeliers.offer.i5.label': {
      en: 'A digital home', fr: 'Une maison numérique',
      ru: 'Цифровой дом', es: 'Una casa digital',
      uk: 'Цифровий дім', it: 'Una casa digitale',
      de: 'Ein digitales Zuhause', he: 'בית דיגיטלי', pt: 'Uma casa digital',
    },
    'sommeliers.offer.i5.body': {
      en: 'A profile page on the platform, linkable, shareable, with your bio, your specialties, your upcoming events.',
      fr: 'Une page profil sur la plateforme, liable, partageable, avec votre bio, vos spécialités, vos prochains événements.',
      ru: 'Страница профиля на платформе, со ссылкой, доступная для шаринга, с твоей биографией, специализациями и грядущими событиями.',
      es: 'Una página de perfil en la plataforma, con enlace, compartible, con tu biografía, tus especialidades, tus próximos eventos.',
      uk: 'Сторінка профілю на платформі, з посиланням, доступна для поширення, з твоєю біографією, спеціалізаціями та майбутніми подіями.',
      it: 'Una pagina profilo sulla piattaforma, linkabile, condivisibile, con la tua bio, le tue specialità, i tuoi prossimi eventi.',
      de: 'Eine Profilseite auf der Plattform, verlinkbar, teilbar, mit deinem Bio, deinen Spezialitäten, deinen kommenden Veranstaltungen.',
      he: 'עמוד פרופיל בפלטפורמה, ניתן לקישור ולשיתוף, עם הביו שלך, ההתמחויות שלך, האירועים הקרובים שלך.',
      pt: 'Uma página de perfil na plataforma, com link, partilhável, com a tua bio, as tuas especialidades, os teus próximos eventos.',
    },

    // ASK LIST (5 items)
    'sommeliers.ask.i1.label': {
      en: 'Catalog curation', fr: 'Curation du catalogue',
      ru: 'Кураторство каталога', es: 'Curación del catálogo',
      uk: 'Курування каталогу', it: 'Curatela del catalogo',
      de: 'Katalogkuratierung', he: 'אוצרות הקטלוג', pt: 'Curadoria do catálogo',
    },
    'sommeliers.ask.i1.body': {
      en: 'Help us build wine sets, monthly selections, and themed kits. The taste of the platform comes from the people who taste for a living.',
      fr: 'Aidez-nous à construire des sélections de vins, des sélections mensuelles et des kits thématiques. Le goût de la plateforme vient des gens qui dégustent pour vivre.',
      ru: 'Помоги нам собирать винные подборки, ежемесячные выборки и тематические наборы. Вкус платформы идёт от людей, которые дегустируют профессионально.',
      es: 'Ayúdanos a construir lotes de vinos, selecciones mensuales y kits temáticos. El gusto de la plataforma viene de quienes catan para vivir.',
      uk: 'Допоможи нам збирати винні підбірки, щомісячні вибірки та тематичні набори. Смак платформи йде від тих, хто дегустує професійно.',
      it: 'Aiutaci a costruire set di vini, selezioni mensili e kit tematici. Il gusto della piattaforma viene da chi degusta di mestiere.',
      de: 'Hilf uns, Weinsets, monatliche Auswahlen und thematische Kits zusammenzustellen. Der Geschmack der Plattform kommt von denen, die zum Beruf verkosten.',
      he: 'עזור לנו לבנות סטים של יין, מבחרים חודשיים וערכות נושא. הטעם של הפלטפורמה בא מאנשים שהטעימה היא מקצועם.',
      pt: 'Ajuda-nos a construir conjuntos de vinhos, seleções mensais e kits temáticos. O gosto da plataforma vem de quem prova para viver.',
    },
    'sommeliers.ask.i2.label': {
      en: 'Live event leadership', fr: 'Leadership d\'événements en direct',
      ru: 'Ведение живых событий', es: 'Liderazgo en eventos en vivo',
      uk: 'Ведення живих подій', it: 'Leadership di eventi dal vivo',
      de: 'Leitung von Live-Events', he: 'הובלת אירועים חיים', pt: 'Liderança de eventos ao vivo',
    },
    'sommeliers.ask.i2.body': {
      en: 'Host the tastings we book. Speak. Pour. Set the tone of the night. The way only a sommelier can.',
      fr: 'Animez les dégustations que nous réservons. Parlez. Servez. Donnez le ton de la soirée. Comme seul un sommelier sait le faire.',
      ru: 'Веди дегустации, которые мы бронируем. Говори. Наливай. Задавай тон вечеру. Так, как может только сомелье.',
      es: 'Dirige las catas que reservamos. Habla. Sirve. Marca el tono de la noche. Como solo un sumiller puede.',
      uk: 'Веди дегустації, які ми бронюємо. Говори. Наливай. Задавай тон вечора. Так, як може тільки сомельє.',
      it: 'Conduci le degustazioni che prenotiamo. Parla. Versa. Dai il tono alla serata. Come solo un sommelier può.',
      de: 'Leite die Verkostungen, die wir buchen. Sprich. Schenk ein. Gib den Ton des Abends an. So, wie es nur ein Sommelier kann.',
      he: 'הנחה את הטעימות שאנחנו מזמינים. דבר. מזוג. קבע את הטון של הערב. בדרך שרק סומלייה יכול.',
      pt: 'Conduz as provas que reservamos. Fala. Serve. Define o tom da noite. Como só um sommelier consegue.',
    },
    'sommeliers.ask.i3.label': {
      en: 'Knowledge contribution', fr: 'Contribution de connaissances',
      ru: 'Вклад в знания', es: 'Contribución de conocimiento',
      uk: 'Внесок у знання', it: 'Contributo di conoscenza',
      de: 'Wissensbeitrag', he: 'תרומת ידע', pt: 'Contribuição de conhecimento',
    },
    'sommeliers.ask.i3.body': {
      en: 'Short pieces. Recorded notes. Voice clips. The kind of texture the in-app guide draws from when no human is in the room.',
      fr: 'Courts textes. Notes enregistrées. Clips vocaux. Le genre de texture dont le guide intégré s\'inspire quand aucun humain n\'est dans la salle.',
      ru: 'Короткие тексты. Записанные заметки. Голосовые клипы. Та текстура, из которой in-app гид черпает, когда в комнате нет человека.',
      es: 'Piezas cortas. Notas grabadas. Clips de voz. El tipo de textura del que la guía interna se nutre cuando no hay un humano en la sala.',
      uk: 'Короткі тексти. Записані нотатки. Голосові кліпи. Та текстура, з якої in-app провідник черпає, коли в кімнаті немає людини.',
      it: 'Pezzi brevi. Note registrate. Clip vocali. Il tipo di tessitura da cui la guida in-app attinge quando nessun umano è nella sala.',
      de: 'Kurze Stücke. Aufgezeichnete Notizen. Sprachclips. Die Art von Textur, aus der der In-App-Guide schöpft, wenn kein Mensch im Raum ist.',
      he: 'יצירות קצרות. הערות מוקלטות. קליפי קול. סוג המרקם שממנו המדריך באפליקציה שואב כשאין אדם בחדר.',
      pt: 'Peças curtas. Notas gravadas. Clipes de voz. O tipo de textura de que o guia na app se nutre quando não há um humano na sala.',
    },
    'sommeliers.ask.i4.label': {
      en: 'Occasional Q&A', fr: 'Questions-réponses occasionnelles',
      ru: 'Эпизодические Q&A', es: 'Preguntas y respuestas ocasionales',
      uk: 'Епізодичні Q&A', it: 'Q&A occasionali',
      de: 'Gelegentliche Q&A', he: 'שאלות ותשובות מדי פעם', pt: 'Q&A ocasional',
    },
    'sommeliers.ask.i4.body': {
      en: 'From time to time, players will have a question that needs a real answer. A short reply, sent when you can. We do not flood the inbox.',
      fr: 'De temps en temps, des joueurs auront une question qui demande une vraie réponse. Une courte réponse, envoyée quand vous pouvez. Nous n\'inondons pas la boîte mail.',
      ru: 'Время от времени у игроков будет вопрос, требующий настоящего ответа. Короткий ответ, когда сможешь. Мы не заваливаем почту.',
      es: 'De vez en cuando, los jugadores tendrán una pregunta que necesita una respuesta real. Una respuesta breve, enviada cuando puedas. No inundamos la bandeja.',
      uk: 'Час від часу у гравців буде запитання, що потребує справжньої відповіді. Коротка відповідь, коли зможеш. Ми не заливаємо пошту.',
      it: 'Di tanto in tanto, i giocatori avranno una domanda che richiede una vera risposta. Una breve risposta, inviata quando puoi. Non inondiamo la casella.',
      de: 'Hin und wieder werden Spieler eine Frage haben, die eine echte Antwort braucht. Eine kurze Antwort, wenn du kannst. Wir überfluten den Posteingang nicht.',
      he: 'מדי פעם תהיה לשחקנים שאלה שדורשת תשובה אמיתית. תשובה קצרה, שתשלח כשתוכל. אנחנו לא מציפים את תיבת הדואר.',
      pt: 'De vez em quando, os jogadores terão uma pergunta que precisa de uma resposta a sério. Uma resposta curta, enviada quando puderes. Não inundamos a caixa.',
    },
    'sommeliers.ask.i5.label': {
      en: 'Honest feedback', fr: 'Retour honnête',
      ru: 'Честный фидбек', es: 'Comentarios honestos',
      uk: 'Чесний фідбек', it: 'Feedback onesto',
      de: 'Ehrliches Feedback', he: 'משוב כן', pt: 'Feedback honesto',
    },
    'sommeliers.ask.i5.body': {
      en: 'Tell us what we get wrong. The product is shaped by the people who know wine best, or it is not worth shaping.',
      fr: 'Dites-nous ce que nous nous trompons. Le produit est façonné par les gens qui connaissent le mieux le vin, sinon il ne vaut pas la peine d\'être façonné.',
      ru: 'Скажи, в чём мы неправы. Продукт формируется людьми, которые лучше всего знают вино, иначе его не стоит формировать.',
      es: 'Dinos en qué nos equivocamos. El producto lo forman las personas que mejor conocen el vino, o no vale la pena formarlo.',
      uk: 'Скажи, в чому ми неправі. Продукт формують люди, які найкраще знають вино, інакше його не варто формувати.',
      it: 'Dicci cosa sbagliamo. Il prodotto è plasmato dalle persone che conoscono meglio il vino, altrimenti non vale la pena plasmarlo.',
      de: 'Sag uns, was wir falsch machen. Das Produkt wird von den Menschen geformt, die Wein am besten kennen, sonst lohnt es sich nicht, es zu formen.',
      he: 'תגיד לנו במה אנחנו טועים. המוצר מעוצב על ידי האנשים שמכירים יין הכי טוב, אחרת לא שווה לעצב אותו.',
      pt: 'Diz-nos onde nos enganamos. O produto é moldado por quem melhor conhece o vinho, ou não vale a pena moldar.',
    },

    // MODES descriptions
    'sommeliers.mode1.desc': {
      en: 'One player takes the role of the host, sometimes called the mediator. The app gives them a private sommelier panel: wine briefs, the order to pour, tasting notes, the toast prompts at each moment. The other players see only the game itself. The host looks like a natural sommelier.',
      fr: 'Un joueur prend le rôle de l\'hôte, parfois appelé médiateur. L\'application lui donne un panneau sommelier privé : briefings sur les vins, ordre de service, notes de dégustation, suggestions de toasts à chaque moment. Les autres joueurs ne voient que le jeu lui-même. L\'hôte ressemble à un sommelier naturel.',
      ru: 'Один игрок берёт роль хозяина, иногда называемого медиатором. Приложение даёт ему приватную панель сомелье: справки по винам, порядок розлива, заметки по дегустации, подсказки тостов в каждый момент. Остальные игроки видят только саму игру. Хозяин выглядит как настоящий сомелье.',
      es: 'Un jugador toma el rol del anfitrión, a veces llamado mediador. La aplicación le da un panel privado de sumiller: fichas de vinos, orden de servicio, notas de cata, sugerencias de brindis en cada momento. Los demás jugadores solo ven el juego. El anfitrión parece un sumiller natural.',
      uk: 'Один гравець бере роль господаря, якого іноді називають медіатором. Застосунок дає йому приватну панель сомельє: довідки про вина, порядок розливу, дегустаційні нотатки, підказки тостів у кожний момент. Інші гравці бачать лише саму гру. Господар виглядає як справжній сомельє.',
      it: 'Un giocatore prende il ruolo del padrone di casa, a volte chiamato mediatore. L\'app gli dà un pannello sommelier privato: schede sui vini, ordine di servizio, note di degustazione, suggerimenti di brindisi in ogni momento. Gli altri giocatori vedono solo il gioco stesso. Il padrone di casa sembra un sommelier naturale.',
      de: 'Ein Spieler übernimmt die Rolle des Gastgebers, manchmal Vermittler genannt. Die App gibt ihm ein privates Sommelier-Panel: Wein-Briefings, Schenk-Reihenfolge, Verkostungsnotizen, Trinkspruch-Vorschläge in jedem Moment. Die anderen Spieler sehen nur das Spiel selbst. Der Gastgeber wirkt wie ein natürlicher Sommelier.',
      he: 'שחקן אחד נוטל את תפקיד המארח, לעיתים נקרא מתווך. האפליקציה נותנת לו פאנל סומלייה פרטי: תקצירי יינות, סדר מזיגה, הערות טעימה, הצעות הרמת כוסית בכל רגע. השחקנים האחרים רואים רק את המשחק עצמו. המארח נראה כמו סומלייה טבעי.',
      pt: 'Um jogador assume o papel de anfitrião, por vezes chamado mediador. A aplicação dá-lhe um painel privado de sommelier: briefings de vinhos, ordem de serviço, notas de prova, sugestões de brindes em cada momento. Os outros jogadores só veem o jogo. O anfitrião parece um sommelier natural.',
    },
    'sommeliers.mode2.desc': {
      en: 'Sometimes nobody wants to be the host. Or four friends want to taste at once and compare. In simultaneous mode, every player gets their own digital sommelier on their phone, with the same kind of guidance the host would get. The room stays equal. The wine still gets read.',
      fr: 'Parfois personne ne veut être l\'hôte. Ou quatre amis veulent déguster à la fois et comparer. En mode simultané, chaque joueur obtient son propre sommelier numérique sur son téléphone, avec le même type de conseils que recevrait l\'hôte. La salle reste égale. Le vin est toujours lu.',
      ru: 'Иногда никто не хочет быть хозяином. Или четыре друга хотят дегустировать одновременно и сравнивать. В одновременном режиме каждый игрок получает своего цифрового сомелье на телефоне, с тем же видом подсказок, что получил бы хозяин. Зал остаётся равным. Вино всё равно прочитывается.',
      es: 'A veces nadie quiere ser el anfitrión. O cuatro amigos quieren catar a la vez y comparar. En modo simultáneo, cada jugador tiene su propio sumiller digital en el móvil, con el mismo tipo de orientación que recibiría el anfitrión. La sala se mantiene igualitaria. El vino sigue leyéndose.',
      uk: 'Іноді ніхто не хоче бути господарем. Або чотири друзі хочуть дегустувати одночасно і порівнювати. У режимі одночасності кожен гравець отримує свого цифрового сомельє на телефоні, з тим самим видом підказок, що отримав би господар. Зал лишається рівним. Вино все одно читається.',
      it: 'A volte nessuno vuole essere il padrone di casa. O quattro amici vogliono degustare insieme e confrontare. In modalità simultanea, ogni giocatore ha il proprio sommelier digitale sul telefono, con lo stesso tipo di guida che avrebbe il padrone di casa. La sala rimane paritaria. Il vino viene comunque letto.',
      de: 'Manchmal will niemand der Gastgeber sein. Oder vier Freunde wollen gleichzeitig verkosten und vergleichen. Im Simultanmodus bekommt jeder Spieler seinen eigenen digitalen Sommelier auf dem Telefon, mit der gleichen Art von Anleitung, die der Gastgeber bekäme. Der Raum bleibt gleichgestellt. Der Wein wird trotzdem gelesen.',
      he: 'לפעמים אף אחד לא רוצה להיות המארח. או שארבעה חברים רוצים לטעום בו-זמנית ולהשוות. במצב בו-זמני, כל שחקן מקבל סומלייה דיגיטלי משלו בטלפון, עם אותו סוג הדרכה שהמארח היה מקבל. החדר נשאר שוויוני. היין עדיין נקרא.',
      pt: 'Às vezes ninguém quer ser o anfitrião. Ou quatro amigos querem provar ao mesmo tempo e comparar. No modo simultâneo, cada jogador tem o seu próprio sommelier digital no telemóvel, com o mesmo tipo de orientação que o anfitrião teria. A sala mantém-se igual. O vinho continua a ser lido.',
    },

  });
})();


// === v0.4.1 mode features bullet list (last unmarked block) ===
(function() {
  if (!window.TT_I18N) return;
  Object.assign(window.TT_I18N.s, {
    'sommeliers.mode1.f1': {
      en: 'Private host panel with wine briefs, tasting notes, pour order',
      fr: 'Panneau d\'hôte privé avec briefings de vins, notes de dégustation, ordre de service',
      ru: 'Приватная панель хозяина с краткими описаниями вин, дегустационными заметками и порядком розлива',
      es: 'Panel privado del anfitrión con fichas de vinos, notas de cata y orden de servicio',
      uk: 'Приватна панель господаря з описами вин, дегустаційними нотатками та порядком розливу',
      it: 'Pannello privato del padrone di casa con schede vini, note di degustazione, ordine di servizio',
      de: 'Privates Gastgeber-Panel mit Weinbriefings, Verkostungsnotizen, Schenk-Reihenfolge',
      he: 'פאנל מארח פרטי עם תקצירי יינות, הערות טעימה וסדר מזיגה',
      pt: 'Painel privado do anfitrião com briefings de vinhos, notas de prova e ordem de serviço',
    },
    'sommeliers.mode1.f2': {
      en: 'Suggested toasts at the five game moments',
      fr: 'Toasts suggérés aux cinq moments du jeu',
      ru: 'Предлагаемые тосты в пять моментов игры',
      es: 'Brindis sugeridos en los cinco momentos del juego',
      uk: 'Запропоновані тости у п\'ять моментів гри',
      it: 'Brindisi suggeriti nei cinque momenti del gioco',
      de: 'Vorgeschlagene Trinksprüche zu den fünf Spielmomenten',
      he: 'הרמות כוסית מוצעות בחמשת רגעי המשחק',
      pt: 'Brindes sugeridos nos cinco momentos do jogo',
    },
    'sommeliers.mode1.f3': {
      en: 'Settings for the room, pacing, scoring, optional reveals',
      fr: 'Paramètres pour la salle, rythme, score, révélations optionnelles',
      ru: 'Настройки зала, темпа, подсчёта, опциональных раскрытий',
      es: 'Ajustes para la sala, ritmo, puntuación, revelaciones opcionales',
      uk: 'Налаштування зали, темпу, підрахунку, опціональних розкриттів',
      it: 'Impostazioni per sala, ritmo, punteggio, rivelazioni opzionali',
      de: 'Einstellungen für Raum, Tempo, Wertung, optionale Enthüllungen',
      he: 'הגדרות לחדר, קצב, ניקוד, חשיפות אופציונליות',
      pt: 'Definições para sala, ritmo, pontuação, revelações opcionais',
    },
    'sommeliers.mode1.f4': {
      en: 'Turn timer to keep the table moving',
      fr: 'Minuteur de tour pour garder la table en mouvement',
      ru: 'Таймер хода, чтобы стол двигался',
      es: 'Temporizador de turno para mantener la mesa en movimiento',
      uk: 'Таймер ходу, щоб стіл рухався',
      it: 'Timer di turno per mantenere il tavolo in movimento',
      de: 'Zugzeit-Timer, um den Tisch in Bewegung zu halten',
      he: 'טיימר תור כדי לשמור על השולחן זז',
      pt: 'Cronómetro de turno para manter a mesa em movimento',
    },
    'sommeliers.mode1.f5': {
      en: 'Players see only what they should see',
      fr: 'Les joueurs ne voient que ce qu\'ils devraient voir',
      ru: 'Игроки видят только то, что должны видеть',
      es: 'Los jugadores solo ven lo que deben ver',
      uk: 'Гравці бачать лише те, що мають бачити',
      it: 'I giocatori vedono solo ciò che devono vedere',
      de: 'Spieler sehen nur, was sie sehen sollen',
      he: 'השחקנים רואים רק את מה שעליהם לראות',
      pt: 'Os jogadores só veem o que devem ver',
    },
    'sommeliers.mode2.f1': {
      en: 'Personal sommelier on every player\'s device',
      fr: 'Sommelier personnel sur l\'appareil de chaque joueur',
      ru: 'Персональный сомелье на устройстве каждого игрока',
      es: 'Sumiller personal en el dispositivo de cada jugador',
      uk: 'Персональний сомельє на пристрої кожного гравця',
      it: 'Sommelier personale sul dispositivo di ogni giocatore',
      de: 'Persönlicher Sommelier auf dem Gerät jedes Spielers',
      he: 'סומלייה אישי במכשיר של כל שחקן',
      pt: 'Sommelier pessoal no dispositivo de cada jogador',
    },
    'sommeliers.mode2.f2': {
      en: 'Synchronized rounds, everyone tastes the same wine at once',
      fr: 'Manches synchronisées, tout le monde déguste le même vin en même temps',
      ru: 'Синхронизированные раунды, все дегустируют одно и то же вино одновременно',
      es: 'Rondas sincronizadas, todos catan el mismo vino a la vez',
      uk: 'Синхронізовані раунди, всі дегустують одне й те саме вино одночасно',
      it: 'Turni sincronizzati, tutti degustano lo stesso vino contemporaneamente',
      de: 'Synchrone Runden, alle verkosten denselben Wein gleichzeitig',
      he: 'סבבים מסונכרנים, כולם טועמים את אותו יין בו-זמנית',
      pt: 'Rondas sincronizadas, todos provam o mesmo vinho ao mesmo tempo',
    },
    'sommeliers.mode2.f3': {
      en: 'Suggested toasts surfaced privately to each player',
      fr: 'Toasts suggérés affichés en privé à chaque joueur',
      ru: 'Предлагаемые тосты приватно показываются каждому игроку',
      es: 'Brindis sugeridos mostrados en privado a cada jugador',
      uk: 'Запропоновані тости приватно показуються кожному гравцю',
      it: 'Brindisi suggeriti mostrati privatamente a ogni giocatore',
      de: 'Vorgeschlagene Trinksprüche werden jedem Spieler privat angezeigt',
      he: 'הרמות כוסית מוצעות מוצגות באופן פרטי לכל שחקן',
      pt: 'Brindes sugeridos mostrados em privado a cada jogador',
    },
    'sommeliers.mode2.f4': {
      en: 'Group reveal at the end, no early peeking',
      fr: 'Révélation collective à la fin, pas de coup d\'œil prématuré',
      ru: 'Групповое раскрытие в конце, без подглядываний',
      es: 'Revelación grupal al final, sin miradas anticipadas',
      uk: 'Групове розкриття наприкінці, без підглядань',
      it: 'Rivelazione di gruppo alla fine, niente sbirciate anticipate',
      de: 'Gruppenenthüllung am Ende, kein vorzeitiges Spähen',
      he: 'חשיפה קבוצתית בסוף, בלי הצצות מוקדמות',
      pt: 'Revelação em grupo no final, sem espreitadelas',
    },
    'sommeliers.mode2.f5': {
      en: 'Memory of past games carries forward, your taste, refined',
      fr: 'La mémoire des parties passées se transmet, votre goût, affiné',
      ru: 'Память о прошлых играх переносится, твой вкус, отточенный',
      es: 'La memoria de partidas pasadas se traslada, tu gusto, refinado',
      uk: 'Пам\'ять про минулі ігри переноситься, твій смак, відточений',
      it: 'La memoria delle partite passate si trasmette, il tuo gusto, raffinato',
      de: 'Erinnerung an vergangene Spiele wird übertragen, dein Geschmack, verfeinert',
      he: 'זיכרון משחקים קודמים נישא קדימה, הטעם שלך, מעודן',
      pt: 'A memória de jogos passados transita, o teu paladar, refinado',
    },
  });
})();
