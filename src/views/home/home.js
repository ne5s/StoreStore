// 아래는 현재 home.html 페이지에서 쓰이는 코드는 아닙니다.
// 다만, 앞으로 ~.js 파일을 작성할 때 아래의 코드 구조를 참조할 수 있도록,
// 코드 예시를 남겨 두었습니다.
import { loginMatch } from '/loginMatch.js';
import * as Api from '/api.js';
import { randomId } from '/useful-functions.js';

// // 요소(element), input 혹은 상수

console.log(loginMatch);
addAllElements();
addAllEvents();

// html에 요소를 추가하는 함수들을 묶어주어서 코드를 깔끔하게 하는 역할임.
async function addAllElements() {
	loginMatch();
}

// 여러 개의 addEventListener들을 묶어주어서 코드를 깔끔하게 하는 역할임.
function addAllEvents() {}

async function getDataFromApi() {
	// 예시 URI입니다. 현재 주어진 프로젝트 코드에는 없는 URI입니다.
	const data = await Api.get('/api/user/data');
	const random = randomId();

	console.log({ data });
	console.log({ random });
}
