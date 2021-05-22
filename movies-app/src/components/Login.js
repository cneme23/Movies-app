import styled from "styled-components";

const Login= (props) =>{
    return(
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>Get Premier access o Raya and the last Dragon with Movies app </Description>
                </CTA>
                <BgImage/> 
            </Content>
        </Container>
    );
};

//Aca defino los estilos de este componente
const Container = styled.section`
    overflow: hidden;
    display:flex;
    flex-direction: column;
    text-align:center;
    height: 100vh;
    `;

//Aca defino los estilos de este componente
const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position:relative;
    min-height: 100 vh;
    box-sizing: border-box;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%

`;

//Aca configuro la imagen de fondo
const BgImage = styled.div`
height: 100%;
background-position:top;
background-size:cover;
background-repeat: no-repeat;
background-image: url("/images/login-background.jpg");
position:absolute;
top:0;
right:0;
left:0;
//Esto hace que la imagen de fondo se posicione atras del resto de los elementos
z-index:-1;


`;

const CTA = styled.div`
max-width: 650px;
width: 100%;
display: flex;
flex-direction: column;
`;

const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
`;

//Aca configuro el boton azul
const SignUp = styled.a`
font-weight: bold;
color:#f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width:100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border:1px solid transparent;
border-radius: 4px;
&:hover{
background-color: #0483ee;
}
`;

//Aca va la descripcion del texto

const Description= styled.p`
color: hsla(0,0%,95.3%,1);
margin:0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;
`;

export default Login;