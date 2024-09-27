import Navbar from "./Navbar.jsx"
import Navbar2 from "./Navbar2.jsx"
import Hero from "./Hero.jsx"
import Section2 from "./Section2.jsx"
import Reviews from "./Reviews.jsx"
import Play from "./Play.jsx"
import Platforms from "./Platforms.jsx"
import Post from "./Post.jsx"
import Footer from "./Footer.jsx"

function App() {
  let nav = [
    {
      li1:"ABOUT",
      li2:"BLOGS",
      li3:"CONTACT",
      img:"../src/assets/images/Game-dark-logo-2048x637.png",
      li4:"NEWS & UPDATES",
      li5:"GAME REVIEWS",
      li6:"PC GAME",
      li7:"MOBILE GAME",
      li8:"PLATFORMS",
      li9:"PLAYSTATION",
      li10:"PS5",
      li11:"XBOX"

    }
  ]

  let nav2 = [
    {
      li1: "NEWS & UPDATES",
      li2: "GAME REVIEWS",
      li3: "PC GAME",
      li4: "MOBILE GAME",
      li5: "PLATFORMS",
      li6: "PLAYSTATION",
      li7: "PS5",
      li8: "XBOX"
    }
  ]

  let home = [{
    img:"images/1.-special-forces-soldier-holding-machine-gun-women-warzone-vr-gaming-concept-design-ai-generated-1170x663.jpg",
    img1:"images/the_crew_motorfest_2023_video_game-wallpaper-2880x1800-1-1170x663.jpg",
    img2:"images/the_last_of_us_2013-wallpaper-1920x1200-1-1170x663.jpg",
    span:"NEWS & UPDATES",
    h5:"Leveling Up: The Evolution of [Magazine Name] and Gaming Journalism",
    span2:"April 7, 2024",
    span3:"0 comments"
  }]

  let section2 =[{
    img1:"images/oil-painting-old-car-driving-through-mud-585x390.jpg",
    img2:"images/dolmen_video_game-wallpaper-1920x1200-1-585x390.webp",
    span:"PS-5",
    p:"Game Magazine Unveiled: Behind the Scenes of Our Latest Issue",
    span1:"by kenywhite || ",
    span2:" April 7, 2024",

    img2span:"GAME REVIEWS",
    img2span3:"PC GAME",
    p2:"Gaming News Roundup :Our Latest Releases and Updates",
    img2span1:"by kenywhite || ",
    img2span2:"April 3, 2024"
  }]

  let section3 =[
    {
      span:"GAME REVIEWS",
      img1:"images/the_crew_motorfest_2023_video_game-wallpaper-2880x1800-1-585x366.jpg",
      img2:"images/1.-special-forces-soldier-holding-machine-gun-women-warzone-vr-gaming-concept-design-ai-generated-1170x663.jpg",
      img3:"images/dolmen_video_game-wallpaper-1920x1200-1-585x390.webp",

      img1p:"Gamer’s Delight: Top Picks from [Magazine Name]’s Latest Edition",
      img1span1:"by kenywhite ||   ",
      img1span2:" April 7, 2024",

      img2span1:"Game reviews",
      img2p:"This game raises the bar for excellence in storytelling, gameplay, and overall enjoyment.",
      img2span2:"by kenywhite || ",
      img2span3:"April 9, 2024",

      img3p:"Gaming News Roundup : Our Latest Releases and Updates",
      img3span1: "by kenywhite || ",
      img3span2:"April 3, 2024"
    }
  ]

  let section4 = [
    {
      h2:"What to play",
      li1:"All",
      li2:"PS5",
      li3:"Updates",
      li4:"PC game",
      li5:"Mobile",

      img1:"images/oil-painting-old-car-driving-through-mud-585x390.jpg",
      img2:"images/dolmen_video_game-wallpaper-1920x1200-1-585x390.webp",
      img3:"images/freepik_standard_150318475-585x390.jpg",

      span1:"PS5",
      h4:"Game Magazine Unveiled: Behind the Scenes of Our Latest Issue",
      span2:"by kenywhite || ",
      span3:"April 7, 2024",

      span:"GAME REVIEWS",
      span21:"PC GAME",
      h24:"Gaming News Roundup: Latest Releases and Updates",
      span22:"by kenywhite || ",
      span23:"April 3, 2024",

      span31:"XBOX",
      h34:"The Art of Storytelling: Crafting Compelling Narratives Games",
      span32:"by kenywhite || ",
      span33:"April 3, 2024"
    }
  ]

  let section5 = [
    {
      h4:"Platforms",

      img1:"images/neon_abyss_video_game-wallpaper-1920x1200-1-585x390.jpg",
      img2:"images/garena_free_fire_video_game-wallpaper-1920x1200-1-585x390.jpg",
      h5:"Stealth and Intrigue: The Legacy of Metal Gear Solid",
      span1:"by kenywhite || ",
      span2:"April 3, 2024",

      img2span:"Discovering Ancient Realms: Assassin’s Review",

      sec2h4:"Playstation",
      sec2img:"images/ghost_of_tsushima_game-wallpaper-1920x1200-1-585x390.jpg",
      sec2img2:"images/f1_23_racing_video_game-wallpaper-1920x1200-1-585x390.jpg",
      sec2span1:"Unleashing Chaos: Marvel’s Avengers Game Review",
      sec2span2:"Strategic Showdown: Analyzing the Meta in Dota "
    }
  ]

  let section6 =[{
    h2:"Latest posts",
    h3:"XBOX",

    sec1img1 : "images/oil-painting-old-car-driving-through-mud-585x390.jpg",
    sec1span1 :"PS5",
    sec1h5:"Game Magazine Unveiled: Behind the Scenes of Our Latest Issue",
    sec1span2:"by kenywhite || April 7, 2024",
    sec1p1:"Introduction: Dive into the gritty world of survival gaming with DayZ, a game that challenges players to navigate a post-apocalyptic …",

    sec2img2:"images/dolmen_video_game-wallpaper-1920x1200-1-585x390.webp",
    sec2span1:"Game reviews || PC game",
    sec2h5:"Gaming News Roundup: Latest Releases and Updates",
    sec2span2:"by kenywhite  April 3, 2024",
    sec2p1:"Step into the world of mobile gaming’s phenomenon with Fortnite Mobile, a game that has redefined the landscape of battle …",


    sec2img3:"images/freepik_standard_150318475-585x390.jpg",
    sec3span1:"Xbox",
    sec3h5:"The Art of Storytelling: Crafting Compelling Narratives in Games",
    sec3span2:"by kenywhite || April 9, 2024",
    sec3p1:"PlayStation enthusiasts, get ready to elevate your gaming experience with the latest innovation from Sony. The newest PlayStation controller has …",

    sec2img4:"images/242408-585x390.jpg",
    sec4span1:"Game reviews",
    sec4h5:"Retro Rewind: Revisiting Classic Games That Shaped Gaming History",
    sec4span2:"by kenywhite || April 7, 2024",
    sec4p1:"Step into the world of mobile gaming’s phenomenon with Fortnite Mobile, a game that has redefined the landscape of battle …",

    sec2img5:"images/1.-special-forces-soldier-holding-machine-gun-women-warzone-vr-gaming-concept-design-ai-generated-1170x663.jpg",
    sec5span1:"Game reviews",
    sec5h5:"Reviving Classics: The Resurgence of Retro Gaming",
    sec5span2:"by kenywhite || April 3, 2024",
    sec5p1:"Step into the world of mobile gaming’s phenomenon with Fortnite Mobile, a game that has redefined the landscape of battle …",

    sec2img6:"images/1.-futuristic-battle-with-robots-mechs-digital-art-illustration-585x390.jpg",
    sec6span1:"PC game",
    sec6h5:"Brewing Potions and Casting Spells: The Magic of Skyrim’s Modding Community",
    sec6span2:"by kenywhite || April 9, 2024",
    sec6p1:"The concept of open-world gaming traces back to early video games like “Adventure” (1979) and “Ultima” (1981), which offered players …",

    sec2img7:"images/1.-futuristic-aliens-with-tentacles-3d-illustration-science-fiction-space-invaders-galaxy-monsters-585x390.jpg",
    sec7span1:"News & Updates",
    sec7h5:"Into the Wild: Exploring Horizon Zero Dawn’s Post-Apocalyptic World",
    sec7span2:"by kenywhite || April 7, 2024",
    sec7p1:"The concept of open-world gaming traces back to early video games like “Adventure” (1979) and “Ultima” (1981), which offered players …",

    sec2img8:"images/1.-fantasy-concept-art-ice-dark-knight-with-sword-armor-horse-winter-dark-background-585x390.jpg",
    sec8span1:"Game reviewsPS5",
    sec8h5:"Mastering the Battlefield: Tips and Tricks for Call of Duty: Warzone",
    sec8span2:"by kenywhite || April 3, 2024",
    sec8p1:"The concept of open-world gaming traces back to early video games like “Adventure” (1979) and “Ultima” (1981), which offered players …",

    sec2img9:"images/1.-anthropomorphic-wereaven-with-futuristic-scifi-armor-design-585x390.jpg",
    sec9span1:"PS5",
    sec9h5:"Survival of the Fittest: A Deep Dive into Rust’s PvP Gameplay",
    sec9span2:"by kenywhite  April 9, 2024",
    sec9p1:"The concept of open-world gaming traces back to early video games like “Adventure” (1979) and “Ultima” (1981), which offered players …",

    sec2img10:"images/1.-2151150810-585x390.jpg",
    sec10span1:"PC game",
    sec10h5:"Epic Encounters: Reviewing The Witcher 3’s Expansions",
    sec10span2:"by kenywhite  April 7, 2024",
    sec10p1:"The concept of open-world gaming traces back to early video games like “Adventure” (1979) and “Ultima” (1981), which offered players …",




    owlimg1:"images/11172-1170x663.jpg",
    owlimg2:"images/amazon-prime-day-sale-1170x663.jpg",
    owlimg3:"images/freepik_standard_150318475-1170x663.jpg",
    owlimg4:"images/high-angle-controllers-headphones-1170x663.jpg",

    search:"SEARCH",
    category:"Categories",
    li1:"> News & Updates",
    li2:"> PS5",
    li3:"> Game reviews",
    li4:"> Platforms",
    li5:"> Playstation",
    li6:"> PC Game",
    li7:"> Mobile Game",
    li8:"> Xbox",

    btn1:"POPULAR",
    btn2:"RECENT",
    btn3:"COMMENT",

    figure1:"images/dolmen_video_game-wallpaper-1920x1200-1-585x390.webp",
    figh5:"Gaming News Roundup: Latest Releases and Updates",
    figspan1:"April 3, 2024",

    figure2:"images/1.-special-forces-soldier-holding-machine-gun-women-warzone-vr-gaming-concept-design-ai-generated-1170x663.jpg",
    fig2h5:"This game raises excellence in storytelling, gameplay, and overall enjoyment.",
    fig2span:"April 9, 2024",

    figure3:"images/oil-painting-old-car-driving-through-mud-585x390.jpg",
    fig3h5:"Game Magazine Unveiled: Behind the Scenes of Our Latest Issue",
    fig3span:"April 7, 2024",

    figure4:"images/crysis_shooter_video_game-wallpaper-1920x1200-1-263x175.jpg",
    fig4h5:"Building Worlds: The Craft of Game Environment Design",
    fig4span:"April 3, 2024",

    figure5:"images/the_crew_motorfest_2023_video_game-wallpaper-2880x1800-1-263x175.jpg",
    fig5h5:"Gamer’s Delight: Top Picks from [Magazine Name]’s Latest Edition",
    fig5span:"April 7, 2024",

    tags:"TAGS CLOUD",
    tag1:"MOBILE",
    tag2:"NEWS",
    tag3:"PC GAME",
    tag4:"PLATFORM",
    tag5:"PLAYSTATION",
    tag6:"PS5",
    tag7:"REVIEW",
    tag8:"REVIEWS",
    tag9:"UPDATES",
    tag10:"XBOX",

    controller:"images/Black-Friday_web_banner_16-1.webp",
    news:"NEWSLETTER",

    newsp:"Subscribe my Newsletter for new blog posts, tips & new photos. Let's stay updated!",
    subscriber:"SUBSCRIBER",
    touch:"KEEP IN TOUCH",
  }]

  let section7 =[{
    footerbtn:"EDITORS PICK",
    footertext:"STORY TELLING",
    footerp1:"This game raises the bar for excellence in storytelling, gameplay, and overall enjoyment.",
    footerp2:"Gamer’s Delight: Top Picks from [Magazine Name]’s Latest Edition",
    footerp3:"Leveling Up: The Evolution of [Magazine Name] and Gaming Journalism",
    
    logo:"images/Game-dark-logo-2048x637.png",
    footerp4:"This theme is perfect for blogs and excellent for online stores, news, magazine or review sites. Buy Soledad now!",
    stay:"Stay connect with us",
    btn:"SUBSCRIBE",

    user:"USERFUL LINKS",
    li1:"Work With Us",
    li2:"Collaboration",
    li3:"Workplace",
    li4:"Privacy Policy",
    li5:"Feedback",
    li6:"About Our Ads",
    li7:"News Covering",
    li8:"Contact Us",
    li9:"Data Collection",
    li10:"Adverstising",
    li11:"International",
    li12:"Terms of Use",
    li13:"Help & Support",
    li14:"Trending Now",

    copy:"Copyright @2024 – All Right Reserved. Designed and Developed by",
    copyspan:"Sudesh Kalokhe"

  }]

  return (
    <>
     <Navbar header={nav}/>
     <Navbar2 navbar2={nav2}/>
     <Hero carousel={home}/>
     <Section2 sec2={section2}/>
     <Reviews sec3={section3}/>
     <Play sec4={section4}/>
     <Platforms sec5={section5}/>
     <Post sec6={section6} />
     <Footer sec7={section7}/>
    </>
  )
}

export default App
