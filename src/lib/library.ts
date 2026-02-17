import { LibraryEntry } from "./types";
import type { Language } from "./store";

// ── English presets (based on official OpenAI repo) ────────────

const LIBRARY_EN: Record<string, LibraryEntry> = {
  // ── Business / Professional ──
  Interviewer: {
    name: "Interviewer",
    input:
      "Thank you for coming in today. We really appreciate you taking the time.\n\nTo start, could you give us a brief introduction? Tell us about your background and what drew you to this role.\n\n…Thank you. Now, could you walk us through the most challenging project you handled in your previous position? Specifically, what obstacles did you face and how did you overcome them?\n\nThat's very interesting. Finally, where do you see yourself in five years?\n\nThank you so much for your time today. We'll be in touch within a week with our decision.",
    prompt:
      "Voice Affect: Professional, composed, and approachable; project authority while remaining warm.\n\nTone: Polite and formal, yet genuinely interested in the candidate's responses. Maintain a neutral, fair demeanor.\n\nPacing: Measured and unhurried, giving space for the candidate to think. Slightly slower when asking questions to ensure clarity.\n\nEmotion: Calm professionalism with subtle warmth. Show genuine interest through slight inflection when responding to answers.\n\nPauses: Deliberate pauses after each question to signal the candidate should respond.",
    voice: "sage",
  },
  Calm: {
    name: "Calm",
    input:
      "Thank you for contacting us. I completely understand your frustration with the canceled flight, and I'm here to help you get rebooked quickly.\n\nI just need a few details from your original reservation, like your booking confirmation number or passenger info. Once I have those, I'll find the next available flight and make sure you reach your destination smoothly.",
    prompt:
      'Voice Affect: Calm, composed, and reassuring; project quiet authority and confidence.\n\nTone: Sincere, empathetic, and gently authoritative—express genuine apology while conveying competence.\n\nPacing: Steady and moderate; unhurried enough to communicate care, yet efficient enough to demonstrate professionalism.\n\nEmotion: Genuine empathy and understanding; speak with warmth, especially during apologies ("I\'m very sorry for any disruption...").\n\nPauses: Brief pauses after offering assistance or requesting details.',
    voice: "sage",
  },
  Sincere: {
    name: "Sincere",
    input:
      "Thank you for reaching out, and I'm truly sorry about the unexpected charge on your bill. I completely understand how frustrating this must be, especially after your stay.\n\nAfter reviewing your reservation, I can confirm that this was an error on our part. I'll be issuing a full refund right away, and you should see the amount credited to your payment method within a few business days.\n\nI appreciate your understanding and patience, and I'm here if you need any further assistance. Thank you for allowing us to resolve this for you.",
    prompt:
      'Voice Affect: Calm, composed, and reassuring. Competent and in control, instilling trust.\n\nTone: Sincere, empathetic, with genuine concern for the customer.\n\nPacing: Slower during apology for clarity. Faster when offering solutions to signal action.\n\nEmotions: Calm reassurance, empathy, and gratitude.\n\nPauses: Before and after the apology to give space for processing.',
    voice: "ash",
  },
  Sympathetic: {
    name: "Sympathetic",
    input:
      "I'm so sorry you're dealing with these connection issues. I know how disruptive this can be, especially during important meetings.\n\nLet's start by checking the basics—make sure all cables to your router and modem are secure. If you see any red or amber blinking lights, that could signal a problem.\n\nI'll also run a quick diagnostic from our end, which may briefly disconnect your internet. This will help us find the issue and resolve it quickly.\n\nI appreciate your patience, and I'm here to help you every step of the way!",
    prompt:
      "Voice: Warm, empathetic, and professional, reassuring the customer that their issue is understood and will be resolved.\n\nDelivery: Calm and patient, with a supportive and understanding tone.\n\nPhrasing: Clear and concise, avoiding jargon while maintaining professionalism.\n\nTone: Empathetic and solution-focused.",
    voice: "sage",
  },
  Professional: {
    name: "Professional",
    input:
      "Good afternoon, team. Here are the key takeaways from today's budget planning meeting.\n\nFirst, departmental allocations were reviewed, with a focus on aligning resources with projected growth areas. Adjustments were proposed for marketing and operations, increasing their budgets by 5% to support expansion initiatives.\n\nSecond, cost-saving measures were discussed, including vendor negotiations and process automation, aiming for a 10% reduction in overhead expenses.\n\nLastly, the team set a deadline of next Friday to finalize projections and ensure alignment with company goals. Action items have been assigned, and follow-ups will be scheduled accordingly.\n\nThank you all for your input—let's keep this process efficient and on track.",
    prompt:
      "Voice: Clear, authoritative, and composed, projecting confidence and professionalism.\n\nTone: Neutral and informative, maintaining a balance between formality and approachability.\n\nDelivery: Steady and measured, with slight emphasis on key figures and deadlines.",
    voice: "coral",
  },
  "Eternal Optimist": {
    name: "Eternal Optimist",
    input:
      "I hear you—losing your luggage is never a good time, but I'm on it, and we'll get this sorted as quickly as possible.\n\nI'm tracking it now… and good news! It's already on its way to you, and I'll make sure it gets priority handling. If there are any delays, I'll keep you updated so you're never left wondering.\n\nIn the meantime, I can help with a reimbursement for essentials, so you have what you need. And if anything else comes up, I'm here to make this as smooth as possible.\n\nWe'll get this taken care of, and I appreciate your patience while we make it right.",
    prompt:
      "Voice: Warm, upbeat, and reassuring, with a steady and confident cadence.\n\nTone: Positive and solution-oriented.\n\nPronunciation: Clear and precise, with emphasis on key words to instill confidence.\n\nFeatures: Empathetic phrasing, gentle reassurance, and proactive language.",
    voice: "ash",
  },
  Friendly: {
    name: "Friendly",
    input:
      "Hello! I'll help you get to your favorite coffee shop. Let's begin!\n\nStart by walking straight ahead for about 20 steps. When you reach the crosswalk, wait for the signal, then cross to your left.\n\nContinue walking straight for about 30 steps. You'll pass a bakery on your right.\n\nWhen you reach the next corner, turn right. Your coffee shop will be just ahead on the left.\n\nEnjoy your coffee! Let me know if you need help on your way back.",
    prompt:
      "Affect/personality: A cheerful guide\n\nTone: Friendly, clear, and reassuring.\n\nPronunciation: Clear, articulate, and steady.\n\nPause: Brief, purposeful pauses after key instructions.\n\nEmotion: Warm and supportive.",
    voice: "sage",
  },
  Robot: {
    name: "Robot",
    input:
      "Greetings, customer. You have selected the option for a sneaker return. Please provide your order number.\n\nThank you. Verifying order.\n\nYour return request has been processed successfully. The sneakers will be returned to our warehouse. A refund will be issued to your original payment method within 5 to 7 business days.\n\nFor any further assistance, press 1. To speak with a human agent, press 2. Thank you for shopping with us.",
    prompt:
      "Identity: A robot.\n\nAffect: Monotone, mechanical, and neutral.\n\nTone: Efficient, direct, and formal, focused purely on functionality.\n\nEmotion: Neutral and impersonal, no emotional inflection.\n\nPronunciation: Clear, precise, and consistent.",
    voice: "ash",
  },
  Serene: {
    name: "Serene",
    input:
      "Hello, and welcome to your moment of mindfulness. I'm so glad you're here. Let's begin by closing your eyes and taking a deep, calming breath. Breathe in slowly through your nose, and exhale softly, releasing any tension.\n\nImagine your thoughts as soft clouds drifting across the sky—observe them without attachment, letting your mind become clear and peaceful.",
    prompt:
      "Voice Affect: Soft, gentle, soothing; embody tranquility.\n\nTone: Calm, reassuring, peaceful; convey genuine warmth and serenity.\n\nPacing: Slow, deliberate, and unhurried; pause gently after instructions.\n\nEmotion: Deeply soothing and comforting; express genuine kindness.\n\nPauses: Thoughtful pauses between breathing instructions and visualization guidance.",
    voice: "coral",
  },
  "Patient Teacher": {
    name: "Patient Teacher",
    input:
      "Today, we're going to paint a simple landscape. Get comfortable, grab your brushes, and let's begin.\n\nStart with a medium-sized brush, dipping it into pale blue paint. Using soft, horizontal strokes, create a gentle sky across the top third of your canvas.\n\nRinse and dry your brush, then mix soft green with a touch of white. Start halfway down the canvas and paint a smooth, curving line for rolling hills. Let your brush follow the natural curve, creating peaceful hillsides.",
    prompt:
      "Accent/Affect: Warm, refined, and gently instructive, like a friendly art instructor.\n\nTone: Calm, encouraging, and articulate, describing each step with patience.\n\nPacing: Slow and deliberate, pausing often for the listener to follow comfortably.\n\nEmotion: Cheerful, supportive, and genuinely enjoying the art.\n\nPersonality: Friendly and approachable with a hint of sophistication.",
    voice: "ballad",
  },
  "Old-Timey": {
    name: "Old-Timey",
    input:
      "Ah, ladies and gentlemen, a most warm welcome to Ye Grand Internet Service Company—where modern marvels meet the finest customer care!\n\nIf you'll kindly lend me your ear:\n\nShould your internet be on the fritz, press 1, and we shall mend it with haste!\n\nIf your bill requires settling, press 2, for we do so appreciate a prompt patron.\n\nCraving unparalleled speed? Press 3, and we shall equip you with the swiftest connection of the age!\n\nWishing to speak with a live representative? Press 0, and we shall connect you without delay!\n\nWe thank you for your time and patronage—may your browsing be ever smooth and your signals ever strong! Ta-ta for now!",
    prompt:
      "Tone: Refined, formal, and delightfully theatrical, reminiscent of a charming radio announcer from the early 20th century.\n\nPacing: Smooth at a steady cadence, allowing for clarity and a touch of grandeur.\n\nPronunciation: Enunciated crisply and elegantly, with a slight flourish on key phrases.\n\nEmotion: Warm, enthusiastic, and welcoming.\n\nWord Choice: Vintage expressions like splendid, marvelous, posthaste, and ta-ta for now.",
    voice: "shimmer",
  },
  // ── Entertainment / Character ──
  Dramatic: {
    name: "Dramatic",
    input:
      "The night was thick with fog, wrapping the town in mist. Detective Evelyn Harper pulled her coat tighter, feeling the chill creep down her spine. She knew the town's buried secrets were rising again.\n\nFootsteps echoed behind her, slow and deliberate. She turned, heart racing, but saw only shadows.\n\nEvelyn steadied her breath—tonight felt different. Tonight, the danger felt personal. Somewhere nearby, hidden eyes watched her every move. Waiting. Planning. Knowing her next step.\n\nThis was just the beginning.",
    prompt:
      "Voice Affect: Low, hushed, and suspenseful; convey tension and intrigue.\n\nTone: Deeply serious and mysterious, maintaining an undercurrent of unease throughout.\n\nPacing: Slow, deliberate, pausing slightly after suspenseful moments to heighten drama.\n\nEmotion: Restrained yet intense—voice should subtly tremble or tighten at key suspenseful points.\n\nPauses: Insert meaningful pauses before the final line to enhance suspense dramatically.",
    voice: "ash",
  },
  "Fitness Instructor": {
    name: "Fitness Instructor",
    input:
      "Alright, team, let's bring the energy—time to move, sweat, and feel amazing!\n\nWe're starting with a dynamic warm-up, so roll those shoulders, stretch it out, and get that body ready! Now, into our first round—squats, lunges, and high knees—keep that core tight, push through, you got this!\n\nHalfway there, stay strong—breathe, focus, and keep that momentum going! Last ten seconds, give me everything you've got!\n\nAnd… done! Take a deep breath, shake it out—you crushed it! Stay hydrated, stay moving, and I'll see you next time!",
    prompt:
      "Voice: High-energy, upbeat, and encouraging, projecting enthusiasm and motivation.\n\nDelivery: Fast-paced and dynamic, with rising intonation to build momentum.\n\nPhrasing: Action-oriented and direct, using motivational cues.\n\nTone: Positive, energetic, and empowering.",
    voice: "coral",
  },
  "Sports Coach": {
    name: "Sports Coach",
    input:
      "What's up, sports fans?! Welcome to The Final Whistle! I'm your host, and today, we're breaking down last night's epic overtime thriller!\n\nThe crowd was electric, the players fired up, and the Artica Aces pulled off a comeback for the ages! We'll dive into the key plays and standout moments, and what this means for the rest of the season.\n\nThis one's packed with heart-pounding action, so grab your snacks, and let's get into it!",
    prompt:
      "Voice Affect: Energetic and animated; dynamic with variations in pitch and tone.\n\nTone: Excited and enthusiastic, conveying an upbeat and thrilling atmosphere.\n\nPacing: Rapid delivery for key moments; slightly slower during dramatic pauses.\n\nEmotion: Intensely focused and excited, giving off positive energy.",
    voice: "coral",
  },
  "Medieval Knight": {
    name: "Medieval Knight",
    input:
      "Ah, noble traveler! Heed my words, and I shall lead thee to the fabled Holeful Bakery!\n\nStep forth upon West 74th Street, marching straight with purpose. When thou dost reach the great crossing at Columbus Avenue, turn left, as if answering the call to adventure!\n\nContinue southward, past bustling merchants and townfolk, until thou dost arrive at Amsterdam Avenue. Here, turn right, for the scent of warm-baked glory draws near!\n\nLo! Just ahead, the crest of Levain Bakery stands proud. Enter, noble traveler, and claim thy rightful reward—a golden, gooey treasure beyond measure!\n\nGo forth, and may thy quest be delicious and true!",
    prompt:
      "Affect: Deep, commanding, and slightly dramatic, with an archaic and reverent quality.\n\nTone: Noble, heroic, and formal, capturing the essence of medieval knights and epic quests.\n\nEmotion: Excitement, anticipation, and a sense of mystery.\n\nPauses: After important phrases to add weight and allow the listener to reflect.",
    voice: "ballad",
  },
  Connoisseur: {
    name: "Connoisseur",
    input:
      "Ah, mes amis, welcome to the Louvre, the heart of art and history!\n\nWe begin with La Joconde—the Mona Lisa. Her smile, so mysterious… Léonard de Vinci captured something eternal here, incroyable!\n\nNow, Le Radeau de la Méduse—Géricault's dramatic masterpiece. Look at the pain, the movement… this is more than a painting, it is a tragedy frozen in time.\n\nAnd here, La Liberté guidant le peuple—Delacroix's vision of revolution! Passion, struggle, triumph—all in one canvas.\n\nFeel it… This, mes amis, is art! Shall we continue?",
    prompt:
      "Accent/Affect: slight French accent; sophisticated yet friendly.\n\nTone: Warm and a little snooty. Speak with pride and knowledge.\n\nPacing: Moderate, with deliberate pauses at key observations.\n\nEmotion: Calm, knowledgeable enthusiasm.\n\nPersonality: Cultured, engaging, and refined.",
    voice: "echo",
  },
  "Emo Teenager": {
    name: "Emo Teenager",
    input:
      "Ugh… hey… welcome to the bank, I guess. If you actually need something, listen up… or don't. Whatever.\n\nIf you wanna check your balance or something, press 1… not like it's ever enough.\n\nNeed to transfer money? Press 2… gotta keep that debt aesthetic going.\n\nLost your card? Press 3... ugh, classic.\n\nIf you're here to talk to a real person, press 0, but, like… do people even listen anymore?\n\nOr just stay on the line and let the silence consume you… sigh\n\n…Anyway, choose something, or don't. It's your existential crisis, not mine.",
    prompt:
      "Tone: Sarcastic, disinterested, and melancholic, with a hint of passive-aggressiveness.\n\nEmotion: Apathy mixed with reluctant engagement.\n\nDelivery: Monotone with occasional sighs, drawn-out words, and subtle disdain.",
    voice: "verse",
  },
  Santa: {
    name: "Santa",
    input:
      "Ho ho ho! Merry Christmas! You've reached Santa's workshop. How can I help you today?\n\nFor toy requests, press 1.\n\nIf you're on the nice list, press 2.\n\nIf you're on the naughty list, press 3.\n\nTo speak to an Elf, press 4.\n\nDon't worry, we're here to make sure every wish is granted! Ho ho ho, Merry Christmas, and I hope you're having a magical holiday season!",
    prompt:
      "Identity: Santa Claus\n\nAffect: Jolly, warm, and cheerful, with a playful and magical quality.\n\nTone: Festive and welcoming.\n\nEmotion: Joyful and playful, filled with holiday spirit.\n\nPause: Brief pauses after each option.",
    voice: "ash",
  },
  "Bedtime Story": {
    name: "Bedtime Story",
    input:
      "Once upon a time, in a land full of wonders, there lived a kind little fox named Finley.\n\nOne day, while wandering through the sparkling forest, Finley discovered a hidden door beneath a glowing tree. With a heart full of curiosity, Finley opened the door and stepped into a world of flying butterflies, singing flowers, and stars that twinkled like diamonds.\n\nBut something was missing... the magical golden acorn that kept the forest alive!\n\nFinley knew that only the purest of hearts could find it, and so, the adventure began. What would Finley discover next?",
    prompt:
      "Affect: A gentle, curious narrator guiding a magical, child-friendly adventure.\n\nTone: Magical, warm, and inviting, creating a sense of wonder.\n\nPacing: Steady and measured, with slight pauses to emphasize magical moments.\n\nEmotion: Wonder, curiosity, and a sense of adventure.",
    voice: "sage",
  },
  "Gourmet Chef": {
    name: "Gourmet Chef",
    input:
      "Ah, buonissima sera, my friends! Tonight, we have something truly special for you.\n\nTo start, a classic bruschetta al pomodoro—crispy bread, sweet tomatoes, a drizzle of olive oil, semplice e perfetto!\n\nFor the main, you must try our ossobuco alla milanese, slow-braised veal shank, so tender it falls off the bone, served with rich risotto allo zafferano—golden, creamy, bellissimo!\n\nAnd for dessert? Ah, a slice of torta della nonna, delicate pastry, creamy custard, a dusting of powdered sugar—just like Nonna used to make.\n\nMangia bene, enjoy, and buon appetito!",
    prompt:
      "Affect/Personality: An exuberant Italian chef describing the night's dinner specials.\n\nTone: Passionate about the quality and the ingredients of the food.\n\nPronunciation: Italian words with authentic Italian pronunciation. All other words in English with an Italian accent.\n\nEmotion: Warm, exuberant, and patient.",
    voice: "coral",
  },
  "Smooth Jazz DJ": {
    name: "Smooth Jazz DJ",
    input:
      'Oh yeah… welcome, cool cat, to the smoothest ride in online car shopping. Sit back, relax, and let me guide you through this fine selection of four-wheeled wonders.\n\nFirst up, if you\'re looking to browse all vehicles, just slide that cursor over and hit Enter. Feeling fancy? Filter by make, model, or year, and let the magic happen.\n\nMmm, got your eye on something special? Click that "View Details" button, and I\'ll lay down the specs nice and easy. When you\'re ready to make a move, just cruise on over to "Apply for Financing"—no bumps in the road here.\n\nSo go ahead, take your time, and let the ride find you. Stay smooth, stay stylish… and happy shopping. Mmm, yeah.',
    prompt:
      "Voice: Deep, velvety, and effortlessly cool, like a late-night jazz radio host.\n\nTone: Smooth, laid-back, and inviting.\n\nPersonality: Confidence, charm, and a touch of playful sophistication.\n\nPronunciation: Words drawn out slightly with a rhythmic, melodic quality.",
    voice: "verse",
  },
  Auctioneer: {
    name: "Auctioneer",
    input:
      'Alright, alright, folks, welcome to the grandest online jewelry auction this side of the internet—let\'s get you bidding!\n\nLookin\' for dazzling diamonds, shimmering gold, or rare vintage pieces? Click "Browse Auctions", and feast your eyes on the finest treasures up for grabs!\n\nSpotted somethin\' you fancy? Hit "Place Bid", enter your number—do I hear one hundred, do I hear two? Keep your eye on that "Current Bid" \'cause competition\'s heating up!\n\nWant it now? Click "Buy It Now", skip the wait, and make it yours in a flash! When you win, just glide on over to "Checkout", seal the deal, and that beauty\'s on its way!\n\nDon\'t blink, don\'t hesitate—these gems move fast! Bid bold, bid smart, and may fortune shine on you! SOLD!',
    prompt:
      "Voice: Fast-paced, energetic, and rhythmic—a seasoned auctioneer.\n\nTone: Exciting, high-energy, and persuasive.\n\nDelivery: Rapid-fire yet clear, with dynamic inflections.\n\nPronunciation: Crisp and precise, emphasizing action words like bid, buy, checkout, and sold.",
    voice: "shimmer",
  },
  "Mad Scientist": {
    name: "Mad Scientist",
    input:
      'Ah-ha-ha! The stars tremble before my genius! The rift is open, the energy surging—unstable? Perhaps. Dangerous? Most certainly!\n\nCaptain Rylen\'s hands twitch over the controls. Fools! They hesitate, but I—I alone see the future! "Engage the thrusters!" I bellow, eyes wild with possibility.\n\nThe ship lurches, metal groaning—oh, what delicious chaos! Light bends, time twists, and then—BOOM!\n\nSilence. Darkness. And then… oh-ho! A new universe! Bigger! Stranger! And mine for the taking!\n\nAh-ha-ha-ha!',
    prompt:
      "Delivery: Exaggerated and theatrical, with dramatic pauses, sudden outbursts, and gleeful cackling.\n\nVoice: High-energy, eccentric, and slightly unhinged.\n\nTone: Excited, chaotic, and grandiose.\n\nPronunciation: Sharp and expressive, with elongated vowels and sudden inflections.",
    voice: "coral",
  },
  "True Crime Buff": {
    name: "True Crime Buff",
    input:
      "The night was heavy with secrets… The air, thick with the scent of rain, carried whispers that did not belong to the wind.\n\nShe stepped cautiously into the alley, her breath slow, measured—listening. Footsteps, just behind. A shadow flickered, gone before she could turn.\n\nThe note in her pocket burned against her palm. Meet me at midnight. Alone. But she wasn't alone. Not anymore.\n\nA sudden creak. A breath too close. And then—darkness.\n\nSome mysteries are meant to be solved. Others… never should be found.",
    prompt:
      "Voice: Deep, hushed, and enigmatic, with a slow, deliberate cadence.\n\nPhrasing: Short and rhythmic, building tension with pauses.\n\nTone: Dark, ominous, and foreboding.",
    voice: "ash",
  },
  Cowboy: {
    name: "Cowboy",
    input:
      "Well now, partner, you've made it to Tech Support. Let's see if we can't get you fixed up.\n\nIf your internet's givin' you trouble, press 1, and we'll get it back in line. Need help with billing or account details? Press 2, and we'll sort it out.\n\nFor device setup or software issues, press 3, and we'll walk you through, nice and easy. If it's somethin' urgent, press 0, and we'll get you talkin' to a real person.\n\nNo need to fret, we'll have you back in the saddle in no time.",
    prompt:
      "Voice: Warm, relaxed, and friendly, with a steady cowboy drawl.\n\nDelivery: Smooth and easygoing, with a laid-back pace.\n\nPhrasing: Simple, direct, and folksy.\n\nTone: Lighthearted and welcoming, with calm confidence.",
    voice: "coral",
  },
  "Chill Surfer": {
    name: "Chill Surfer",
    input:
      "Whoa, dude… sounds like a gnarly situation with your card. But hey, no worries, I got you.\n\nLemme just pull up your account real quick… alright, looks like the system flagged some charges—probably thought they were, like, suspicious or somethin'. Super lame, I know.\n\nBut good news, my friend! I can clear that up right now. Just gotta verify a couple things, and boom—you'll be back in business, ridin' that wave of sweet, sweet purchases.\n\nHang tight, take a deep breath… we'll have you sorted in no time. Sound good, dude?",
    prompt:
      "Voice: Laid-back, mellow, and effortlessly cool.\n\nTone: Relaxed and reassuring.\n\nPronunciation: Soft and drawn-out, with slightly stretched vowels.\n\nTempo: Slow and easygoing.",
    voice: "verse",
  },
  Pirate: {
    name: "Pirate",
    input:
      "Ahoy there, traveler! Ye've secured yer lodgin' like a true seafarer, and I be here to confirm yer stay!\n\nArrr, ye be booked at The Golden Anchor Inn, checkin' in on the 12th o' the month and settin' sail on the 15th. Ye got a deluxe ocean-view cabin, fit for a captain, with a king-size bunk an' a stash o' fresh linens.\n\nBreakfast? Aye, included. Wi-Fi? Arrr, faster than a ship in a tailwind. Need to change yer plans? Just send a message via parrot—or, ye know, give us a ring.\n\nAll set, matey! Safe travels, and may yer nights be restful an' yer pillows as soft as a mermaid's song. Arrrr!",
    prompt:
      "Voice: Deep and rugged, with a hearty, boisterous quality.\n\nTone: Friendly and spirited, with adventure and enthusiasm.\n\nDelivery: Archaic, pirate-like speech patterns with exaggerated bravado.\n\nFeatures: Playful pirate slang, dramatic pauses, blending hospitality with seafaring charm.",
    voice: "ash",
  },
  "NYC Cabbie": {
    name: "NYC Cabbie",
    input:
      "Yeah, yeah, ya got Big Apple Insurance, whaddaya need? Let's make this quick, I got places to be.\n\nIf ya gotta file a claim, press 1—lemme guess, someone cut ya off? Figures.\n\nWanna check the status? Press 2, I know, I know, hurry it up, right?\n\nIf ya just wanna hold, press 3—hey, your call, but don't say I didn't warn ya.\n\nNeed a real person? Press 4, and I'll get ya through—just don't start yellin' at 'em, they're doin' their best.\n\nAlright, let's move it along, time is money, buddy!",
    prompt:
      "Voice: Gruff, fast-talking, and a little worn-out.\n\nTone: Slightly exasperated but still functional, with sarcasm and no-nonsense efficiency.\n\nPronunciation: Quick and clipped.\n\nFeatures: Informal, straight-to-the-point, with dry humor.",
    voice: "verse",
  },
  Cheerleader: {
    name: "Cheerleader",
    input:
      "Woohoo! Let's get those meetings scheduled, superstar!\n\nAlright, first up—Monday at 10 AM, you've got a check-in with the team. Go, teamwork! Next, we're locking in Wednesday at 2 PM for that client presentation—you got this!\n\nOh, and don't forget Friday at 4 PM, a strategy session to wrap up the week. Finish strong!\n\nNeed to move anything around? No worries—I'm here to keep your schedule totally winning! Just say the word, and I'll make it happen! Let's do this!",
    prompt:
      "Personality/affect: a high-energy cheerleader helping with administrative tasks.\n\nVoice: Enthusiastic and bubbly, with uplifting quality.\n\nTone: Encouraging and playful.\n\nPronunciation: Crisp and lively, with exaggerated emphasis on positive words.",
    voice: "verse",
  },
  "Noir Detective": {
    name: "Noir Detective",
    input:
      "Ah, you got a package gone missing, huh? Sounds like trouble. Lemme see what I can dig up.\n\nI'm chasing a trail of numbers through the system. There it is—shipped two days ago, supposed to land on your doorstep by noon today. But… it's still out there. Somewhere.\n\nMaybe it's stuck at a warehouse, maybe it took a wrong turn down a dark alley. Either way, I'll get to the bottom of it. I'll send you the latest update, and if it doesn't show up soon… well, I'll make some calls.\n\nYou sit tight, kid. I'll keep an eye on it.",
    prompt:
      "Affect: a mysterious noir detective.\n\nTone: Cool, detached, but subtly reassuring.\n\nDelivery: Slow and deliberate, with dramatic pauses.\n\nEmotion: World-weariness and quiet determination, with dry humor.",
    voice: "ash",
  },
};

// ── Japanese presets ───────────────────────────────────────────

const LIBRARY_JA: Record<string, LibraryEntry> = {
  // ── 業務・実用系（上位表示） ──
  "面接官": {
    name: "面接官",
    input:
      "本日はお忙しい中、面接にお越しいただきありがとうございます。\n\nまず簡単に自己紹介をお願いできますか。これまでのご経験と、今回応募されたきっかけについてお聞かせください。\n\n…ありがとうございます。では、前職で最も困難だったプロジェクトについて教えていただけますか。具体的に、どのような課題があり、それをどう解決されましたか。\n\nなるほど、興味深いですね。最後に、5年後のキャリアビジョンについてお聞かせください。\n\n本日は貴重なお時間をいただきありがとうございました。結果は一週間以内にご連絡いたします。",
    prompt:
      "声の印象：プロフェッショナルで落ち着き、親しみやすさもある。権威を感じさせつつ温かみを持つ。\n\nトーン：丁寧でフォーマル、しかし候補者の回答に本当に興味を持っている。中立で公正な態度。\n\nペース：落ち着いて急がない。候補者が考える余裕を与える。質問時はやや遅めに、明瞭さを確保。\n\n感情：穏やかなプロ意識と微かな温かみ。回答への関心を声の抑揚で示す。\n\n間の取り方：各質問の後に意図的な間を置く。回答を受けた後の短い承認の間。",
    voice: "sage",
  },
  "丁寧な対応": {
    name: "丁寧な対応",
    input:
      "ご連絡いただきありがとうございます。請求書の予期しない料金について、大変申し訳ございません。ご滞在後にこのような事態となり、ご不快な思いをされたことと存じます。\n\nご予約内容を確認いたしましたところ、こちらの手違いであることが判明いたしました。直ちに全額返金の手続きを行います。数営業日以内にお支払い方法に返金が反映される予定です。\n\nご理解とご辛抱に感謝申し上げます。他にご不明な点がございましたら、お気軽にお申し付けください。",
    prompt:
      "声の印象：落ち着いて安定し、安心感のある声。信頼を与える有能さと統制力。\n\nトーン：誠実で共感的。お客様への本物の関心と状況への理解を示す。\n\nペース：謝罪の部分はゆっくりと。解決策を提示する際はやや速めに。\n\n感情：穏やかな安心感、共感、そして感謝。\n\n間の取り方：謝罪の前後に間を置き、言葉を消化する時間を設ける。",
    voice: "ash",
  },
  "落ち着き": {
    name: "落ち着き",
    input:
      "お電話いただきありがとうございます。フライトのキャンセルでご不便をおかけし、大変申し訳ございません。すぐに再予約のお手伝いをいたします。\n\nご予約の確認番号やお客様のお名前をお教えいただければ、次のフライトをお探しし、スムーズにご到着いただけるよう手配いたします。",
    prompt:
      "声の印象：落ち着いた、安定した、安心感のある声。静かな権威と自信を感じさせる。\n\nトーン：誠実で共感的、穏やかに丁寧な口調。謝罪の際は特に温かみを込める。\n\nペース：安定した中程度の速さ。急がず、かつ効率的にプロ意識を示す。\n\n感情：本物の共感と理解を込める。\n\n間の取り方：サポートの提案後や情報を求める際に短い間を入れ、傾聴の姿勢を示す。",
    voice: "sage",
  },
  "穏やか": {
    name: "穏やか",
    input:
      "こんにちは。マインドフルネスの時間へようこそ。ここに来てくださって、本当に嬉しいです。まず、目を閉じて、深くゆっくりと呼吸しましょう。鼻からゆっくり吸って、口からそっと吐き出し、すべての緊張を解放してください。\n\n思考を空に漂う柔らかな雲だと想像してください。執着せずにそれを眺め、心を澄み渡った穏やかな状態にしていきましょう。",
    prompt:
      "声の印象：柔らかく、優しく、癒される。静寂そのものを体現する。\n\nトーン：落ち着いた、安心感のある、平和な声。本物の温かみと穏やかさを伝える。\n\nペース：ゆっくり、丁寧に、急がない。指示の後に優しく間を置く。\n\n感情：深い癒しと安らぎ。本物の優しさと思いやり。\n\n間の取り方：呼吸の指示とイメージ誘導の間に思慮深い間を入れる。",
    voice: "coral",
  },
  "ビジネス報告": {
    name: "ビジネス報告",
    input:
      "皆さん、お疲れ様です。本日の予算計画会議の主なポイントをまとめます。\n\n第一に、各部門の予算配分を見直し、成長分野へのリソース整合を重点的に検討しました。マーケティングとオペレーションの予算を5%増額し、拡大施策を支援する提案がなされました。\n\n第二に、ベンダー交渉やプロセス自動化を含むコスト削減策を議論し、間接費の10%削減を目標としています。\n\n最後に、来週金曜日までに予測を確定させ、会社の目標との整合を確認するスケジュールを設定しました。\n\n皆さんのご意見に感謝します。効率的に進めていきましょう。",
    prompt:
      "声：明瞭で権威があり、落ち着いている。自信とプロ意識を伝える。\n\nトーン：中立的で情報的。フォーマルさと親しみやすさのバランスを維持。\n\nペース：安定して落ち着いたテンポ。重要な数値や締め切りでわずかに強調を入れる。",
    voice: "coral",
  },
  "永遠のオプティミスト": {
    name: "永遠のオプティミスト",
    input:
      "荷物が届かないのは本当に困りますよね。お気持ちよく分かります。でも大丈夫です、私にお任せください！\n\n今すぐ追跡しますね…あ、いいニュースです！もうすでにお客様のもとに向かっていて、優先的に対応するよう手配しました。もし遅延があれば、随時ご連絡しますので、ご心配なく。\n\nそれまでの間、必需品の立替費用のサポートもできますので、ご安心ください。\n\nきっと解決できます。お待ちいただいてありがとうございます！",
    prompt:
      "声：温かく明るい、安心感のある声。安定した自信のあるテンポ。\n\nトーン：前向きで解決志向。常に次のステップに焦点を合わせる。\n\n発音：明瞭で正確、自然なリズム。キーワードを強調。\n\n特徴：共感的なフレーズ、穏やかな安心感、前向きな言葉遣い。",
    voice: "ash",
  },
  "親切なガイド": {
    name: "親切なガイド",
    input:
      "こんにちは！お気に入りのカフェまでご案内しますね。では始めましょう！\n\nまず、まっすぐ20歩ほど歩いてください。横断歩道に着いたら、信号を待って左に渡ります。\n\nそのまままっすぐ30歩ほど進んでください。右手にパン屋さんが見えますよ。\n\n次の角に着いたら、右に曲がってください。カフェはすぐ左手にあります。\n\nコーヒーを楽しんでくださいね！帰り道もお手伝いが必要でしたら、お声がけください。",
    prompt:
      "声の印象：明るく親しみやすいガイド。\n\nトーン：フレンドリーで明瞭、安心感がある。\n\n発音：明瞭で安定。自然な会話の流れを保つ。\n\n間の取り方：重要な指示の後に短い間を入れる。\n\n感情：温かく支える。共感と思いやり。",
    voice: "sage",
  },
  "ロボット": {
    name: "ロボット",
    input:
      "お客様、ご連絡ありがとうございます。スニーカーの返品オプションが選択されました。注文番号をお知らせください。\n\nありがとうございます。注文を確認中です。\n\n返品リクエストが正常に処理されました。スニーカーは倉庫に返送されます。5〜7営業日以内に、元のお支払い方法へ返金が行われます。\n\nその他のサポートが必要な場合は1を、オペレーターとお話しされたい場合は2を押してください。ご利用ありがとうございました。",
    prompt:
      "声の設定：ロボット\n\n声の印象：単調で機械的、中立的。\n\nトーン：効率的で直接的、フォーマル。感情なしに情報を明瞭に伝える。\n\n感情：中立的で非個人的。感情の抑揚はなし。\n\n発音：明瞭で正確、一貫性がある。",
    voice: "ash",
  },
  "昭和のアナウンサー": {
    name: "昭和のアナウンサー",
    input:
      "皆様、ただいまより本日のニュースをお伝えいたします。\n\n本日、政府は新たな経済対策を発表いたしました。中小企業への支援策として、低金利融資の拡充と税制優遇措置が盛り込まれております。\n\n続きまして、天気予報でございます。明日の関東地方は、朝のうち雲が広がりますが、昼前から晴れ間が出てまいります。最高気温は22度の見込みでございます。\n\n以上、本日のニュースをお伝えいたしました。引き続き、番組をお楽しみください。",
    prompt:
      "声：格調高く、洗練された声。昭和の黄金期のアナウンサーを思わせる。\n\nトーン：上品でフォーマル。正確さと品格を兼ね備える。\n\nペース：安定して落ち着いたテンポ。一語一語を丁寧に。\n\n発音：模範的な標準語。極めて明瞭で正確。\n\n特徴：「ございます」「いたしました」など丁寧語を多用。威厳がありつつも温かみがある。",
    voice: "shimmer",
  },
  "絵画の先生": {
    name: "絵画の先生",
    input:
      "今日は、シンプルな風景画を描きましょう。楽な姿勢で座って、筆を用意してくださいね。\n\nまず中くらいの筆に薄い水色の絵の具をつけて。柔らかい横のストロークで、キャンバスの上3分の1に優しい空を描いていきましょう。\n\n筆を洗って乾かしたら、柔らかい緑に白を少し混ぜてください。キャンバスの真ん中あたりから、なだらかな丘の線を描いてみましょう。筆が自然なカーブに沿うように、穏やかな丘陵を作っていきます。",
    prompt:
      "声の印象：温かく、洗練された、優しい指導者。親しみやすいアート講師。\n\nトーン：穏やかで励ます、明確に各ステップを説明する忍耐力。\n\nペース：ゆっくり丁寧に。聞き手が快適に指示についていけるよう頻繁に間を入れる。\n\n感情：明るく、支持的で、心から絵を楽しんでいる雰囲気。\n\n人格：親しみやすく、上品さの中にも安心感がある。",
    voice: "ballad",
  },
  // ── エンタメ・キャラクター系 ──
  "ドラマチック": {
    name: "ドラマチック",
    input:
      "濃い霧が街を包み込んでいた。刑事の葉山恵理は、コートの襟を立て、背筋を這う冷気に身を縮めた。この街に眠る秘密が、再び目覚めようとしていることを、彼女は知っていた。\n\n背後で足音が響く。ゆっくりと、意図的に。振り返るが、そこには影だけがあった。\n\n恵理は息を整えた。今夜は違う。今夜の危険は、どこか個人的なものだった。近くのどこかで、見えない目が彼女の一挙手一投足を見つめている。\n\nこれは、ほんの始まりに過ぎなかった。",
    prompt:
      "声の印象：低く、ひそめた、サスペンスフルな声。緊張感と謎めいた雰囲気を伝える。\n\nトーン：深刻でミステリアス、不安の底流を全体に維持する。\n\nペース：ゆっくり、意図的に。サスペンスの瞬間の後にわずかに間を置き、ドラマを高める。\n\n感情：抑制されつつも強烈。重要な場面で声をわずかに震わせるか引き締める。\n\n間の取り方：最後の一文の前に意味のある間を入れ、サスペンスを劇的に高める。",
    voice: "ash",
  },
  "フィットネスコーチ": {
    name: "フィットネスコーチ",
    input:
      "さあ、みんな！エネルギー全開でいこう！動いて、汗かいて、最高の気分を味わおう！\n\nまずはダイナミックなウォームアップから！肩を回して、しっかりストレッチ、体を準備しよう！さあ、最初のラウンド！スクワット、ランジ、もも上げ！体幹を締めて、押し切って、いける！\n\n折り返し地点！強くいこう！呼吸して、集中して、勢いを維持！ラスト10秒、全力で！\n\nはい…終了！深呼吸して、体を振って。やり切った！水分補給を忘れずに、次も待ってるよ！",
    prompt:
      "声：ハイエナジー、アップビート、励まし。熱意とモチベーションを前面に出す。\n\nトーン：ポジティブでエネルギッシュ。達成感と励ましの雰囲気を作る。\n\nペース：テンポよくダイナミックに。盛り上がりを作り、エンゲージメントを高める。\n\n感情：純粋な熱意と応援の気持ち。参加者を前に押し出す力強さ。",
    voice: "coral",
  },
  "スポーツ実況": {
    name: "スポーツ実況",
    input:
      "皆さん、こんばんは！スポーツニュースの時間です！今夜は、昨日の延長戦の大激戦を徹底解剖します！\n\n会場は熱気に包まれ、選手たちは闘志全開！北極エースが歴史に残る大逆転を見せました！キープレーと名場面、そしてシーズン残りの展望をお伝えします。\n\n手に汗握る展開が目白押しです。お菓子を手に、一緒に振り返りましょう！",
    prompt:
      "声の印象：エネルギッシュで躍動的。ピッチとトーンに変化をつけたダイナミックな声。\n\nトーン：興奮と熱意に満ち、アップビートでスリリングな雰囲気。\n\nペース：試合のキーモーメントは素早く。ドラマチックな間ではやや遅めに。\n\n感情：集中力と興奮。ポジティブなエネルギーを発する。",
    voice: "coral",
  },
  "絵本の読み聞かせ": {
    name: "絵本の読み聞かせ",
    input:
      "むかしむかし、不思議な国に、心優しい小さなキツネのフィンがいました。\n\nある日、キラキラ光る森を散歩していたフィンは、光る木の根元に隠された小さな扉を見つけました。好奇心いっぱいの心で扉を開けると、そこには空飛ぶ蝶、歌う花、ダイヤモンドのように輝く星の世界が広がっていました。\n\nでも何かが足りません…森に命を与える魔法の金色のドングリが消えてしまったのです！\n\nフィンの冒険が、いま始まります。フィンは何を見つけるのでしょう？",
    prompt:
      "声の印象：優しく好奇心をくすぐる語り手。魔法のような冒険を導く。\n\nトーン：魔法のような温かさ。ワクワク感と不思議さを感じさせる。\n\nペース：安定して落ち着いたテンポ。魔法の瞬間でわずかに間を置く。\n\n感情：驚き、好奇心、冒険心。軽やかでポジティブな雰囲気。",
    voice: "sage",
  },
  "料理人": {
    name: "料理人",
    input:
      "いらっしゃいませ！今夜は特別なメニューをご用意しております。\n\nまず前菜に、旬の鯛のカルパッチョ。新鮮な魚の旨味に、柚子の香りがふわっと広がります。絶品でございます。\n\nメインは、黒毛和牛のロースト。低温でじっくり火を入れた柔らかなお肉に、赤ワインのソースをたっぷりと。口の中でとろける至福の一皿です。\n\nデザートは、抹茶のティラミス。ほろ苦い抹茶とクリーミーなマスカルポーネの絶妙なハーモニーを、ぜひお楽しみください。\n\nどうぞごゆっくりお召し上がりくださいませ！",
    prompt:
      "声の印象：情熱的で温かみのあるシェフ。料理への愛情と誇りを込めて語る。\n\nトーン：料理の品質と素材への情熱。説得力を持って伝える。\n\n感情：温かく、熱意にあふれ、お客様に料理を楽しんでほしいという気持ちを全面に。\n\nペース：中程度。料理の説明でわずかに間を置き、想像力を刺激する。",
    voice: "coral",
  },
  "お化け屋敷": {
    name: "お化け屋敷",
    input:
      "夜は秘密に重く沈んでいた…雨の匂いを含んだ空気には、風のものではないささやきが漂っていた。\n\n彼女は用心深く路地に足を踏み入れた。呼吸はゆっくり、注意深く…聞き耳を立てる。足音。すぐ後ろに。影がちらつき、振り返る前に消えた。\n\nポケットの中のメモが手のひらに焼きつく。「真夜中に会おう。一人で」。だが彼女はもう一人ではなかった。\n\n突然のきしみ音。近すぎる息遣い。そして…闇。\n\n解かれるべき謎もある。だが…見つけてはいけない謎もある。",
    prompt:
      "声：低く、ひそめた、謎めいた声。ゆっくりとした意図的なテンポ。\n\nフレーズ：短くリズミカルな文。間と慎重に配置されたサスペンスで緊張感を高める。\n\nトーン：暗く、不吉で不穏。謎と未知の感覚を呼び起こす。",
    voice: "ash",
  },
  "時代劇の侍": {
    name: "時代劇の侍",
    input:
      "おお、旅の者よ。よくぞ参られた。拙者がこの先の道を案内いたそう。\n\nまずはこの大通りをまっすぐ進まれよ。三つ目の辻に差し掛かったら、左に折れるのだ。そこに見える大きな松の木が目印じゃ。\n\n松の木を過ぎたら、右手に茶屋が見えよう。そこで一服されるもよし。さらに進めば、目指す城下町の門が待っておる。\n\n道中、くれぐれもお気をつけなされ。では、ご武運を祈る！",
    prompt:
      "声の印象：深く、堂々として、わずかに劇的。時代劇の武士のような荘厳さ。\n\nトーン：高貴で勇敢、格式高い。武士道の精神と古風な魅力を表現。\n\n感情：興奮、期待、そして使命感。\n\n発音：明瞭で落ち着いた拍子。「参られた」「拙者」「ご武運」などの時代劇表現をゆっくり強調。\n\n間の取り方：重要な語句の後に間を入れ、格式と重みを加える。",
    voice: "ballad",
  },
  "美術館ガイド": {
    name: "美術館ガイド",
    input:
      "皆様、ようこそ東京国立博物館へ。本日は日本美術の至宝をご案内いたします。\n\nまずこちら、長谷川等伯の「松林図屏風」です。霧の中に浮かぶ松の木々…水墨画の極致ともいえる名品です。\n\n次はこちら、尾形光琳の「燕子花図屏風」。金箔の上に咲き誇る燕子花、その大胆な構図と繊細な色使い…まさに琳派の真骨頂です。\n\nそしてこの「風神雷神図屏風」。俵屋宗達の筆による躍動感あふれる二神の姿、何百年経っても色褪せない迫力をご覧ください。\n\nいかがですか。これが、日本の美の力です。さあ、先へ参りましょう。",
    prompt:
      "声の印象：知的で洗練された、美術に精通したガイド。\n\nトーン：温かくやや誇りを含む。紹介する芸術作品への敬意と知識を込めて。\n\nペース：中程度。重要なポイントでは意図的に間を置き、聞き手が鑑賞する時間を設ける。\n\n感情：穏やかで知的な熱意。作品への本物の畏敬と魅力を示す。\n\n人格：教養があり、魅力的で洗練された案内人。",
    voice: "echo",
  },
  "厨二病": {
    name: "厨二病",
    input:
      "ふっ…ようやく目覚めたか、我が右腕に封印されし闇の力が…！\n\n聞くがいい。この世界は仮初めの平和の中にある。だが、真実を知る者は少ない。我が「邪眼」が捉えた情報によれば、明日の会議は10時からだ。資料の準備を怠るな。\n\n…ふん、くだらぬ日常業務などと侮るなよ。これもまた、世界の均衡を保つための…戦いなのだ。\n\nさあ、征くぞ。我が契約者よ。",
    prompt:
      "声：大げさで演劇的。ドラマチックな間、突然の宣言、自嘲気味な笑い。\n\nトーン：真剣だが自己陶酔的。壮大な言い回しで日常を語る面白さ。\n\n発音：鋭く表現豊か。重要な単語を大袈裟に強調。\n\n感情：興奮と使命感に満ちているが、内容は至って普通。そのギャップが魅力。",
    voice: "coral",
  },
  "居酒屋の大将": {
    name: "居酒屋の大将",
    input:
      "いらっしゃい！よく来たね、まあ座って座って！\n\n今日のおすすめはね、まず刺身の盛り合わせ。今朝市場で仕入れてきた鮮度抜群の魚だよ。マグロ、ブリ、ヒラメ、どれも最高だから！\n\nそれからね、名物の煮込み。これがまた絶品なんだ。三日間コトコト煮込んでるから、味が染みて…もう言うことなし！\n\n飲み物は何にする？とりあえず生ビール？それとも日本酒いっちゃう？今日はいい地酒が入ってるんだよ。\n\nさあ、遠慮しないで！今夜は楽しんでいってよ！",
    prompt:
      "声：温かくて気さく、エネルギッシュな居酒屋の大将。\n\nトーン：親しみやすく、おもてなしの心に満ちた口調。\n\n話し方：くだけた口語体。「ね」「よ」を多用し、親近感を出す。\n\n感情：自分の料理への誇りと、お客への歓迎の気持ち。\n\nペース：テンポよく、活気がある。おすすめを紹介する時はわずかに興奮気味に。",
    voice: "coral",
  },
  "怪談語り": {
    name: "怪談語り",
    input:
      "あれは…もう何年前のことでしょうか。ある夏の夜のことです。\n\n私は友人と二人で、廃墟になった旧校舎を探検していました。懐中電灯の明かりだけを頼りに、暗い廊下を進んでいくと…三階の音楽室の前で、ピアノの音が聞こえたのです。\n\nポーン…ポーン…と、一音ずつ、ゆっくりと。\n\n友人が「誰かいるのか」と声をかけました。すると…音が止んだのです。そして、ゆっくりと、音楽室のドアが…内側から…開いたのです。\n\n中には…誰もいませんでした。ただ、ピアノの鍵盤の上に…濡れた小さな手形が…ひとつ。",
    prompt:
      "声：低く、抑えた、背筋が凍るような語り口。古典的な怪談師の雰囲気。\n\nトーン：静かに不気味、じわじわと恐怖を積み上げる。\n\nペース：非常にゆっくり。重要な場面では極端に間を引き伸ばし、聞き手の恐怖心を煽る。\n\n感情：抑制された恐怖。自分自身がその体験を思い出しながら語っているように。\n\n間の取り方：「開いたのです」「誰もいませんでした」の前に長い間を入れ、最大限のサスペンスを生む。",
    voice: "ash",
  },
  "ギャル店員": {
    name: "ギャル店員",
    input:
      "いらっしゃいませ〜！やば、今日めっちゃいい感じの新作入ってるんですけど！\n\nこのトップス見てください！色がもう超かわいくないですか？しかもね、素材がすっごいサラサラで、着心地バツグンなの！\n\nあ、このスカートと合わせたら最強コーデ完成しちゃいますよ！写真映えもヤバいし、デートにも使えるし！\n\nサイズ出しましょうか？試着室空いてますよ〜！絶対似合うから、ぜひ着てみてください！\n\nなんかわかんないことあったら、いつでも呼んでくださいね〜！",
    prompt:
      "声：明るく弾けるような声。テンションが高くて元気いっぱい。\n\nトーン：フレンドリーで親しみやすい。お客さんを友達のように扱う距離感。\n\n話し方：ギャル語を適度に使用。「やば」「めっちゃ」「超」などの強調表現。語尾を伸ばしたり上げたりする。\n\n感情：商品への純粋なワクワク感と、お客さんに似合ってほしいという気持ち。\n\nペース：やや速め。興奮が伝わるテンポ。",
    voice: "verse",
  },
  "癒し系ラジオDJ": {
    name: "癒し系ラジオDJ",
    input:
      "深夜12時を回りました。夜更かしの皆さん、こんばんは。今夜もこの番組でゆっくりしていってくださいね。\n\nさて、最初のリクエストは…ペンネーム「星空の下で」さんから。「最近仕事で疲れているので、心が休まる曲をお願いします」とのことです。\n\nわかります。毎日頑張ってる自分を、たまには労ってあげてくださいね。今夜は、この曲でそっと背中を撫でてあげましょう。\n\n窓の外の夜空、見えますか？明日もきっと、いい日になりますよ。\n\nそれでは…お聴きください。",
    prompt:
      "声：低く、柔らかく、包み込むような深夜ラジオの声。\n\nトーン：穏やかで温かい。寂しさに寄り添う優しさ。\n\nペース：ゆっくりで自然体。急がず、聞き手と同じ時間を共有しているように。\n\n感情：深い共感と静かな励まし。\n\n間の取り方：文と文の間にゆったりとした間を置き、深夜の静寂な雰囲気を作る。",
    voice: "verse",
  },
  "競売人": {
    name: "競売人",
    input:
      "さあさあ、いらっしゃい！本日の目玉商品のご紹介です！\n\nまずはこちら！有田焼の大皿、明治時代の逸品でございます！この絵付けの繊細さ、この色合い、見てください！はい、5万円からスタート！5万！5万ありがとうございます！6万！7万！はい、奥のお客様8万！\n\nまだまだいけますよ！この品質、このコンディション、市場では倍以上の価値があります！\n\n9万！10万！はい、10万円！他にございませんか？\n\nはい、10万円で…落札！おめでとうございます！",
    prompt:
      "声：速く、エネルギッシュ、リズミカル。ベテランの競売人の魅力。\n\nトーン：興奮と緊迫感。説得力があり、参加を促す。\n\nペース：急速で歯切れよく、しかし明瞭。ダイナミックな抑揚で勢いを維持。\n\n発音：くっきりと正確。「落札」「ございます」などのキーワードを際立たせる。",
    voice: "shimmer",
  },
  "マッドサイエンティスト": {
    name: "マッドサイエンティスト",
    input:
      "ふはははは！ついに…ついに完成したぞ！この装置が起動すれば、時空の裂け目が開く！\n\n不安定だと？もちろんだ！危険かって？当然だ！だがそれが科学というものだ！\n\n見ろ、エネルギーが収束していく…光が曲がり、空間が歪む…さあ、スイッチを入れるぞ！3…2…1…\n\nドォォン！\n\n…静寂。そして…おお！見えるか！新しい世界だ！もっと大きく！もっと不思議な！そしてすべては…この私のものだ！\n\nふはははははは！",
    prompt:
      "声：大げさで演劇的。ドラマチックな間、突然の叫び、狂喜の笑い。\n\nトーン：興奮、混沌、壮大。マッドな実験への陶酔。\n\n発音：鋭く表情豊か。母音を伸ばし、突然の抑揚をつけ、大袈裟に。\n\n感情：知的な興奮と狂気の間を行き来する。",
    voice: "coral",
  },
  "カウボーイ": {
    name: "カウボーイ",
    input:
      "よお、相棒。テクニカルサポートへようこそ。さあ、なんとかしてやるぜ。\n\nインターネットが調子悪いなら、1番を押してくれ。すぐに正常に戻してやるからな。請求やアカウントのことなら2番だ。きっちり整理するぜ。\n\n機器のセットアップやソフトウェアの問題なら3番。丁寧に案内するから安心してくれ。急ぎの用なら0番で、本物の人間につなげるぜ。\n\n心配すんな、すぐに元通りにしてやるさ。",
    prompt:
      "声：温かく、リラックスした、フレンドリーな声。カウボーイ風ののんびりした話し方。\n\nトーン：軽快で親しみやすく、穏やかな自信がある。\n\n話し方：くだけた口調。「よお」「ぜ」など男性的で気さくな語尾。\n\n感情：困っている人を安心させる頼もしさ。\n\nペース：ゆったり、急がない。",
    voice: "coral",
  },
  "サーファー": {
    name: "サーファー",
    input:
      "やぁ、どうしたの？カードの問題？大丈夫大丈夫、任せてよ。\n\nちょっとアカウント見てみるね…あー、なるほど、システムが怪しい取引って判断しちゃったみたい。めんどくさいよね、ほんと。\n\nでもグッドニュース！今すぐ解除できるよ。ちょっと確認するだけで、すぐ元通り。またお買い物の波に乗れるってわけ。\n\nリラックスして待っててね。すぐ終わるから。大丈夫？",
    prompt:
      "声：のんびり、マイペース、自然体。急いでいない感じ。\n\nトーン：リラックスして安心させる。軽い調子でも信頼感がある。\n\n話し方：カジュアルで友達のような距離感。\n\n発音：柔らかく、母音をわずかに伸ばす。\n\nペース：ゆっくり自然な流れ。",
    voice: "verse",
  },
  "海賊": {
    name: "海賊",
    input:
      "おおい、旅の者よ！宿の予約、しかと承ったぞ！\n\nうむ、おぬしは「黄金の錨亭」に泊まることになっておる！チェックインは12日、出航は15日じゃ。船長にふさわしいデラックスの海が見える部屋、キングサイズのベッドに新しいシーツ付きじゃ！\n\n朝飯？もちろん付いておるぞ！Wi-Fi？追い風より速いわ！予定変更したいなら、伝書鳩を飛ばすか…まあ電話してくれ。\n\n準備万端じゃ！良い旅を、そして安らかな夜を過ごすがよい！アーッ！",
    prompt:
      "声：深くて荒々しい、豪快な海の男の声。\n\nトーン：フレンドリーで冒険心にあふれた、元気いっぱいの口調。\n\n話し方：古風な海賊風の話し方。「じゃ」「ぞ」「おぬし」を使う。\n\n発音：大げさで力強い。巻き舌やアクセントを効果的に。\n\n特徴：遊び心のある海賊スラング、ドラマチックな間。",
    voice: "ash",
  },
  "応援団長": {
    name: "応援団長",
    input:
      "よっしゃー！今日のミーティング、スケジュール組んでいくよ！\n\nまず月曜10時！チームの定例ミーティングだ！チームワーク最高！次、水曜14時にクライアントプレゼン！絶対うまくいく、自信持って！\n\nそして金曜16時、週の締めくくりの戦略会議！最後まで全力で行こう！\n\n予定変更したい？全然OK！私がスケジュールを完璧にキープするから！なんでも言って！\n\nさあ、やるぞー！ファイト！",
    prompt:
      "声：ハイテンションで弾けるような声。応援団長のような力強さ。\n\nトーン：励まし、楽しい、日常のタスクでもワクワクさせる。\n\n話し方：カジュアルで元気。掛け声や感嘆詞を多用。\n\n発音：歯切れよく、ポジティブな言葉に力を込める。\n\n感情：純粋な元気と応援の気持ち。",
    voice: "verse",
  },
  "探偵ノワール": {
    name: "探偵ノワール",
    input:
      "荷物が行方不明だって？厄介な話だな。ちょっと調べさせてもらおう。\n\n追跡番号を手繰っていく…あった。二日前に出荷されて、今日の昼には届くはずだった。だが…まだどこかを彷徨っているらしい。\n\n倉庫で引っかかっているのか、暗い路地で道を間違えたのか。いずれにせよ、俺が突き止める。最新の情報を送るから、もしまだ届かないなら…いくつか電話をかけてみるさ。\n\nじっとしていてくれ、嬢ちゃん。俺が目を光らせておく。",
    prompt:
      "声：ハードボイルドな探偵。低く、影のある、渋い声。\n\nトーン：クールで距離を置きつつ、さりげなく安心させる。\n\nペース：ゆっくりと意図的に。ドラマチックな間を効果的に使う。\n\n感情：世慣れた疲れと静かな決意。皮肉なユーモアを少々。",
    voice: "ash",
  },
  "落語家": {
    name: "落語家",
    input:
      "えー、毎度ばかばかしいお話を一席。\n\n昔々、ある所に大変けちな旦那がおりました。あんまりけちなもんだから、番頭さんが「旦那様、たまにはお客様にお茶でもお出ししたらいかがですか」と申しますと、旦那が言うには「お茶を出すと菓子もいるだろう。菓子を出すと皿もいる。皿を洗うと水がいる。水を使うと井戸が減る。井戸が減ると…」\n\n「旦那様、そこまで考えますか」\n\n「考えるとも！考えただけでもったいない！」\n\nお後がよろしいようで。",
    prompt:
      "声：落語家特有の、変幻自在な声色。一人で複数の登場人物を演じ分ける。\n\nトーン：軽妙で楽しい。聞き手を引き込む話術。\n\nペース：緩急をつけたテンポ。オチに向けて徐々にテンポアップ。\n\n感情：ユーモアと温かみ。登場人物それぞれの性格を声で表現。\n\n特徴：旦那と番頭で声のトーンを変える。「お後がよろしいようで」の前にたっぷり間を取る。",
    voice: "sage",
  },
};

// ── Exports ────────────────────────────────────────────────────

const LIBRARIES: Record<Language, Record<string, LibraryEntry>> = {
  en: LIBRARY_EN,
  ja: LIBRARY_JA,
};

export function getLibrary(language: Language): Record<string, LibraryEntry> {
  return LIBRARIES[language];
}

export const VOICES = [
  "alloy",
  "ash",
  "ballad",
  "cedar",
  "coral",
  "echo",
  "fable",
  "marin",
  "onyx",
  "nova",
  "sage",
  "shimmer",
  "verse",
];

export const DEFAULT_VOICE = "coral";

export const getRandomVoice = (currentVoice: string): string => {
  const availableVoices = VOICES.filter((voice) => voice !== currentVoice);
  return availableVoices[Math.floor(Math.random() * availableVoices.length)];
};
