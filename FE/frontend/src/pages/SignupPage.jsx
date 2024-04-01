import Background from '../components/common/Background';
import background from '../assets/user/backimg.jpg';
import sketchbook from '../assets/user/sketchbookImg2.png'
import styled from 'styled-components';
import 'animate.css';
import downbtn from '../assets/user/downicon.png';
import backbtn from '../assets/user/backicon.png';
import { useState, useEffect } from 'react';
import profileDog from "../assets/user/profile_dog.png";
import profileTiger from "../assets/user/profile_tiger.png";
import profilePig from "../assets/user/profile_pig.png";
import profileDear from "../assets/user/profile_dear.png";
import profileEagle from "../assets/user/profile_eagle.png";
import profileSquirrel from '../assets/user/profile_squirrel.png';
import profileRabbit from '../assets/user/profile_rabbit.png';
import profileFox from '../assets/user/profile_fox.png';
import profileGiraffe from '../assets/user/profile_giraffe.png';
import profileCat from '../assets/user/profile_cat.png';
import { useNavigate } from 'react-router-dom';
import pig from '../assets/user/pig.png';
import dear from '../assets/user/dear.png';
import cat from '../assets/user/cat.png';
import eagle from '../assets/user/eagle.png'
import giraffe from '../assets/user/giraffe.png'

const SketchbookImg = styled.img`
    position : relative;
    width: 30rem;
    height: 45rem;
    margin-left: 0.5rem;
    /* background-color: yellow; */
`  

const EagleImg = styled.img`
  position : absolute;
  height: 8rem;
  top : 10.3rem;
  left : 19.2rem;
  animation-delay: 0.1s;
`
const DearImg = styled.img`
  position : absolute;
  top : 33.2rem;
  width : 10.5rem;
  left : 17rem;
  animation-delay: 0.3s;
`
const GiraffeImg = styled.img`
  position : absolute;
  width: 12.9rem;
  top : 36rem;
  left : 5rem;
`
const CatImg = styled.img`
  position : absolute;
  width: 13rem;
  top : 37em;
  left : 54.8rem;
  animation-delay: 0.8s;
`

const PigImg = styled.img`
    position : absolute;
    height: 11rem;
    top : 33rem;
    left : 66rem;
    animation-delay: 0.5s;
`
const SignupForm = styled.div`
    position : absolute;
    height: 42rem;
    width: 30rem;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items:center;
    /* background-color: yellow; */
`

const CharacterBox = styled.div`
    position : absolute;
    top: 5.5rem;
    width: 25rem;
    background-color : #A7A7A7;
    height : 9rem;
    border-radius : 1rem;
    opacity : 85%;
    z-index : 11;
    padding: 0 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-evenly;
`

const ImgFormat = styled.img`
    /* position : absolute; */
    left : ${props => props.left || '2.06rem'};
    top : ${props => props.top ||'0.62rem'};
    width : 3.8rem;
    height : 3.8rem;
    outline : ${props => props.clicked ? '#29C325 solid 4px': 'none'}; 
    border-radius : 5rem;
    margin: 0 0.2rem;
`

const MypageText = styled.div`
    position: absolute;
    top: 2rem;
    font-size : 2.7rem;
    font-weight : 700;
`;

const CategoryText = styled.div`
    /* position: absolute; */
    font-size: 1rem;
    font-weight: 300;
    /* background-color: yellow; */
`;
const InputContainer = styled.div`
    display : flex;
    flex-direction: column;
    position : relative;
    top: 15.5rem;
    width: 87%;
    justify-content: center;
`
const LevelBox = styled.div`
    display : flex;
    height: 5rem;
    width: 100%;
    /* background-color: yellow; */
`
const BoxSet = styled.div`
    display : flex;
    flex-direction: column;
    /* position : absolute; */
    height: 4.5rem;
    width: 100%;
    /* background-color: green; */
`
const Box = styled.div`
    display : flex;
    flex-direction: row;
    /* position : absolute; */
`

const InPutNicknametBox = styled.input`
     width: 100%;
    height: 2.4rem;
    border-radius: 1rem;
    border: 1px solid #A7A7A7;
    background: rgba(167, 167, 167, 0.40);
    font-size : 1.3rem;
    font-family : 'Ttangsbudaejjigae OTF';
    font-weight : 300;
    text-indent : 1rem;
    
    &::placeholder {
        color:#6F6C6C;
        font-size: 0.9rem;
        font-weight: 300
    }
  
`


const InputBox = styled.input`
    /* position : absolute; */
    width: 100%;
    height: 2.4rem;
    border-radius: 1rem;
    border: 1px solid #A7A7A7;
    background: rgba(167, 167, 167, 0.40);
    font-size : 1.3rem;
    font-family : 'Ttangsbudaejjigae OTF';
    font-weight : 300;
    text-indent : 1rem;
    
    &::placeholder {
        color:#6F6C6C;
        font-size: 0.9rem;
        font-weight: 300
    }
`

const DoubleCheckBtn = styled.div`
    /* position : absolute; */
    z-index : 10;
    left : 18rem;
    width: 6rem;
    height: 2.8rem;
    border-radius: 1.5rem;
    background: #727272;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-left : 0.5rem;
`
const BtnText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; 
    height: 100%; 
    font-weight: 300;
    font-size: 1.4rem;
    font-family : 'Ttangsbudaejjigae OTF';
    padding-top : 0.1rem;
`

const BtnSignup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; 
    height: 100%; 
    font-weight: 500;
    font-size: 1.7rem;
    font-family : 'Ttangsbudaejjigae OTF';
    padding-top : 0.1rem;
`
const Dropdown = styled.select`
    height: 2.687rem;
    width : ${props => props.width ||'100%'};
    border-radius: 1rem;
    border: 1px solid #A7A7A7;
    background: rgba(167, 167, 167, 0.50) url(${downbtn}) no-repeat;
    background-position: right 0.2rem center;
    background-size: 2rem;
    font-family: 'Ttangsbudaejjigae OTF';
    font-weight: 300;
    font-size: 0.9rem;
    color: #6F6C6C;
    text-indent : 1rem;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    margin-left: ${props => props.marginLeft || '0%'};
`

const Option = styled.option`
    font-family: 'Ttangsbudaejjigae OTF';
    font-weight: 300;
`;

const SaveBtn = styled.div`
    position : relative;
    font-weight: 500;
    width: 12rem;
    height: 3rem;
    left : 7em;
    border-radius: 2.5rem;
    background-color : #29C325;    
`
const GoLogin = styled.img`
    position : absolute;
    width: 3.5rem;
    bottom: 0.5rem;
    right: 2rem;
`

const ErrorId = styled.div`
  position: absolute;
  color : red;
  margin:0.3rem 0 0 10rem;
  font-size: 0.8rem;
 
`

const SignupPage2 = () => {
    const [validUserId, setValidUserId] = useState(true);
    const [selectedAge, setSelectedAge] = useState('');
    const [selectedGrade, setSelectedGrade] = useState('')
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [confirmPassword, setConfirmpassword] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(false);
    
    const navigate = useNavigate();
    

    const handleAgeChange = (event) => {
        setSelectedAge(event.target.value);
    };
    const handleGradeChange = (event) => {
        setSelectedGrade(event.target.value);
      }

    const handleIdChange = (event) => {

      const id = event.target.value;
      const regex = /^[a-zA-Z0-9]{5,10}$/;
      setValidUserId(regex.test(id));
      setUserId(id);   
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    
  }
  useEffect(() => {
    if(password && confirmPassword && password === confirmPassword){
        setPasswordMatch(true);
  
    } else{
        setPasswordMatch(false);
    }
  },[password, confirmPassword]);
  
  useEffect(() => {
    console.log("Password match:", passwordMatch);
  }, [passwordMatch]); 
  
  
  const handleConfirmPasswordChange = (event) => {
    console.log("비밀번호 확인:", event.target.value);
    setConfirmpassword(event.target.value);
    setPasswordMatch(event.target.value === password);
    console.log(passwordMatch)
  };
  

  const handleNicknameChange = (event) => {
      setNickname(event.target.value);
  };
  const clickImg = (characterName) => {
    setSelectedCharacter(characterName);
};

const checkId = () => {


}
  
  // const isAllConditionsSatisfied = validUserId && password && confirmPassword && password === confirmPassword && selectedCharacter && selectedAge && selectedAge;
  
  const handleSubmit = async () => {
    const userData = {
      loginId: userId,
      password: password,
      nickname: nickname,
      age: selectedAge,
      level: selectedGrade,
      thumbnail: `profile${selectedCharacter}.png`
    };
  
    try {
      const response = await fetch('https://kkirikkiri.shop/api/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        console.log('회원가입이 완료되었습니다.');
        navigate('/login')
      } else {
        console.error('회원가입에 실패했습니다.');
        console.log(userData);
      }
    } catch (error) {
      console.log(userData);
      console.error('오류 발생:', error);
    }
  };

  const goToLogin = () => {
    navigate('/login');
  };
    return (
      <Background backgroundimage={background}>
        <SketchbookImg src={sketchbook}></SketchbookImg>
        <EagleImg className="animate__animated animate__bounce animate__fast animate__infinite" src={eagle}/>
        <DearImg className="animate__animated animate__bounce animate__infinite" src={dear}/>
        <PigImg className="animate__animated animate__bounce animate__infinite" src={pig}/>
        <GiraffeImg className="animate__animated animate__bounce animate__infinite" src={giraffe}/>
        <CatImg className="animate__animated animate__bounce animate__infinite" src={cat}/>
        <SignupForm>
          <MypageText>회원가입</MypageText >
          <CharacterBox>
            <ImgFormat onClick={()=> clickImg("Dog")} src={profileDog} clicked={selectedCharacter === "Dog"}></ImgFormat>
            <ImgFormat onClick={()=> clickImg("Tiger")} src={profileTiger} clicked={selectedCharacter === "Tiger"}></ImgFormat>
            <ImgFormat onClick={()=> clickImg("Pig")} src={profilePig} clicked={selectedCharacter === "Pig"}></ImgFormat>
            <ImgFormat onClick={()=> clickImg("Dear")} src={profileDear} clicked={selectedCharacter === "Dear"}></ImgFormat>
            <ImgFormat onClick={()=> clickImg("Eagle")} src={profileEagle} clicked={selectedCharacter === "Eagle"}></ImgFormat>
            <ImgFormat onClick={()=> clickImg("Squirrel")} src={profileSquirrel} clicked={selectedCharacter === "Squirrel"}></ImgFormat>
            <ImgFormat onClick={()=> clickImg("Rabbit")} src={profileRabbit} clicked={selectedCharacter === "Rabbit"}></ImgFormat>
            <ImgFormat onClick={()=> clickImg("Fox")} src={profileFox} clicked={selectedCharacter === "Fox"}></ImgFormat>
            <ImgFormat onClick={()=> clickImg("Giraffe")} src={profileGiraffe} clicked={selectedCharacter === "Giraffe"}></ImgFormat>
            <ImgFormat onClick={()=> clickImg("Cat")} src={profileCat} clicked={selectedCharacter === "Cat"}></ImgFormat>
          </CharacterBox>
          <InputContainer>
            <BoxSet>
              <CategoryText>아이디</CategoryText>
              {!validUserId && userId.length > 0 && <ErrorId>사용할 수 없는 아이디입니다.</ErrorId>}
              <Box>    
                <InputBox onChange={handleIdChange} type="text" placeholder="5~10자리 영어, 특수문자 불가"></InputBox>
                <DoubleCheckBtn onClick={checkId}>
                  <BtnText>중복</BtnText> 
                </DoubleCheckBtn>
              </Box>
            </BoxSet>
            <BoxSet>
              <CategoryText>닉네임</CategoryText>
                <Box>    
                  <InPutNicknametBox onChange={handleNicknameChange} type="text" placeholder="사용하실 별명을 설정해주세요(최대5글자)" maxLength='5'></InPutNicknametBox>
                  <DoubleCheckBtn >
                    <BtnText>중복</BtnText>
                  </DoubleCheckBtn>
                </Box>
            </BoxSet>
            <BoxSet>
              <CategoryText>비밀번호</CategoryText>
              <Box>
                <InputBox onChange={handlePasswordChange} type="password"  placeholder="8~15자리, 특수문자 사용, 숫자 포함"></InputBox>
              </Box>
            </BoxSet>
            <BoxSet>
              <CategoryText>비밀번호확인</CategoryText>
              <Box> 
                <InputBox  onChange={handleConfirmPasswordChange} type="password"  placeholder="비밀번호를 재입력해주세요"></InputBox>
              </Box>
            </BoxSet>
            <LevelBox>
              <BoxSet>
                <CategoryText>나이</CategoryText>
                <Dropdown width="90%" value={selectedAge} onChange={handleAgeChange}>
                  <Option value="">나이를 선택해주세요</Option>
                  <Option value="6">6세</Option>
                  <Option value="7">7세</Option>
                  <Option value="8">8세</Option>
                  <Option value="9">9세</Option>
                  <Option value="10">10세</Option>
                  <Option value="11">11세</Option>
                  <Option value="12">12세</Option>
                  <Option value="13">13세</Option>
                </Dropdown> 
              </BoxSet>
              <BoxSet>
                <CategoryText>영어 수준</CategoryText>
                <Dropdown width="103%" marginLeft="-3%" value={selectedGrade} onChange={handleGradeChange}>
                    <Option value="">영어수준을 선택해주세요</Option>
                    <Option value="ADVANCED">상(중등이상)</Option>
                    <Option value="INTERMEDIATE">중(초등 3~초등 6)</Option>
                    <Option value="BEGINNER">하(초등 2 이하)</Option>
                </Dropdown>
              </BoxSet>
            </LevelBox>
            <SaveBtn onClick={handleSubmit}>
              <BtnSignup color="black">가입하기</BtnSignup>
            </SaveBtn>
          </InputContainer>
          <GoLogin src={backbtn} onClick={goToLogin}/>
        </SignupForm>
      </Background>
    );
};

export default SignupPage2;