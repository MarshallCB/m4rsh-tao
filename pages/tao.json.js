// Export a JSON string with each text converted to an array of trimmed lines

let transform = (chapters) => (
  JSON.stringify(
    chapters.map(({ chapter, text }) => 
      ({
        number: chapter,
        text: text.split('\n').map(line => line.trim()).filter(line => line.length > 0)
      })
    )
  )
)

// TODO: replace / choices
// TODO: replace [] words
// TODO: replace “ ”

export default transform([
  {
    chapter: 1,
    text: `
      The Dao that can be stated, is not the eternal Dao;
      The name that can be named, is not the eternal name.
      The nameless is the origin of heaven and earth;
      The named is the mother of the myriad things.
      So,
      By constantly having no desire one views its wonders;
      By constantly having desire, one views its limits.
      These two have the same origin, but they differ in name;
      Both are called Mystery.
      One Mystery plus another Mystery, is the source of all wonders.
    `
  },
  {
    chapter: 2,
    text: `
      If everybody knows what beauty is,
      then beauty is not beauty anymore;
      If everybody knows what goodness is,
      then goodness is not goodness anymore.
      Therefore,
      Being and nothing give birth to one another,
      Hard and easy are mutually formed,
      Long and short shape each other,
      High and low complement each other,
      Music and voice are harmonized with each other,
      Front and back follow one another.
      Hence,
      The sage focuses on non-action in his works,
      Practices not-saying in his speech,
      The myriad things arise but are disregarded
      The sage produces but does not own
      Acts but does not claim
      Accomplishes work but does not focus on it
      Does not focus on it, and thus it does not go.
    `
  },
  {
    chapter: 3,
    text: `
      Not to quest for wealth
      will keep the people from rivalry.
      Not to prize things that are hard to come by
      will keep the people from becoming thieves.
      Not to manifest what you like and desire
      will make popular sentiments undisturbed.
      So, in the sages' peaceful and tranquil world,
      People's state of mind is calm,
      People live with enough food
      People's aspirations are lowered,
      People's physiques are strong;
      People will be unknowing, undesiring,
      And even the knowing ones will never dare to act,
      Action without action.
      There is nothing not done.
    `
  },
  {
    chapter: 4,
    text: `
    The Dao is empty,
    But when using it, it is impossible to use it up.
    It is profound, seems like the root of the myriad things.
    Blunts its own sharpness.
    Unravels its own fetters.
    Harmonises its own light.
    Mixes with its own dust.
    It is unclear, but seems to have existed there.
    I do not know whose son it is,
    Maybe it was already created before the creator.
    `
  },
  {
    chapter: 5,
    text: `
    The sky and the earth do not care,
    They regard the myriad things as straw dogs;
The sage does not care,
    He regards people as straw dogs.
The space between the sky and the earth, how much is it like large bellows!
    Empty but endless,
    Just move and wind will be produced;
    Much talk soon comes to nothing.
    It is better to be in between extremes.
    `
  },
  {
    chapter: 6,
    text: `
    The valley-spirit will not die, this is the primal mother.
    The gate of the primal mother is the root of the world.
    She unceasingly exists, her influence is without effort.
    `
  },
  {
    chapter: 7,
    text: `
    The sky and the earth / The universe is eternal.
    The reason for the eternal of the sky and the earth/the universe
       Is they are not being/existing alone,
       So they are eternal.
    Because of this, The sages put their selves behind all other people,
       Yet it is before all others he shall eventually stand.
    They were indifferent to the discomforts and dangers.
       Yet it is he who shall thus survive.
    It is none other than that they do not demand self.
       Yet it is he eventually who shall achieve for self.
    `
  },
  {
    chapter: 8,
    text: `
    The best quality/character is like water.
    The water's goodness is that it benefits the myriad things but does not quarrel,
    and it willingly goes to where others hate,
    Thus it is almost like the Tao.
 It is good to be/live on the ground,
    to deepen a heart,
    to love people while associating with them.
    to keep one's word while talking,
    to be peace while governing,
    to do what one is capable of,
    to act at a fit time.
    Because of the non-fighting-over,
    there will be no blame.
    `
  },
  {
    chapter: 9,
    text: `
    Rather than pour into a cup overflowed, It is better to stop it.
    To hammer and to sharpen, it will not be long to be broken.
    One cannot keep in eternal hiding a hall brimming with riches.
    The man arrogant from enormous wealth buries disaster upon his road.
    Removing after succeeding fits in with the Dao/principle of the universe.
    `
  },
  {
    chapter: 10,
    text: `
    If soul have been keeping on not being felt by the body,
    How can the body and the soul not part?
 Trying lungs to show [they are] delicate,
    How can they be like babies?
 Clean the mirror of ultimate source,
    How can they not found their defect?
 To love people and to govern the country,
    How not to appoint the wise people?
 The gate of the heaven shuts and opens alternately and frequently,
    How to act like females?
 Have known all the causes and effects,
    How to keep doing only the backlog of things?
 Quicken them, feed them,
    Produce and do not own.
    Act and do not claim.
    Raise and do not rule.
 This is called profound virtue.
    `
  },
  {
    chapter: 11,
    text: `
    Put thirty spokes together to one hub,
    The original empty space makes the use of wheel.
 Knead clay into vessels,
    The original empty space makes the use of vessel.
 Shape door and windows for a house/room,
    The original empty space makes the use of house/room.
 So the things that are made are only conditions,
    What [we] are using is still the original empty space.
    `
  },
  {
    chapter: 12,
    text: `
    The beautiful colors blind people's eyes,
    The appealing music stun people's ears
    The delicious flavors make people's mouth numb,
    To indulge in hunting makes people's heart wild,
    To pursue rare treasures makes people's behavior improper.
    So, as the sage attends to the inner world, not the outer world,
    Throw away the latter and adopt the former.
    `
  },
  {
    chapter: 13,
    text: `
    To appoint the person that is ploughed under is the same as to surprise [them],
    Respecting trusted subordinate is the same as respecting oneself.
    Why to appoint the person that is ploughed under is the same as to surprise [them]?
       Because to appoint is to regard the person as a subordinate,
       Getting appointed is being surprised, Being disfavored is also being surprised,
       This is why.
    Why respecting trusted subordinate is the same as respecting oneself?
    The reason that I have these trusted subordinate is I care about myself.
       If I do not care about myself, what trusted subordinate do I have?
    So, If [you] can change respecting yourself into respecting the world,
       then the world will be able to be reposed in you;
       If [you] can change loving yourself into loving the world,
       then the world will be able to be reposed in you.
    `
  },
  {
    chapter: 14,
    text: `
    That which is looked at yet never seen is known as invisible,
    That which is listened to yet never heard is known as soundless,
    And that which is grasped yet never touched is known as intangible.
 The origin of these three can not be observed, so mix them and form a unity.
    Above, it is not lit; Below, it is not dark.
 The Dao cannot be named by common rules, as it returns to its origin,
    It is the shape of the original shape, the image of the original object,
       This is blur and profound.
    Step forward, cannot see its beginning; Follow it, cannot see its end.
 Hold the ancient Dao to know the present things, and thus know the ancient beginnings,
    This is the principle of the Dao.
    `
  },
  {
    chapter: 15,
    text: `
    Once upon a time, those who knew the Way, were a mysterious and subtle people,
    Transient yet profound, tranquil yet utterly unfathomable.
    Since they are inexplicable, I can only tell what they seem like:
    Cautious, as if wading through a winter river,
    Wary, as if afraid of their own neighbors.
    Grave, like the courteous house guests.
    Elusive, as of melting ice.
    Pure and natural, as of unchiseled gems.
    Wide and open, as of a deep valley.
    Yet mysterious, oh yes, they were like troubled water.
    Who can remain tranquil amidst troubled airs, that calmness may flow from within?
    Who may remain at peace eternal, that motion would yield birth to nature?
    For those who follow the Way, fulfillment has never been their aim.
    Only as they are forever unfulfilled, can such freshness be ever renewed.
    `
  },
  {
    chapter: 16,
    text: `
    Immersed within the heart of the void, keep tranquility's essence.
    The myriad things together arise,
    I thereby perceive their returning.
 Now things flower, and in flowering each one returns to the source,
    The returning to the source is called tranquillity,
    This is the returning to destiny,
    The returning to destiny is the eternal,
    To know the eternal is wisdom,
    When one does not know wisdom, disaster arises!
 Knowing the eternal is wide-ranging,
    Wide-ranging means open-minded,
    Open-minded means royal,
    Royal means heavenly,
    Heavenly means the Dao,
    The Dao means everlasting.
 Bodiless and without form, cannot wither or perish.
    `
  },
  {
    chapter: 17,
    text: `
    Great rulers are hardly known by their subjects,
    Then come those the people draw near and praise,
    Then those the people hold in fear,
    Then those the people revile.
    When one lacks trust, one finds no trust.
Reluctantly, without boasting;
Perform actions, accomplish deeds;
The people will say it happened naturally.
    `
  },
  {
    chapter: 18,
    text: `
    When the Dao is lost, so there arises benevolence and righteousness.
    When prudence and wisdom appear, there is great hypocrisy.
    When family relations are not right, there is filial piety and paternal affection.
    When the state is confused and chaotic, there is loyalty and faithfulness.
    `
  },
  {
    chapter: 19,
    text: `
    Abandon holiness, relinquish prudence; the people will flourish a hundredfold,
    Abandon benevolence, relinquish righteousness; and people will return to filial piety and affection.
    Abandon cleverness, relinquish gain; and thieves and robbers will not appear.
        As I know such three to be no mere words,
        Stay true to that which is reliable.
        Recognise simplicity, embrace purity,
        Lessen the self, diminish desires.
    `
  },
  {
    chapter: 20,
    text: `
    Discard conventional doctrines and be relieved from anxieties.
    Approval or flattery, what difference does it make?
    Good or evil, what difference does it take?
    Just because the people are at awe, you cannot be indifferent?
    Ridiculous! Ungrounded!
    When everyone is celebrating and joyous,
    As if relishing a spiritual triumph,
    As if enjoying a victorious feast.
    I alone am peaceful! Contemplating the myriad future,
    Dazed like a newborn child,
    Seizing the moment! Pondering the uncertainties.
    When everyone feels lavished,
    I alone am hollowed.
    I am a fool! Confounded!
    When everyone seemed enlightened, I alone am in suspense;
    When everyone is watchful, I alone become restful.
    Enigmatic! Like the obscure twilight,
    Desolate! Like the infinite universe.
    When everyone is focused, I alone am playful and trivial.
    I alone am different from the common,
    I find refuge in the womb of this profound conception.
    `
  },
  {
    chapter: 21,
    text: `
    Where the greatest Virtue resides,
    Only the Dao may reveal.
    Things that bestow the Dao,
    Radiates such liberty, such easiness.
    Eased! Liberated from its form, yet fashioned;
    Liberated! At ease with its position, yet poised.
    Mesmerizing! Mysterious!
    Brilliance from within;
    Its brilliance so enlightening, it exemplifies the truth.
    Traversing through all times,
    Its name is not diminished,
    Amassing all marvels of human intelligence.
    How do I know the essence of all marvels?
    By observing things that bestow the Dao.
    `
  },
  {
    chapter: 22,
    text: `
    Fractured, one asserts unity,
    Crooked, one acts straight,
    Depressed, one appears fulfilled,
    Exhausted, one exhibit freshness,
    Ignorant, one expresses intelligence,
    Excessive, one becomes delusive,
    Hence, the master maintains integrity,
    And sets an example for the people.
    Profess not and reveal enlightenment,
    Contend not and lavish brilliance,
    Proclaim not and win praises,
    Dignify not and garner respect.
    The master contests not,
    Therefore is uncontested.
    “Fractured, one asserts unity”,
    Such timeless truth!
    With genuine integrity, one rediscovers self.
    `
  },
  {
    chapter: 23,
    text: `
    Less spoken, words speak for themselves naturally.
    Therefore gusts cannot chill the exuberant day,
    Showers cannot turn day to dusk.
    Why is it so?
    Even the heaven and earth cannot counter its own force,
    Let alone people?
    Therefore those engaged with the Dao takes pleasure that,
    The Taught is the Dao,
    The Virtuous is the Virtue,
    The perplexed is perplexity.
    At one with the Dao, the Dao is welcoming;
    At one with Virtue, Virtue be appreciating;
    At one with perplexity, perplexity be gratifying.
    Lack of belief,
    Explains the disbelief in this futility.
    `
  },
  {
    chapter: 24,
    text: `
    Ones who reach do not stand,
    Ones who stride do not pace,
    Ones self-seeing are not enlightened,
    Ones self-possessed are not established.
    Ones self-asserted are without accomplishments,
    Ones self-esteemed are without respect.
    These according to the Dao,
    Are called extravagance and exorbitance.
    Materialistic matters alike are resented,
    Therefore those embracing Art dwells not.
    `
  },
  {
    chapter: 25,
    text: `
    Mired into existence,
    Before the conception of heaven and earth,
    Tranquil! Desolate!
    Independent and undeterred,
    Cyclical and not circumvented,
    As being the mother of all nature.
    Its name is unbeknown,
    I call it the Art of the Dao
    And arbitrarily describe it as great.
    Being great, it is desolated,
    Being desolated, it is removed,
    Being removed, it returns.
    Therefore the Art is great,
    Heaven is great,
    Earth is great,
    The master is also great.
    These are the four noble greatness,
    And the master is one of them.
    The master is inspired by the underlying principles of the earth,
    The earth is inspired by the underlying principles of the heavens,
    The heavens are inspired by the underlying principles of the Dao,
    Art is inspired by the underlying principles.
    `
  },
  {
    chapter: 26,
    text: `
    Weightiness is the root of weightlessness,
    Temperance is the master of temperament.
    Therefore the master stays close to trusted supplies in expeditions;
    There be spectacles and scenery,
    Presiding in serenity.
    Why then would a leader of a myriad supporters,
    Put no weight on the well being of its people?
    Weightless, and lose authority,
    Tempestuous, and forfeit mastership.
    `
  },
  {
    chapter: 27,
    text: `
    Good traveling leaves no tracks;
    Good speech is without reproach;
    Good strategies need no plotting;
    With good fastening, even a door with no hinge cannot be opened;
    The good knot is made without a rope and cannot be unraveled.
    Hence the Sage never fails in saving people,
    Therefore no one is rejected;
    The Sage never fails at saving things,
    Therefore nothing is left abandoned,
    This is illumination.
    Thus the good people are the teachers of the bad;
    The bad people are resources for the good.
    One who fails to respect his teacher,
    And does not cherish his resources,
    However intelligent such a one may be, he is still greatly confused.
    This is the essential mystery!
    `
  },
  {
    chapter: 28,
    text: `
    Acquire knowledge of extroversions, but
    Acquaint with introversions, and
    Be the earth's fountain.
    Be the earth's fountain, be Virtuous and undeterred,
    And be reborn.
    Realize the radiance of the limelight, but
    Remain in the shadows, and
    Be the people's example.
    Be the people's example, be Virtuous and not excessive,
    And be tranquilized.
    Experience the glory, but
    Express humility, and
    Be the world's refuge.
    Be the world's refuge, be Virtuous and complacent,
    And be returned to your roots.
    Uprooted, wood can be carved into instruments,
    The master utilizes it and become respectful leaders.
    Therefore, a great tailor seldom trims.
    `
  },
  {
    chapter: 29,
    text: `
    It is futile trying to possess the universe,
    And act on shaping it in the direction of one's ambition.
    The instruments of the universe cannot be shaped,
    One cannot act upon it.
    Act upon it and you will fail,
    Grasp onto it and it will slip.
    For everything, there is a time to tread; a time to trail,
    A time to gust; a time to gape,
    A time to vigor; a time to vice,
    A time to carry; a time to ride.
    Hence the master departs extremes.
    Departs extravagance, departs magnificence.
    `
  },
  {
    chapter: 30,
    text: `
    Ones who offer advice in the Art of governance,
    Offers not the use of forces to dominate the world,
    Understanding its invitation to retaliation.
    Where troops tramp, thorns thrive.
    After great battalions, years of resentments are inevitable.
    Therefore the master bring to fruition and leave be,
    Daring not to capture dominance.
    Accomplish and refrain glorification,
    Accomplish and restrain aggression,
    Accomplish and relinquish pride,
    Accomplish and take no credit,
    Accomplish and refuse domination.
    Matters that mature grow old,
    That is not in the Art of the Dao,
    Without the Art of being, and be premature.
    `
  },
  {
    chapter: 31,
    text: `
    Where everyone is well armed, is a state in vain,
    Matters alike are resented,
    Therefore the master dwells not.
    Hence the master finds residence on leftovers,
    Mobilizes on righteousness.
    Armaments, are instruments in vain,
    Are unmasterly instruments.
    Wielded only when inevitable,
    Reconciliation is paramount,
    Victorious without glorification.
    Those who glorify, take pleasure in massacres.
    Those who take pleasure in massacres,
    Cannot win the hearts of the people.
    Therefore, upon prosperity, be left-out,
    In adversity, be righteous.
    Hence the general is to the left,
    The admiral is to the right,
    Positioned in solemn remembrance.
    Casualties, are mourned in consolation.
    Victories, are remembered in solemness.
    `
  },
  {
    chapter: 32,
    text: `
    The Dao is ultimately nameless.
    Bushes of thorns may be insignificant,
    Yet no one dares belittle its sting.
    When leaders abide,
    The myriad things things follow.
    Heaven and earth complements another,
    Morning dew befalls,
    People, without ordinance, becomes orderly.
    Orders are identified by classifications;
    Once the classes are identified, one soon sees the limitations.
    Knowing the limitations, thus become unlimited.
    Like that where the Art is manifested in the world,
    Is there where rivers merge into oceans.
    `
  },
  {
    chapter: 33,
    text: `
    Knowing people is being intelligent,
    Knowing self is being enlightened.
    Victorious over people is being powerful,
    Victorious over self is being invincible.
    Those who are content are submerged in wealth,
    Those who are contentious are submitted to ambitions,
    Those who do not forget their principles endure,
    Those who die but are not forgotten live on.
    `
  },
  {
    chapter: 34,
    text: `
    Implications of the Tao are broad and extensive. Ubiquitous!
    Capable of contravening and swaying anything left or right.
    The myriad things depend on it yet it never turns its back away,
    Fulfilling without recognitions.
    Submitting to the myriad things without assuming ownership,
    Always undesirable,
    Thus be called modest;
    Submerged by the myriad things without accepting ownership,
    Thus be called great.
    Hence the master foregoes greatness,
    Therefore is capable of accomplishing great deeds.
    `
  },
  {
    chapter: 35,
    text: `
    Herald a great icon,
    And the people cometh;
    Cometh towards unharmful doctrines,
    People find security,
    Peacefulness and prosperity.
    Music and enticements craves the visitor to stay.
    The words of the Dao,
    Are tasteless and lack sensations,
    Observe and it cannot be seen,
    Listen and it cannot be heard,
    Exploit and it cannot be exhausted.
    `
  },
  {
    chapter: 36,
    text: `
    If one desires to shrink something, one must indefinitely expand it;
    If one desires to weaken something, one must indefinitely strengthen it;
    If one desires to discard something, one must indefinitely flourish it;
    If one desires to obtain something, one must indefinitely give it;
    This is the Knowledge of Subtlety.
    Gentleness overcomes Toughness,
    Vulnerability overcomes Dominance.
    Fish cannot leave the depth,
    Deadly weapons should not be exposed to the people.
    `
  },
  {
    chapter: 37,
    text: `
    The Dao abides in non-action but there is nothing it does not do.
    When the leaders abide,
    The myriad of things transform by itself;
    Transformed yet desire to act,
    I lead the community by not naming the simplicity of things;
    Without naming the simplicity of things, thus lead to no desire;
    Without desire, with tranquility,
    The world correct by itself.
    `
  },
  {
    chapter: 38,
    text: `
    Those with great Virtue are not bound by virtues,
    Thus can be with Virtue;
    Those without Virtue fail to liberate themselves of virtues,
    Thus remain without Virtue.
    Those with great Virtue act not and take no credit in their actions,
    Those without Virtue act and demand respect in their actions.
    The humane acts charitably and holds no repute.
    The righteous acts in the name of justice and relishes the glory.
    The moral acts, and when there is no response,
    Forces the issue, alas to no avail.
    Therefore, when the Dao is lost there is Virtue,
    When Virtue is lost there is humanity,
    When humanity is lost there is righteousness,
    When righteousness is lost there is morality.
    When the rituals of morality become customary,
    Devotion and faith become skin deep and turmoil begins to stir;
    When priority is given to the scholars,
    The Dao becomes glorified and are used to fool the crowd.
    Hence the master is concerned with depth,
    Not with sheerness;
    Dwells on integrity, not on glory.
    Therefore, detach from exteriors and embrace interiors.
    `
  },
  {
    chapter: 39,
    text: `
    When at one with the Dao:
    When heaven is at one, it is clear,
    When earth is at one, it is fertile,
    When the spirit is at one, it is serene,
    When the refuge is at one, it is rewarding,
    When the myriad things are at one, there is life,
    When the leaders are at one, the people are respectable,
    And become at one!
    If the heaven is unclear, there is fear it will fracture;
    If the earth is infertile, there is dread for disaster;
    If the spirit is disturbed, there is anxiety in death;
    If the refuge is deprived, there is panic over recession;
    If the myriad things are lifeless, there is scare of extermination;
    If the leaders are disrespectful,
    absorbed in the admiration
    of their own supremacy, the people becomes terrorized by authority.
    Therefore admiration is based on humility,
    Supremacy finds foundation in lowliness.
    When the leaders maintain uninvolved, irrelevant and undeserving,
    Is it not based on humility?
    Therefore prepare your chariots and set them aside.
    Yearn not for crowns and jewels,
    And remain composed in grits and gravel.
    `
  },
  {
    chapter: 40,
    text: `
    Resilience is the Dao in action,
    Vulnerability is the Dao in expression.
    The myriad things in the universe are conceived by existence,
    Existence is conceived by inexistence.
    `
  },
  {
    chapter: 41,
    text: `
    The learned discovers the Dao, duly obliges;
    The learning discovers the Dao, and questions its potency;
    The unlearned discovers the Dao, and roars into laughter,
    Without the laughs, it would not be the Dao.
    Therefore words of wisdom goes:
    Those enlightened by the Dao seem confused,
    Those progressing towards the Dao seem to fall behind,
    Those who discredit the Dao seem honorable,
    Those Virtuous seem desolate,
    Those honest seem humiliated,
    Those with noble Virtue seem lacking,
    Those building on Virtue seem fraudulent,
    Those of principled character seem to waver,
    Great squareness is without turning corners,
    Great instruments are deliberately constructed,
    Great vocalists seldom raise their voices,
    Great icons are shapeless.
    The Dao is a master of provisioning and empowerment.
    `
  },
  {
    chapter: 42,
    text: `
    The Dao gives birth to unity,
    Unity gives birth to duality,
    Duality gives birth to trinity,
    Trinity gives birth to a myriad of things.
    The myriad things bear shadows and embrace radiance,
    Are infused with the breath of life to achieve the harmonized trinity of darkness, light and soul.
    (People hate to be uninvolved, irrelevant and undeserving,
    Yet true leaders associate themselves with these characters.)
    Therefore, things may be gained by losing,
    May be lost by gaining.
    What others profess, I will also proclaim:
    “Forced principles will not be viable”,
    Let this be the heart and soul of the message.
    `
  },
  {
    chapter: 43,
    text: `
    The world's softest,
    Steers the world's hardest,
    That with no substance enters there with no space,
    Hence come to the appreciation of the benefits of inaction.
    Doctrines of unspoken words,
    Benefits of inaction,
    Rarely in this world could anything compare.
    `
  },
  {
    chapter: 44,
    text: `
    Fame and honor, which is more associable?
    Health and wealth, which is more vital?
    Success and failure, which is more harmful?
    Hence intense admiration comes with a hefty price,
    Accumulation of treasures comes with the loss of modesty.
    Acquaint with humility and be unhumiliated,
    Know the limitations and be unlimited, be enduring.
    `
  },
  {
    chapter: 45,
    text: `
    Great support seems deficient,
    Employed it will not collapse;
    Great buoyancy seems empty,
    Utilized it will not be exhausted.
    Great honesty seems corrupt,
    Great skills seem incompetent,
    Great orations seem inarticulate.
    Movement overcomes coldness,
    Stillness overcomes heat,
    Tranquility makes the world become righteous.
    `
  },
  {
    chapter: 46,
    text: `
    When the world is with the Dao,
    Carriages are used to transport manure;
    When the world is without the Dao,
    Armed chariots are lined up near the city gates.
    There is no greater sin than seduction,
    No greater fault than discontentment,
    No greater guilt than yearning.
    Therefore know what is enough, and you will always have enough.
    `
  },
  {
    chapter: 47,
    text: `
    Without leaving home,
    You may be acquainted with the universe;
    Without prying into windows of knowledge,
    You may be acquainted with the Dao.
    The further you may travel, the less you might know.
    Hence the master travels not, yet knowledgeable,
    Sees not, yet pronounced,
    Acts not, yet accomplished.
    `
  },
  {
    chapter: 48,
    text: `
      Practicing scholarships, everyday there is something to gain,
      Practicing the Dao, everyday there is something to lose;
      When you lose all that can be lost,
      You may be without action.
      Act not and leave none to be acted upon!
      Therefore those who can master the universe,
      Often remain unoccupied;
      Those who are preoccupied,
      Cannot master the universe.
    `
  },
  {
    chapter: 49,
    text: `
    The master never close up their mind,
But base their mind on the people's mind.
Those kind, be kind to them,
Those unkind, be kind to them also.
Virtuous is being kind.
Those faithful, have faith in them,
Those unfaithful, have faith in them also.
Virtuous is having faith.
The master is always anxious with the world about,
And is concerned with the people.
The people attends to the master's words and expressions,
The master fosters all in innocence.


    `
  },
  {
    chapter: 50,
    text: `
    Battling between life and death:
    Three of ten believe they will live,
    Three of ten believe they will die,
    There are also three of ten who believe that being born,
    Is the beginning of the journey towards death.
    Why is it so?
    Because being alive is treasured heavily.
    Those who truly know how to capture the essence of living,
    Travels through the woods without being attacked by tigers,
    Enters into battlefields without requiring armours;
    Brutality has no angle to strike,
    Tigers find no place to lay their claws,
    Enemies find no opening to lodge their swords.
    Why is it so?
    Because there is no room for death.
    `
  },
  {
    chapter: 51,
    text: `
    The Dao conceives,
    Virtue provides,
    Matters shape,
    Movements empower.
    Hence for the myriad things,
    There is none that does not respect the Tao and honor Virtue.
    Respect for the Tao,
    Honor given to Virtue,
    Are not commanded, yet they come about naturally.
    Therefore the Tao conceives and Virtue provisions,
    Leads and educates,
    Empowers and ripens,
    Raises and redeems.
    Conceive and not possess,
    Act and not dwell,
    Lead and not dictate,
    These are the intricacies of Virtue.
    `
  },
  {
    chapter: 52,
    text: `
    The origin of existence began with the mother of all nature.
    Understand the mother,
    And get to know the being of the child;
    Understand the being of the child,
    Then reacquaint with the mother,
    Without being, be unlimited.
    Clutter the exchanges,
    Close the doors,
    Live to be without office.
    Open the exchanges
    Operate the businesses,
    Live to be without relief.
    Seeing to little things is to have insight,
    Keeping to gentleness is to have strength.
    Exploit the radiance,
    But return to your insight,
    Remember that trying to leave nothing behind leaves yourself in vain,
    That is practicing the timeless truth.
    `
  },
  {
    chapter: 53,
    text: `
    That which makes one principled is having knowledge,
    Walking the way of the Dao,
    The only fear is to become instructive.
    The way towards the Dao is unpaved,
    Yet people like having a path.
    When many are appointed to offices, while fields sprout weed,
    Storages are empty,
    Fashions are blatantly accessorized,
    People carry weaponry,
    Are satiated in feasts,
    Lavished with extravaganzas,
    That is making out like bandits!
    Not the way of the Dao.
    `
  },
  {
    chapter: 54,
    text: `
    Proficient builders do not eradicate,
    Noble embracers do not abandon,
    They continue to be honored from generation to generation.
    Cultivate the Dao amidst your self,
    The Virtue is in understanding the truth;
    Cultivate the Dao amidst your family,
    The Virtue is in finding fortune;
    Cultivate the Dao amidst your community,
    The Virtue is in garnering respect;
    Cultivate the Dao amidst your nation,
    The Virtue is in harvesting prosperity.
    Cultivate the Dao amidst the universe,
    The Virtue is ubiquitously enjoyed.
    Therefore, behold one's self to see self,
    Behold one's family to see family,
    Behold one's community to see community,
    Behold one's nation to see nationality,
    Behold the universe to see the universe.
    How do I know the essence of the universe?
    By seeing this.
    `
  },
  {
    chapter: 55,
    text: `
    The profoundness of being embraced with the Virtue,
    Is like a being a newborn.
    Wild wasps, poisonous scorpions, venomous snakes will find no sting,
    Fierce beasts will find no hold,
    Preying birds will find no claws.
    The bones are weak, the muscles are tender, yet the grip is firm.
    Knows not of the union of male and female,
    Yet wholly united with integrity, the very essence of exquisiteness.
    Cries all day, yet the voice is not hoarsened,
    The very chorus of harmony.
    Understanding harmony is being eternal,
    Understanding eternity is being enlightened,
    Promoting life is being gracious,
    Channelling your energies internally is being strong.
    Things that mature grow old,
    Because they contradict the Dao,
    Contradict the Dao, and be brought to an early end.
    `
  },
  {
    chapter: 56,
    text: `
    Those who know talk not,
    Those who talk know not.
    Blockading its exchanges,
    Confining its ideals,
    Moderating its ingenuity,
    Unraveling its complexity,
    Softening its intensity,
    Is but merging into its ubiquity,
    That is the intricacy of ubiquity.
    It cannot be possessed for love,
    Cannot be possessed for hate,
    Cannot be possessed for profit,
    Cannot be possessed for harm,
    Cannot be possessed for respect,
    Cannot be possessed for despise.
    Therefore it is respected by the universe.
    `
  },
  {
    chapter: 57,
    text: `
    Be righteous in governance,
    Be unpredictable on the battlefield,
    Be unoccupied to master the universe.
    How do I know the essence of leadership?
    With this:
    The world is full of taboo and forbiddance,
    And the people is immersed in poverty;
    The people is armed with weaponry,
    And the nation is clouded with corruption;
    The people is preoccupied with professions,
    And bizarre obsessions grow out of no where;
    Chapters of law and orders are increasingly written,
    And thievery is common.
    Therefore the master maintains:
    “I act not and the people naturally becomes transpired,
    I believe in peace and the people naturally becomes righteous,
    I am unoccupied and the people naturally becomes prosperous,
    I yearn not and the people naturally becomes serene.”
    `
  },
  {
    chapter: 58,
    text: `
    When the governance is idle,
    The people is mellow;
    When the governance is vigilant,
    The people is mischievous.
    Adversity! Where fortunes lean,
    Fortunes! Where adversity hides.
    How can the ultimate be known?
    It has no norm!
    As righteousness regresses to bewilderments,
    Goodwill regresses to bewitchments,
    The days become long and hard.
    Hence the master is square without being edgy,
    Incorrupt without being severe,
    Straight without being thoughtless,
    Radiant without being glorious.
    `
  },
  {
    chapter: 59,
    text: `
    In governance and management, nothing compares to being conservative.
    Only being conservative,
    Can withdrawal be advanced.
    Advanced withdrawal is putting weight on building Virtue
    Put weight on building Virtue,
    Then there is nothing insurmountable,
    Insurmountable, and limitations are unbeknownst,
    When one's limitations are unbeknownst,
    One can inspire a nation.
    A nation inspired, is a nation that can be viable.
    That is being deeply rooted,
    In the viability and vision of the Dao.
    `
  },
  {
    chapter: 60,
    text: `
    Governing a nation is like frying small fish.
    Approach the world with the Dao,
    And evilness will find no spirit.
    Not that there are no evil spirits,
    But that the spirits will be of no harm;
    Not only will the spirits be of no harm,
    The master will also be of no harm.
    When the master and the subjects bring no harm to each other,
    Virtue can hence be returned to another.
    `
  },
  {
    chapter: 61,
    text: `
    Superior nations are positioned downstream.
    Where heaven and earth meets,
    There the heavenly feminine remains.
    Femininity often overcomes masculinity with composure,
    Maintaining composure is keeping a low profile.
    Therefore when a great nation lurks beneath a small nation,
    It can overtake the smaller nation;
    When a small nation lurks beneath a great nation,
    It can overtake the greater nation.
    Therefore stay low in order to conquer,
    Or stay low to be able to conquer.
    The biggest mistake for a great nation is to be obsessed with domination,
    The critical mistake for a small nation is to be obsessed with dominance.
    Greatness is achieved only when the desires from both are fulfilled,
    Therefore the superior stay low.
    `
  },
  {
    chapter: 62,
    text: `
    The Dao holds the crux to the myriad things,
    It is the treasure of goodness,
    It is the redeemer of evilness.
    Articulate words can influence the economy,
    Respectable actions can win the hearts of the people.
    How can one be removed from temptation?
    Therefore when the leader is chosen,
    And the officers are appointed,
    Though you may have treasures of honor and chariots of pride to offer,
    It compares not to offering a vision in the Dao.
    Why is the value of the Dao cherished timelessly?
    Without asking and be given,
    Having sinned and be forgiven?
    Therefore it is cherished by the world.
    `
  },
  {
    chapter: 63,
    text: `
    Act without act,
    Work without work,
    Taste without taste.
    Enlarge the belittled, increase the lessened,
    Reward condemnation with Virtue.
    Complexity is drawn from simplicity,
    Greatness is found in triviality.
    Problematic complexities must be resolved in simplicity,
    Great accomplishments must be built on trivialities,
    Hence the master continues to be unconcerned with great deeds,
    Therefore is capable of accomplishing greatness.
    Light minded promises draws few believers,
    The more simplifications, the more complicated it will become,
    Hence the master addresses the complexity.
    Therefore may continually avoid complications.
    `
  },
  {
    chapter: 64,
    text: `
    That settled is easily maintained,
    That without signs is easily conspired,
    That fragile is easily shattered,
    That insignificant is easily dispersed.
    Act on it before it materializes,
    Manage it before it becomes chaotic.
    A strapping tree is grown from a tiny sprout;
    A sky-scraping tower is built from a modest mound,
    A far-reaching journey begins with a small step.
    Those who act upon will fail,
    Those who hold on will lose.
    The master acts not, therefore fails not;
    Holds not on, therefore loses not.
    Amateurs often fail at the verge of success.
    Be focused in the end as in the beginning,
    Then there will be no failure.
    Hence the master desires not to be desirous,
    Treasures not precious possessions.
    Learn to be unlearned,
    Liberate the people of their past.
    Assist the myriad things in returning to their essence,
    And not dare act.
    `
  },
  {
    chapter: 65,
    text: `
    The timeless masters of the Dao,
    Is not about enlightening the people with it,
    But about humbling the people with it.
    The people is complicated,
    Manage it by managing its intelligence.
    Use intelligence to govern a nation, and be the traitor of a nation;
    Not use intelligence to govern a nation, and be the blessing of a nation.
    Understand these two, and set them as standards.
    Being understanding in setting standards,
    Is having the intricate Virtue.
    The intricate Virtue is profound! Farfetched!
    Contra to its objects! And leads towards favorable peacefulness.
    `
  },
  {
    chapter: 66,
    text: `
    Lakes and oceans can be the master of all streams,
    Because they are good at staying low,
    Therefore they can be master of all streams.
    Hence one who desires to be honored,
    Must speak humbly of one's self;
    One who desires to lead, must keep one's self behind.
    Hence the master is on top yet the people does not feel the weight,
    Is in front yet the people is not offended,
    Hence the world finds pleasure in pushing the master ahead
    Without feeling pushed aside.
    It is because the master contests not,
    Therefore can be uncontested.
    The world says that the Dao is great, but seems useless.
    I say that it is great, therefore it seems useless.
    If it seemed anything useful,
    Time would have diminished its greatness.
    `
  },
  {
    chapter: 67,
    text: `
    I have three precious things, that I hold onto and cherish.
    The first is called mercy,
    The second is called prudence,
    The third is not daring to be on top of the world.
    Merciful, therefore can be courageous;
    Prudent, therefore can be generous;
    Not daring to be on top of the world,
    Therefore can become instrumental and respectable.
    When without mercy and still courageous,
    Without prudence and still generous,
    Without reservation and still forging ahead, futility!
    With mercy, battles will be won,
    Defence will be secure,
    The heavens will come to your rescue, and protection in its mercy.
    `
  },
  {
    chapter: 68,
    text: `
    Great gladiators are not violent,
    Great warriors are not enraged,
    Great champions remain uncontested,
    Great leaders act with humility.
    That is the Virtue of not contesting,
    That is the power of leadership,
    That is the ultimate unity with timelessness.
    `
  },
  {
    chapter: 69,
    text: `
    There is a saying in the battlefield,
    “Dare not be the host thus be the guest,
    Dare not advance an inch thus retreat a foot.”
    That is to move without moves,
    Be armed without arms,
    Cast out without out-casting,
    Be forceful without forces.
    There is no greater fault than underestimating one's opponent,
    To underestimate one's opponent is to lose one's reservation.
    Therefore upon the clashing of the forces,
    Those who are reserved are victorious!
    `
  },
  {
    chapter: 70,
    text: `
    These words are easy to understand, and easy to follow.
    Yet for worldly people, none can understand, none can follow.
    Words make legends,
    Feats make heroes.
    Because in this there is nothing to be known, hence it is unknown.
    Those who know are rare, those who abide are respectable,
    Hence the master bears humility in apparels and treasuries at heart.
    `
  },
  {
    chapter: 71,
    text: `
    Knowing that you do not know, is superiority;
    Not knowing this knowledge, is defectiveness.
    Only by defecting defectives,
    Can one be void of defectiveness.
    The master is void of defectiveness,
    Because of the defecting of defectives
    Hence is void of defectiveness.
    `
  },
  {
    chapter: 72,
    text: `
    When the people is not threatened by the imposing dignity,
    Dignity is imposed! Without intruding the people's dwellings,
    Without dejecting the people's creations.
    Because of not dejecting,
    Hence is not dejected.
    Hence the master is introspective, and not professing.
    Self-loving, and not self-righteous.
    Therefore liberated and resolved.
    `
  },
  {
    chapter: 73,
    text: `
    Courageous in daring and kill,
    Courageous in not daring and live.
    These two are sometimes favorable, sometimes harmful.
    What the heavens detest,
    Who knows?
    Hence the master addresses the complexity.
    The heavenly Tao:
    Contest not and master winning,
    Speak not and master oration,
    Summon not and it comes naturally,
    Be honest and master intrigue.
    The meshes of the heavenly dragnet is extensive,
    It may be sparse, nothing escapes its netting.
    `
  },
  {
    chapter: 74,
    text: `
    When people are not threatened by death,
    Why intimidate them with death?
    One who causes the people to be constantly threatened by death,
    And bewitched with bewilderments, must be seized and executed,
    Who dares?
    Usually there are executioners who executes,
    But those who assume the executioner's job to execute,
    Is said to be like assuming the carpenter's job to carve wood.
    Those who assume the carpenter's job to carve wood,
    Seldom avoid hurting their hands.
    `
  },
  {
    chapter: 75,
    text: `
    People's poverty,
    Is caused by parasitic exploitation by superiors,
    Hence there is poverty.
    People's complicatedness,
    Is caused by ambitions of superiors,
    Hence there are complications.
    People's willingness to sacrifice,
    Is because of the weight given to life,
    Hence there are sacrifices.
    Only those who are not ambitious for achievements in life,
    Are truly capable of appreciating life.
    `
  },
  {
    chapter: 76,
    text: `
    People are born gentle and fragile,
    They die stiff and tough.
    The myriad things, plants and trees, are born tender and crisp,
    They die dried and withered.
    Therefore those who are stiff and tough are followers of death,
    Those who are gentle and fragile are followers of life.
    Hence when the armed forces are strong the nation is not successful,
    When the resources are strong the arms are naturally forceful.
    It is with great strength when one stays low,
    It is with gentleness and fragility when one can assume superiority.
    `
  },
  {
    chapter: 77,
    text: `
    The heavenly Dao,
    Is like the arching bow!
    That on top is repressed,
    That below is held high;
    The excessive is expended,
    The deprived is supplemented.
    The way of the Dao is heavenly,
    It is to supplement the deprived at the expense of the excessive.
    The way of the people is different,
    It is to proffer the excessive at the expense of the deprived.
    How then can there be any excess to offer to the world?
    There is none but the Dao.
    Hence the master acts without presumption,
    Accomplishes and not dwell,
    That is being undesirous in showing-off one's capabilities!
    `
  },
  {
    chapter: 78,
    text: `
    Of all gentleness and submissiveness in the world
    Nothing compares to water,
    And to tackle stiffness and toughness there is nothing better,
    There is no easier substitution.
    Be submissive to overcome dominance,
    Be gentle to overcome toughness,
    There is none in the world who knows not,
    There is none who can follow.
    Therefore the master says,
    “Accepting the nation's shame, is being stately;
    Accepting the nation's adversities, is being majestic.”
    Righteous words seem contradictory.
    `
  },
  {
    chapter: 79,
    text: `
    When hateful hostility is resolved,
    There will be lingering hatred,
    How can this be cured?
    Hence the master holds onto supporting agreements,
    Without holding anyone responsible.
    Those with Virtue exert effort on working out agreements,
    Those without Virtue exert effort on scrutinizing the disagreements.
    The Dao is unbiased,
    It will always bring cure to the people.
    `
  },
  {
    chapter: 80,
    text: `
    A small nation has a small population,
    Yet even without state of the art instruments to work with,
    People would rather sacrifice themselves than to migrate away.
    Even though there are vessels and vehicles of travel,
    There is none who takes the opportunity;
    Even though there are national guards,
    They are not lined up for inspection;
    People revert to simple means of measure with straps and knots.
    Indulge their desires and aspirations,
    Adorn their attires and outfits,
    Secure their place and quarters,
    Console their beliefs and customaries.
    Then even if the neighboring nation is within sight,
    And the crowing and barking can be heard,
    People retire of old age without longing to give service to the other.
    `
  },
  {
    chapter: 81,
    text: `
    Truthful words are not pleasant,
    Pleasant words are not trustworthy;
    Those who are good do not dispute,
    Those who are disputatious are not good;
    Those who know are not learned,
    Those who are learned do not know.
    The Sage does not store up things,
    The more he does for people, the more he has;
    The more he gives, the more he gains.
    The Way of Heaven,
    Is benefitting, not harming.
    The Way of the Sage,
    Is acting, not contending.
    `
  }
])