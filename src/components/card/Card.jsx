import React from 'react'
import { Button, Modal, Fade, Backdrop, Zoom, Grow } from '@material-ui/core'
import '../card/Card.css'
import Tumb from '../../assets/image/tumb.png';
import Video from '../../assets/video/video.mp4';
import Icon from '../../assets/image/icon.png';
import GooglePlay from '../../assets/image/google-play-badge.png';
import { Player } from 'video-react'
import AliceCarousel from 'react-alice-carousel';

//appImgs
import app1 from '../../assets/image/app/app1.jpeg';
import app2 from '../../assets/image/app/app2.jpeg';
import app3 from '../../assets/image/app/app3.jpeg';
import app4 from '../../assets/image/app/app4.jpeg';
import app5 from '../../assets/image/app/app5.jpeg';
import app6 from '../../assets/image/app/app6.jpeg';
import app7 from '../../assets/image/app/app7.jpeg';
import app8 from '../../assets/image/app/app8.jpeg';
import app9 from '../../assets/image/app/app9.jpeg';
import app10 from '../../assets/image/app/app10.jpeg';
import app11 from '../../assets/image/app/app11.jpeg';
import app12 from '../../assets/image/app/app12.jpeg';
import app13 from '../../assets/image/app/app13.jpeg';
import app14 from '../../assets/image/app/app14.jpeg';
import app15 from '../../assets/image/app/app15.jpeg';
import app16 from '../../assets/image/app/app16.jpeg';
import app17 from '../../assets/image/app/app17.jpeg';
import app18 from '../../assets/image/app/app18.jpeg';
import app19 from '../../assets/image/app/app19.jpeg';
import app20 from '../../assets/image/app/app20.jpeg';
import app21 from '../../assets/image/app/app21.jpeg';

import "react-alice-carousel/lib/alice-carousel.css";

import '../../../node_modules/video-react/dist/video-react.css'

import '../../fonts/poppins/Poppins-Medium.ttf'
import '../../fonts/poppins/Poppins-Light.ttf'


export default function Card() {
    const [open, setOpen] = React.useState(false);
    const [imgURL, setImgURL] = React.useState();
    const [checked, setChecked] = React.useState(false);

    const modalOpen = () => {
        setOpen(!open);
    }

    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <Button><img src={app1} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app1)} /></Button>,
        <Button><img src={app2} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app2)} /></Button>,
        <Button><img src={app3} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app3)} /></Button>,
        <Button><img src={app4} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app4)} /></Button>,
        <Button><img src={app5} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app5)} /></Button>,
        <Button><img src={app6} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app6)} /></Button>,
        <Button><img src={app7} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app7)} /></Button>,
        <Button><img src={app8} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app8)} /></Button>,
        <Button><img src={app9} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app9)} /></Button>,
        <Button><img src={app10} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app10)} /></Button>,
        <Button><img src={app11} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app11)} /></Button>,
        <Button><img src={app12} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app12)} /></Button>,
        <Button><img src={app13} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app13)} /></Button>,
        <Button><img src={app14} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app14)} /></Button>,
        <Button><img src={app15} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app15)} /></Button>,
        <Button><img src={app16} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app16)} /></Button>,
        <Button><img src={app17} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app17)} /></Button>,
        <Button><img src={app18} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app18)} /></Button>,
        <Button><img src={app19} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app19)} /></Button>,
        <Button><img src={app20} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app20)} /></Button>,
        <Button><img src={app21} className="sliderimg" onDragStart={handleDragStart} alt="" onClick={() => getImg(app21)} /></Button>,
    ];

    function downloadChurrapp() {
        var win = window.open('https://play.google.com/store/apps/details?id=host.exp.exponent', '_blank');
        win.focus();
    }



    function getImg(props) {
        setOpen(!open);
        setImgURL(props);
    }

    React.useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="Modal"
                open={open}
                onClose={modalOpen}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className="ModalConteudo">
                        <img src={imgURL} className="imgModal" alt="" />
                    </div>
                </Fade>
            </Modal>
            <div className="Tudo">
                <Grow in={checked}>
                    <div className="Card" style={{ background: 'maroon' }}>
                        <div className="Conteudo" style={{ marginTop: '80px' }}>
                            <div className="Churrapp">O que é o Churrapp?</div>
                            <div className="Texto">
                                O Churrapp é uma plataforma pensada para facilitar a organização do seu churrasco com os amigos.
                                Desenvolvida para ser um grande aliado dos amantes de churrasco.
                            </div>
                            <a onClick={downloadChurrapp}><img src={GooglePlay} className="googlePlay" alt="Link para download" /></a>
                        </div>
                        <div className="Conteudo" style={{ marginTop: '80px' }}>
                            <div className="Video">
                                <Player playsInline
                                    poster={Tumb}
                                    src={Video}></Player>
                            </div>
                        </div>
                    </div>
                </Grow>
                <div className="Linha"></div>
                <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
                    <AliceCarousel mouseTracking autoWidth={true} autoplay={true} infinite={true} items={items} />
                </Grow>
                <div className="Linha"></div>
                <div className="Funcionalidades" id="Teste">
                    <Zoom in={checked} style={{ transitionDelay: checked ? '250ms' : '0ms' }}>
                    <div className="cardFunc">
                        <div className="linha1">
                            <div className="numFunc">1</div>
                            <div className="titulo">Controle de Presença</div>
                        </div>
                        <div className="descricao">Tenha sempre a um toque a lista com os convidados
                        que vão ou não participar do seu churras!</div>
                    </div>
                    </Zoom>
                    <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
                    <div className="cardFunc">
                        <div className="linha1">
                            <div className="numFunc">2</div>
                            <div className="titulo">Controle de Pagamento</div>
                        </div>
                        <div className="descricao">Registre os convidados que ja te pagaram,
                        e tenha de forma direta quem ainda falta pagar.</div>
                    </div>
                    </Zoom>
                    <Zoom in={checked} style={{ transitionDelay: checked ? '750ms' : '0ms' }}>
                    <div className="cardFunc">
                        <div className="linha1">
                            <div className="numFunc">3</div>
                            <div className="titulo">Cálculo de Preço do Churrasco</div>
                        </div>
                        <div className="descricao">Nós calculamos quanto vai custar o seu churrasco,
                        com base nos itens que você deseja servir, e dividirmos para os seus amigos de forma automatica.</div>
                    </div>
                    </Zoom>
                    <Zoom in={checked} style={{ transitionDelay: checked ? '1000ms' : '0ms' }}>
                    <div className="cardFunc">
                        <div className="linha1">
                            <div className="numFunc">4</div>
                            <div className="titulo">Sugestão para Itens e Quantidades</div>
                        </div>
                        <div className="descricao">Separamos uma sugestão de itens para o seu churras, levando em conta o numero de convidados, agilizando a criação do seu evento.</div>
                    </div>
                    </Zoom>
                    <Zoom in={checked} style={{ transitionDelay: checked ? '1250ms' : '0ms' }}>
                   <div className="cardFunc">
                        <div className="linha1">
                            <div className="numFunc">5</div>
                            <div className="titulo">Limite para Confirmação de Presença</div>
                        </div>
                        <div className="descricao">No Churrapp você pode definir uma data limite para a confirmação de presença, evitando surpresas no churrasco.</div>
                    </div>
                    </Zoom>
                    <Zoom in={checked} style={{ transitionDelay: checked ? '1500ms' : '0ms' }}>
                   <div className="cardFunc">
                        <div className="linha1">
                            <div className="numFunc">6</div>
                            <div className="titulo">Cardapio Vegano e Vegetariano</div>
                        </div>
                        <div className="descricao">Nós montamos uma lsita de itens vegetarianos e veganos para que todos os seus amigos possam curtir com você, mesmo os que não comem carne.</div>
                    </div>
                    </Zoom>
                    <Zoom in={checked} style={{ transitionDelay: checked ? '1750ms' : '0ms' }}>
                   <div className="cardFunc">
                        <div className="linha1">
                            <div className="numFunc">7</div>
                            <div className="titulo">Histórico de Churrascos</div>
                        </div>
                        <div className="descricao">Lembra aquele churrasco super legal que a comida estava deliciosa, os papos estavem divertidos? Nós lembramos todos o churrascos para que você possa consultar e repetir.</div>
                    </div>
                    </Zoom>
                    <Zoom in={checked} style={{ transitionDelay: checked ? '2000ms' : '0ms' }}>
                   <div className="cardFunc">
                        <div className="linha1">
                            <div className="numFunc">8</div>
                            <div className="titulo">Lembrete de Carvão e Acendedor</div>
                        </div>
                        <div className="descricao">Itens essenciais para um churrasco, mas que as vezes esquecemos, o Churrapp te lembra!</div>
                    </div>
                </Zoom>
               </div>
            </div>
            <div className="TudoMobile">
                <Grow in={checked}>
                    <div className="CardMobileTest">
                        <div className="Conteudo">
                            <h3>O que é o Churrapp?</h3>
                            <div className="Texto">
                                Uma nova forma de organizar seu Churras!
                        </div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <Button className="BtnApple" variant="contained">Apple Store</Button>
                                <Button className="BtnGoogle" variant="contained">Google Play</Button>
                            </div>
                        </div>
                        <div className="Conteudo">
                            <div className="Video">
                                <Player playsInline
                                    poster={Tumb}
                                    src={Video}></Player>
                            </div>
                        </div>
                    </div>
                </Grow>
                <div className="Linha"></div>
                <div style={{ justifyContent: "space-between", fontSize: 40 }}>
                    <div>
                        <Grow in={checked} {...(checked ? { timeout: 500 } : {})}>
                            <div className="Card">
                                <div className="Conteudo">
                                    <Button><img src={app1} className="sliderimg" alt="" onClick={() => getImg(Tumb)} /></Button>
                                    <Button><img src={app2} className="sliderimg" alt="" onClick={() => getImg(Icon)} /></Button>
                                    <Button><img src={app3} className="sliderimg" alt="" onClick={() => getImg(Tumb)} /></Button>
                                    <Button><img src={app4} className="sliderimg" alt="" onClick={() => getImg(Icon)} /></Button>
                                    <Button><img src={app5} className="sliderimg" alt="" onClick={() => getImg(Tumb)} /></Button>
                                </div>
                            </div>
                        </Grow>
                    </div>
                    <div className="Linha"></div>
                    <div>
                        <div className="Card">
                            <div className="Conteudo">
                                <div className="Item">
                                    <label className="ItemNumero">1</label>
                                    <div className="Circulo"></div>
                                    <div className="TextoItems">
                                        Criação Facilitada de Churrasco
                                    </div>
                                </div>
                            </div>
                            <div className="Conteudo">
                                <div className="Item">
                                    <label className="ItemNumero">2</label>
                                    <div className="Circulo"></div>
                                    <div className="TextoItems">
                                        Cálculo da quantidade de carne e bebida
                                    </div>
                                </div>
                            </div>
                            <div className="Conteudo">
                                <div className="Item">
                                    <label className="ItemNumero">3</label>
                                    <div className="Circulo"></div>
                                    <div className="TextoItems">
                                        <label>Calculadora do total a pagar por pessoa</label>
                                    </div>
                                </div>
                            </div>
                            <div className="Conteudo">
                                <div className="Item">
                                    <label className="ItemNumero">4</label>
                                    <div className="Circulo"></div>
                                    <div className="TextoItems">
                                        Texto Sobre Funcionalidades
                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="Conteudo">
                                <div className="Item">
                                    <label className="ItemNumero">5</label>
                                    <div className="Circulo"></div>
                                    <div className="TextoItems">
                                        Texto Sobre Funcionalidades
                    </div>
                                </div>
                            </div>
                            <div className="Conteudo">
                                <div className="Item">
                                    <label className="ItemNumero">6</label>
                                    <div className="Circulo"></div>
                                    <div className="TextoItems">
                                        Texto Sobre Funcionalidades
                    </div>
                                </div>
                            </div>
                            <div className="Conteudo">
                                <div className="Item">
                                    <label className="ItemNumero">7</label>
                                    <div className="Circulo"></div>
                                    <div className="TextoItems">
                                        Texto Sobre Funcionalidades
                    </div>
                                </div>
                            </div>
                            <div className="Conteudo">
                                <div className="Item">
                                    <label className="ItemNumero">8</label>
                                    <div className="Circulo"></div>
                                    <div className="TextoItems">
                                        Texto Sobre Funcionalidades
                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}