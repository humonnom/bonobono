import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "친구가 실수로 당신의 소중한 스마트폰을 떨어뜨려 화면이 깨졌을 때, 어떻게 반응하시나요?",
    answers: [
      { text: "아, 괜찮아. 내가 조심했어야 했는데. 보험 들어놔서 다행이야.", character: "bonobo" },
      { text: "에구, 어쩌다 그랬어? 다음부턴 조심하자. 내가 수리점 아는 데 있으니까 같이 가볼까?", character: "porori" },
      { text: "야! 뭐하는 거야? 이거 엄청 비싼 건데! 네가 배상해야 될 거 같은데?", character: "nuburi" }
    ]
  },
  {
    id: 2,
    text: "놀이공원에 갔는데 무서워 보이는 새로운 롤러코스터가 생겼을 때, 당신의 반응은?",
    answers: [
      { text: "와, 대단해 보이는데? 저걸 어떻게 만들었을까? 구조가 궁금하네.", character: "bonobo" },
      { text: "우와, 재밌어 보인다! 우리 다 같이 한 번 타볼까? 너무 무서우면 손잡고 타자!", character: "porori" },
      { text: "제일 앞자리로 가자! 내가 먼저 타고 올게. 너네는 내 리액션 보고 결정해!", character: "nuburi" }
    ]
  },
  {
    id: 3,
    text: "학급 회의 중 축제 부스 아이디어에 대해 의견 충돌이 있을 때, 어떻게 대처하나요?",
    answers: [
      { text: "모두의 의견을 들어보고 각각의 장단점을 정리해보는 게 어떨까요?", character: "bonobo" },
      { text: "두 의견을 합쳐서 새로운 아이디어를 만들어보면 어떨까요? 예를 들어...", character: "porori" },
      { text: "제 생각에는 이게 제일 좋아요. 왜냐하면 수익도 많이 날 것 같고, 준비도 쉬울 것 같거든요.", character: "nuburi" }
    ]
  },
  {
    id: 4,
    text: "토요일 아침에 일어났을 때, 주로 무엇을 하나요?",
    answers: [
      { text: "창문을 열고 새소리를 들으며 차 한잔 마시면서 이번 주를 돌아봐요.", character: "bonobo" },
      { text: "친구들한테 카톡으로 '오늘 뭐해?' 물어보고 만날 약속 잡아요.", character: "porori" },
      { text: "일찍 일어나서 운동장에 나가 축구하고 와요. 땀 흘리면서 운동해야 하루를 잘 시작하죠!", character: "nuburi" }
    ]
  },
  {
    id: 5,
    text: "중간고사 성적이 생각보다 안 좋게 나왔을 때, 당신의 반응은?",
    answers: [
      { text: "조용히 방에 들어가 결과를 분석해보고, 다음에 어떻게 공부할지 계획을 세워요.", character: "bonobo" },
      { text: "친구들에게 연락해서 '너네는 어땠어? 나 생각보다 안 좋게 나왔어...'라고 털어놓아요.", character: "porori" },
      { text: "아, 짜증나! 이번엔 뭔가 잘못됐어. 다음엔 절대 이러지 않을 거야!", character: "nuburi" }
    ]
  },
  {
    id: 6,
    text: "반장 선거날, 당신의 행동은?",
    answers: [
      { text: "조용히 앉아서 후보들의 공약을 주의 깊게 듣고 메모해요.", character: "bonobo" },
      { text: "친구들과 의논하며 '누가 우리 반을 위해 열심히 할 것 같아?'라고 물어봐요.", character: "porori" },
      { text: "저도 후보로 나가서 '제가 반장이 되면 이런 이런 것들을 하겠습니다!'라고 열정적으로 연설해요.", character: "nuburi" }
    ]
  },
  {
    id: 7,
    text: "친한 친구가 당신의 비밀을 다른 반 애들에게 말했다는 걸 알았을 때, 어떻게 반응하나요?",
    answers: [
      { text: "속상하지만, 친구도 나름의 이유가 있었겠지... 조금 시간을 두고 생각해봐야겠어.", character: "bonobo" },
      { text: "야, 너 왜 그랬어? 내가 비밀이라고 했잖아. 다신 안 그러겠다고 약속해.", character: "porori" },
      { text: "야! 너 정말 너무했다! 나도 너의 비밀 다 말할 거야. 각오해!", character: "nuburi" }
    ]
  },
  {
    id: 8,
    text: "2학기 첫날, 옆자리에 전학 온 학생이 앉았을 때, 당신의 태도는?",
    answers: [
      { text: "미소 지으며 '안녕하세요. 저는 ○○입니다. 궁금한 거 있으면 물어보세요.'라고 말해요.", character: "bonobo" },
      { text: "안녕! 나는 ○○야. 어디서 왔어? 우리 학교 좋지? 점심시간에 같이 밥 먹을래?", character: "porori" },
      { text: "야, 너 노래 잘해? 춤은? 우리 반 장기자랑 준비 중인데 함께할래?", character: "nuburi" }
    ]
  },
  {
    id: 9,
    text: "학교 축제 장기자랑에서 갑자기 가사를 잊어버렸을 때, 당신의 반응은?",
    answers: [
      { text: "잠시 멈추고 눈을 감은 뒤 깊게 숨을 쉬고 '죄송합니다'라고 말한 후 다시 시작해요.", character: "bonobo" },
      { text: "앗, 죄송합니다. 다들 저랑 같이 박수 치면서 노래해주세요!", character: "porori" },
      { text: "아, 깜빡했네!", character: "nuburi" }
    ]
  },
  {
    id: 10,
    text: "친구가 수학 숙제를 못 해와서 쉬는 시간에 급하게 도움을 요청했을 때, 어떻게 대응하나요?",
    answers: [
      { text: "괜찮아, 천천히 해보자. 내가 옆에서 설명해줄게. 먼저 이 문제의 핵심은...", character: "bonobo" },
      { text: "어, 그래. 내 거 보고 빨리 베껴. 근데 선생님이 물어보시면 꼭 설명할 수 있게 이해하면서 해!", character: "porori" },
      { text: "이런 걸 왜 나한테 부탁해? 네가 해야지. 힌트만 줄게. 이 공식 기억나지?", character: "nuburi" }
    ]
  },
  {
    id: 11,
    text: "어려운 수학 문제집을 풀 때 당신의 스타일은?",
    answers: [
      { text: "일단 문제를 꼼꼼히 읽고 주어진 정보를 정리해볼게. 그 다음에 여러 가지 풀이 방법을 생각해보자.", character: "bonobo" },
      { text: "야, 이 문제 어떻게 푸는 거야? 너는 어떻게 풀었어? 우리 같이 풀어보자!", character: "porori" },
      { text: "이건 이렇게 하면 되겠다! 빨리 답부터 구해보고 나중에 과정 채워 넣어야지.", character: "nuburi" }
    ]
  },
  {
    id: 12,
    text: "체육대회 달리기 시합에서 친구가 부당하게 반칙 판정을 받았을 때, 당신의 반응은?",
    answers: [
      { text: "잠깐만요. 제가 본 걸로는 반칙이 아닌 것 같은데, 다시 한 번 확인해 주실 수 있나요?", character: "bonobo" },
      { text: "괜찮아? 네가 반칙한 거 아닌 거 나도 봤어. 선생님께 말씀드릴까?", character: "porori" },
      { text: "아까 그건 반칙이 아니었어요! 다시 판정해주세요. 증인도 있어요!", character: "nuburi" }
    ]
  }
];