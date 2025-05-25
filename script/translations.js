const translations = {
    pt: {
        // Títulos e navegação
        'title': 'NBA News',
        'nav-home': 'Home',
        'nav-doncic': 'Luka Doncic',
        'nav-davis': 'Anthony Davis',
        'doncic-title': 'Luka Doncic',
        'davis-title': 'Anthony Davis',

        // Página inicial
        'main-heading': 'Troca bombástica na NBA 🚨🚨🚨',
        'trade-news': 'Trocado com o Dallas Mavericks por Anthony Davis, esloveno pode estrear na próxima segunda, dia 10. Ele se recupera de distensão muscular e vai usar o número 77 no time da Califórnia.',
        'number-question': 'QUAL NÚMERO LUKA VAI JOGAR?',
        'number-answer': 'Doncic usará o habitual número 77 nos Lakers. O anúncio foi feito pela própria franquia no último domingo. O superstar popularizou o número incomum do basquete durante sua carreira na NBA.',
        'salary-question': 'QUANTO O ASTRO VAI GANHAR?',
        'salary-answer': 'Luka Doncic estava elegível para assinar um contrato de US$ 345 milhões (o equivalente a R$ 2 bilhões) por cinco anos com os Mavs. Porém, com a mudança para o Lakers, Doncic deve fechar um contrato de no máximo US$ 229 milhões (cerca de R$ 1 bilhão).',

        // Página do Doncic
        'doncic-intro': 'Luka Dončić (Ljubljana, 28 de fevereiro de 1999) é um basquetebolista esloveno que atua como ala-armador. Atualmente joga no Los Angeles Lakers, na National Basketball Association. Foi escolhido pelo Atlanta Hawks na 3ª escolha no Draft da NBA de 2018, em seguida trocado para os Dallas Mavericks por Trae Young. Em 30 de abril de 2015, com apenas 16 anos e 2 meses, estreiou na Liga ACB com a primeira equipe do Real Madrid, convertendo-se no jogador mais jovem em debutar com o Real Madrid na história. É considerado um dos jogadores mais promissores da NBA na atualidade. Em seu primeiro ano foi escolhido o Rookie of the year da liga e em 3 anos já foi selecionado duas vezes para o NBA All-Star Game e duas vezes para o primeiro time do All-NBA Team.',
        'doncic-highlights': 'Luka Magic Highlights',

        // Página do Davis
        'davis-intro': 'Anthony Marshon Davis Jr. (Chicago, 11 de março de 1993) é um basquetebolista estadunidense que atua como ala-pivô ou pivô. Atualmente defende o Dallas Mavericks na NBA. Davis se destacou no basquete universitário da NCAA jogando pelo Kentucky Wildcats e foi posteriormente selecionado na primeira posição no draft da NBA de 2012, passando a integrar o elenco do New Orleans Pelicans.',
        'davis-highlights': 'AD Highlights',

        // Formulário de contato
        'contact-title': 'Entre em Contato',
        'name-label': 'Nome',
        'email-label': 'Email',
        'message-label': 'Mensagem',
        'submit-button': 'Enviar',

        // Mensagens de validação
        'form-required': 'Por favor, preencha todos os campos.',
        'form-email': 'Por favor, insira um email válido.',
        'form-success': 'Mensagem enviada com sucesso!',

        // Botões de compartilhamento
        'share-text': 'Confira esta notícia da NBA!',

        'form-validation-required': 'Por favor, preencha todos os campos.',
        'form-validation-email': 'Por favor, insira um email válido.',
        'form-submitted': 'Formulário enviado com sucesso!',
        'language': 'Idioma'
    },
    en: {
        // Titles and navigation
        'title': 'NBA News',
        'nav-home': 'Home',
        'nav-doncic': 'Luka Doncic',
        'nav-davis': 'Anthony Davis',
        'doncic-title': 'Luka Doncic',
        'davis-title': 'Anthony Davis',

        // Home page
        'main-heading': 'Shocking NBA Trade 🚨🚨🚨',
        'trade-news': 'Traded from the Dallas Mavericks for Anthony Davis, the Slovenian may debut next Monday, the 10th. He is recovering from a muscle strain and will wear number 77 for the California team.',
        'number-question': 'WHAT NUMBER WILL LUKA WEAR?',
        'number-answer': 'Doncic will wear his usual number 77 for the Lakers. The announcement was made by the franchise last Sunday. The superstar has popularized the unusual basketball number throughout his NBA career.',
        'salary-question': 'HOW MUCH WILL THE STAR EARN?',
        'salary-answer': 'Luka Doncic was eligible to sign a $345 million (equivalent to R$ 2 billion) five-year contract with the Mavs. However, with the move to the Lakers, Doncic is expected to sign a contract worth a maximum of $229 million (about R$ 1 billion).',

        // Doncic page
        'doncic-intro': 'Luka Dončić (Ljubljana, February 28, 1999) is a Slovenian basketball player who plays as a forward-guard. He currently plays for the Los Angeles Lakers in the National Basketball Association. He was chosen by the Atlanta Hawks with the 3rd pick in the 2018 NBA Draft, then traded to the Dallas Mavericks for Trae Young. On April 30, 2015, at just 16 years and 2 months old, he made his ACB League debut with Real Madrid\'s first team, becoming the youngest player to debut with Real Madrid in history. He is considered one of the most promising players in the NBA today. In his first year, he was chosen as the league\'s Rookie of the Year, and in 3 years, he has already been selected twice for the NBA All-Star Game and twice for the All-NBA First Team.',
        'doncic-highlights': 'Luka Magic Highlights',

        // Davis page
        'davis-intro': 'Anthony Marshon Davis Jr. (Chicago, March 11, 1993) is an American basketball player who plays as a power forward or center. He currently plays for the Dallas Mavericks in the NBA. Davis stood out in NCAA college basketball playing for the Kentucky Wildcats and was later selected first overall in the 2012 NBA draft, joining the New Orleans Pelicans roster.',
        'davis-highlights': 'AD Highlights',

        // Contact form
        'contact-title': 'Contact Us',
        'name-label': 'Name',
        'email-label': 'Email',
        'message-label': 'Message',
        'submit-button': 'Send',

        // Validation messages
        'form-required': 'Please fill in all fields.',
        'form-email': 'Please enter a valid email.',
        'form-success': 'Message sent successfully!',

        // Share buttons
        'share-text': 'Check out this NBA news!',

        'form-validation-required': 'Please fill in all fields.',
        'form-validation-email': 'Please enter a valid email.',
        'form-submitted': 'Form submitted successfully!',
        'language': 'Language'
    }
};

// Helper function to get translation
function getTranslation(key) {
    const language = getCurrentLanguage();
    return translations[language][key] || key;
}

// Helper function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
} 