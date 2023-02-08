import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/profile.png';
import img2 from '../assets/20.png';
import img3 from '../assets/22.png';
import img4 from '../assets/2.png';

const Home = () => {
  // const [posts, setPosts] = useState([]);

  // const cat = useLocation().search;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(`/posts${cat}`);
  //       setPosts(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, [cat]);

  // const getText = (html) => {
  //   const doc = new DOMParser().parseFromString(html, 'text/html');
  //   return doc.body.textContent;
  // };

  const posts = [
    {
      id: 1,
      title: 'Feito por: Daniel Ricardo Web Developer Full-Stack',
      desc: 'Sempre disposto a aprender novas stacks, comunicativo e resiliente. Pratiquei escuta ativa e possuo um espírito vibrante e apaixonado por desafios. Sou eu, pronto para evoluir e crescer junto com vocês.',
      img: img1,
    },
    {
      id: 2,
      title: 'Nascido e criado no Rio de Janeiro capital 021',
      desc: 'Como proprietário de um espírito jovem e animado, eu gosto de transmitir positividade e dinamismo. Eu sou atraído por desafios e a jornada é muito mais divertida quando realizada em equipe. Desistir é uma palavra que realmente não faz parte da minha vida.',
      img: img3,
    },
    {
      id: 3,
      title: 'Tenho um ponto de vista sobre o mundo bem exótico...',
      desc: 'Desde pequeno fui criado e educado para respeitar pessoas, idependente de sua raça, cor, tipo biologico, gosto pessoal ou aparência. Respeitando pessoas da mesma forma que gosto que me respeitem. ',
      img: img2,
    },
    {
      id: 4,
      title: 'Curiosidade sobre mim ?!',
      desc: 'Sou pai de uma linda "pinxesa xelêia" ( princesa sereia ) de 2 aninhos, amo ler One Piece, tenho um gosto musical bem aleatório ( muito mesmo kkkk ), amo carros e penso em ter uma oficina por hobby  ',
      img: img4,
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {
          posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={post.img} alt="" />
              </div>
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{post.desc}</p>
                <button type="button">Read More</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
