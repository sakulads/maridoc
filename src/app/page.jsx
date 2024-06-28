import CardList from "@/components/CardList";
import Diploms from "@/components/Diploms";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-6">
        <Hero />
        <Typography
          variant="h4"
          component="h4"
          align="center"
          sx={{ color: "#FF6C6C", fontWeight: 500 }}
          className="text-center text-3xl font-semibold"
        >
          Вітаю Вас на моєму сайті!
        </Typography>
        <div>
          <p className="text-lg mt-4">
            <span className="text-[#FF6C6C] text-lg md:text-xl text-justify whitespace-break-spaces">
              Мене звати Марина Зеленська. Я - практикуючий психолог,
              консультант, психотерапевт.
            </span>
          </p>
          <p className="mt-2 text-md text-justify whitespace-break-spaces md:text-lg">
            Маю великий досвід роботи з різними клієнтськими запитами. Мій
            досвід у психології становить понад 10 років. Індивідуальні
            консультації я почала проводити близько 9 років тому.
          </p>
          <p className="text-md text-justify whitespace-break-spaces md:text-lg">
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
          <p className="text-[#FF6C6C] mt-2 text-lg md:text-xl">
            Буду рада стати Вам корисною!
          </p>
        </div>
        <Reviews />
        <Diploms />
        <CardList />
      </div>
    </main>
  );
}
