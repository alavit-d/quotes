//var verbs = ['creates', 'promotes', 'lives', 'harnesses', 'enjoys', 'feels', 'is', 'gives', 'believes', 'changes', 'dreams', 'lifts', 'makes'];
var adjs = ['aware', 'healthy', 'strong', 'deep', 'human', 'great', 'small', 'little', 'quiet', 'high', 'heavy', 'deep', 'calm'];
var conj = [', but', ', then', ', and', ', no', '.', ', because'];
var famous = ["Adolf Hitler ","George Washington" ,"Emperor Constantine" ,"Martin Luther ","Socrates ","Mahatma Gandhi ","Karl Marx ","Napoleon Bonaparte","Simon Bolivar ","Franklin D. Roosevelt","Charles Darwin ","Sir Isaac Newton","Confucius ","Queen Victoria ","Konrad Adenauer ","Ramses II ","Benjamin Franklin" ,"Alexander the Great","Christopher Columbus" ,"Marcus Aurelius ","Galileo Galilei ","Plato ","Joan of Arc ","Charlemagne ","Aristotle ","Saladin ","Voltaire","Charles Baudelaire","Arthut Rimbaud","Catherine the Great","Mozart","Leonardo da Vinci" ,"Louis Pasteur ","Leo Tolstoy ","Albert Einstein ","Ataturk ","Pablo Picasso ","Benedicto XVI","Margaret Thatcher" ,"Mohammed Ali","John F. Kennedy","Vladimir Putin","Simone de Beauvoir","Marc Zuckerberg","Rosa Parks","Benazir Bhutto ","J.S. Bach ","14th Dalai Lama","Malcolm X ","Lech Walesa ","Charles de Gaulle" ,"Joseph Stalin ","Marie Curie","Giuseppe Garibaldi","Johann Gutenberg" ,"Oliver Cromwell","Vladimir Ilitch Lenin ","Sigmund Freud","Mother Teresa ","Bill Gates","Ernest Hemingway" ,"John Lennon ","Genghis Kahn ","John M Keynes ","Susan B. Anthony" ,"George Orwell ","Thomas Edison ","Dwight Eisenhower","Eleanor Roosevelt ","Dr. B.R. Ambedkar","Nikola Tesla ","Alexander Fleming" ,"Samuel Johnson ","Eva Peron ","Marilyn Monroe", "Henry Ford","Princess Diana ","Oscar Wilde ","Beethoven ","Aung San Suu Kyi", 'Steve Jobs', 'Nicki Minaj', 'Mao Zedong', "Dumbledore", "Gandalf", "Joseph Goebbels", "Erwin Rommel", "Sun Tzu", "Laozi", "Darth Vader", 'Tupac'];
var pics = ['amazing-736881_640.jpg', 'birds-707348_640.jpg',  'groynes-339252_640.jpg', 'run.jpg', 'sunset-658583_640.jpg', 'bird-383245_640.jpg', 'bricks-459299_640.jpg', 'langhe-390108_1280.jpg', 'sunrise-77677_640.jpg', 'sunset-675847_1280.jpg'];
var subj3 = ['life', 'success', 'the mind', 'impact', 'wisdom'];
var subj1 = ['I'];
var subj2 = ['you', 'we', 'people'];
var subject = [subj1, subj2, subj3];
var verbs1 = ['miss the', 'am about making', 'am about', 'am living the', 'am the', 'become the', 'am not the', 'would want'];
var verbs2 = ['miss the', 'are about making', 'are about', 'are living the', 'are the', 'become the', 'are not the', 'would want'];
var verbs3 = ['misses the', 'is about making', 'is about', 'is living the', 'is the', 'becomes the', 'is not the', 'would want'];
var after = ['of man', 'of nature', 'less traveled by', 'like a tree', 'in life', 'within you', 'with humanity'];
var cplt = ['success', 'boredom', 'passion', 'risks', 'success', 'revenge', 'wisdom', 'consciousness', 'vision', 'dream', 'belief', 'money', 'time', 'challenge', 'time', 'day', 'voice'];
var great = ['wisdom', 'consciousness', 'vision', 'dream', 'belief', 'fear', 'the wise one', 'the elder', 'the philosopher', 'enlightment', 'karma'];
var political = ['marxsim', 'trostkysm', 'singularism', 'nazism', 'fascism', 'liberalism', 'imperialism'];
//@@ == Singular, !@@ == inverse of singular, ## == verb, && == plural
var sing = ['mass murder', 'human sacrifice', 'satanism', 'blood bath','dictatorship', 'masturbation with an hamster', 'sovietism', 'vibrator', 'illuminati', 'your mom'];
var oppSing = ['tax inspector','baby-boom', 'new virgin', 'mormonism', 'champagne shower', 'veganism', 'meditation', 'capitalism', 'towel', 'reptil', 'dildo in a box'];
var verb = ['blaze', 'masturbate', 'sniff', 'screw', 'inject', 'fart in your space suit'];
var phrases =
['You miss 100% of the @@ you don’t take'
,'@@ is about making an impact'
,'@@ is everything'
,'An unexamined @@ is not worth living'
,'Eighty percent of @@ is showing up'
,'The best revenge is massive @@'
,'Believe you can ## and you’re halfway there'
,'I would rather die of passion than of @@'
,'You can ## anything, but not everything'
,'Courage is not the absence of @@, but rather the judgement that something else is more important than !@@'
,'@@ is achieved, not when there is nothing more to add, but when there is nothing left to take away'
,'The richest @@ is not he who has the most, but he who needs the least'
,'To the man who only has @@, everything he encounters begins to look like a !@@'
,' We are what we repeatedly do; to ##, then, is not an act but a habit'
,' A wise man gets more use from his @@ than a fool from his !@@'
,' Do not seek to follow in the footsteps of the men of old; seek what they ##'
,' The real voyage of discovery consists not in seeking @@ but seeing with !@@'
,' Work like you don’t need money, love like you’ve never been hurt, and ## like no one’s watching'
,' Try to ## three times. Once, to get over the fear of doing it. Twice, to learn how to do it. And a third time, to figure out whether you like it or not'
,' Even if you’re on the right @@, you’ll get run over if you just sit there'];
