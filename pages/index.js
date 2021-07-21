// components
import Contacts from '../components/Contacts';
import Projects from '../components/Projects';
import ShortBio from '../components/ShortBio';
import Tools from '../components/Tools';

export default function Home() {
  return (
    <>
      <ShortBio />
      <Tools />
      <Projects />
      <Contacts />
    </>
  );
}
