import image1 from '../assets/widows.svg'
import image2 from '../assets/hungry.svg'
import grace from '../assets/grace.svg'
import felicia from '../assets/grace.svg'
import programBlog from '../assets/programBlog.svg'


export const NavLink =[
    {name:'Home', link:'/'},
    {name:'About us', link:'/about'},
    {name:'Programme Initiatives', link:'/program'},
    {name:'Gallery', link:'/gallery'},
    {name:'Volunteer', link:'/volunteer'},
    {name:'Contact us', link:'/contact'}
]

export const FooterLink =[
    {name:'Volunteer', link:'volunteer'},
    {name:'Donate', link:'/donate'},
    {name:'Partner', link:'#'},
    {name:'Contact', link:'/contact'},
    {name:'Socials', link:'/contact'},
    {name:'Licenses', link:'#'}
]

export const Impact =[
    {
        number:'100',
        text:'Widows/needy empowered yearly'
    },

    {
        number:'100',
        text:'Children impacted yearly'
    },
    {
        number:'350-400',
        text:'Food served yearly'
    },
    {
        number:'300-350',
        text:'Food/cloth & other distribution yearly'
    },
    {
        number:'10',
        text:'Back to school students yearly'
    }

]

export const Projects =[
    {
        title: 'Helping Widows',
        text:'The Rosemary Ibeji Foundation is dedicated to empowering widows through financial support, skills training, and emotional guidance. Our ongoing initiatives help widows rebuild lives, gain financial independence, and provide for their families. Together, we can offer hope and oppurtunities to those who need it most.',
        href: '/donate',
        // img:{image1}
        img:image1
        // img:{image1}
    },

    {
        title: 'Feeding the hungry',
        text: 'Through our ongoing feeding program, we provide nutritous meals to underprivileged familites, widows, and children in need with the support of donors and volunteers, we aim to combat hunger and bring hope to those facing food insecurity. Together, we can create a community where everyone has enough to eat.',
        href: '/donate',
        img:image2
        // img:{image1}
    }
]

export const Testimony =[
    {
        title: 'Grace O.',
        text: 'After losing my husband, I struggled to provide for my children. The Rosemary Ibeji Foundation gave me a small loan to start my business and offereed training to grow it. Today, I can proudly take care of my family. They gave us hope when we had none.',
        href: '/volunteer',
        doc: 'Volunteer',
        // img:{image1}
        img: grace

    },

    {
        title: 'Felicia M.',
        text: 'I had no access to healthcare for myselt and my children until the foundations medical outreach program. They provided us with free check-ups and medications, which changed our lives. Im forever grateful for their support as it has brought joy to me.',
        href: '/donate',
        doc: 'Donate',
        // img:{image1}
        img:felicia
    }
]

export const Blog =[
    {
        title:'Building a',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta explicabo, ratione expedita eum qui facilis! Blanditiis, sunt quis quo consequuntur reiciendis accusamus voluptatibus.',
        href:'#',
        img:programBlog
    },
    {
        title:'Building ',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta explicabo, ratione expedita eum qui facilis! Blanditiis, sunt quis quo consequuntur reiciendis accusamus voluptatibus.',
        href:'#',
        img:programBlog
    },
    {
        title:'Building aa',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta explicabo, ratione expedita eum qui facilis! Blanditiis, sunt quis quo consequuntur reiciendis accusamus voluptatibus.',
        href:'#',
        img: programBlog
    },
]