import CardList from "@/components/CardList";
import Diploms from "@/components/Diploms";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Container maxWidth="xl">
        <Hero />
        <Typography
          variant="h4"
          component="h4"
          align="center"
          sx={{ color: "#FF6C6C", fontWeight: 500 }}
          className="text-center text-3xl font-semibold "
        >
          Вітаю Вас на моєму сайті!
        </Typography>
        <div>
          <p className="text-lg mt-4">
            <span className="text-[#FF6C6C] text-xl text">
              Мене звати Марина Зеленська. Я - практикуючий психолог,
              консультант, психотерапевт.
            </span>
          </p>
          <p className="text-lg prose">
            Маю великий досвід роботи з різними клієнтськими запитами. Мій
            досвід у психології становить понад 10 років. Індивідуальні
            консультації я почала проводити близько 9 років тому.
          </p>
          <p className="text-lg">
            Зараз я проводжу десятки консультацій щомісяця. У мене достатньо
            знань і досвіду, щоб допомогти Вам вирішити Ваше питання або знайти
            вихід із будь-якої ситуації. Якщо Вам потрібна професійна
            психологічна допомога: очна консультація психолога або
            психотерапевта, або за допомогою віддаленого зв'язку (онлайн) - буду
            рада Вам допомогти!
            <br /> У своїй роботі я спираюсь на кілька базових напрямів
            психотерапії: транзактний аналіз, когнітивно-поведінкова терапія,
            психоаналітична терапія, гіпноз, корекція та інші. Якщо Ви хочете
            змінити своє життя і вирішити питання, що накопичилися -
            звертайтеся!
          </p>
          <p className="text-[#FF6C6C] mt-4 text-xl">
            Буду рада стати Вам корисною!
          </p>
        </div>
        <Reviews />
        <Diploms />
        <CardList />
      </Container>
    </main>
  );
}
