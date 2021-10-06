@rem ==== 1.빌드된 jar파일을 서버에 전송
scp -i "c:/keys/myworkspace.pem" -r C:/git2021-master/git2021-master/6-spring/myworkspace/myworkspace/build/libs/*.jar ubuntu@ec2-13-125-231-210.ap-northeast-2.compute.amazonaws.com:/home/ubuntu/app/myworkspace
@rem ==== 2.jar파일을 실행하는 run.sh 스크립트 파일을 서버에 전송
scp -i "c:/keys/myworkspace.pem" -r C:/git2021-master/git2021-master/6-spring/myworkspace/myworkspace/run.sh ubuntu@ec2-13-125-231-210.ap-northeast-2.compute.amazonaws.com:/home/ubuntu/app/myworkspace
@rem ==== 3.run.sh 스크립트 파일을 실행가능하도록 권한부여 (777> rwx rwx rwx)
ssh -i "c:\keys\myworkspace.pem" ubuntu@ec2-13-125-231-210.ap-northeast-2.compute.amazonaws.com "sudo chmod 777 /home/ubuntu/app/myworkspace/run.sh"
@rem ==== 4. jar파일 있는 디렉터리까지 이동하고,run.sh로 기존 프로세스 죽이고 실행
ssh -i "c:\keys\myworkspace.pem" ubuntu@ec2-13-125-231-210.ap-northeast-2.compute.amazonaws.com "cd /home/ubuntu/app/myworkspace; ./run.sh myworkspace"

@rem ===== 다른 프로젝트에서 할 때는 사전에 mkdir /home/ubuntu/app/
@rem ===== 다른 프로젝트에서 할 때는 키파일명 myworkspace.pem제외하고
@rem ===== "myworkspace" 이것을 프로젝트명으로 바꿈