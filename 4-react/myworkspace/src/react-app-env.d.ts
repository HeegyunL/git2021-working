/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv{
    React_APP_API_BASE : String; // .env 변수에 대한 타입선언
  }
}
