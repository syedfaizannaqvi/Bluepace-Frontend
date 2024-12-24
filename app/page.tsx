import Button from "./components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className=" bg-[#043873]">
        <div className="flex justify-center items-center ml-[100px] w-screen h-screen">
          <div className="w-[40vw]">
            <div className="text-white">
              <h1 className="font-bold text-5xl leading-[72px]">
                Get More Done with whitepace
              </h1>
              <p className="font-normal text-lg leading-7">
                Project management software that enables your teams to
                collaborate, plan, analyze and manage everyday tasks
              </p>
            </div>
            <div className="gap-10 my-8">
              <Button
                btnBg="bg-[#4F9CF9]"
                btnTitleColor="text-white"
                btnTitle="Try White Free ->"
              />
            </div>
          </div>
          <div className="w-[50vw]">
            <div className="bg-[#C4DEFD] h-[400px] w-[500px]"></div>
          </div>
        </div>
      </div>
      <div className=" bg-white">
        <div className="flex justify-center items-center ml-[100px] w-screen h-screen">
          <div className="w-[40vw]">
            <div className="text-black">
              <h1 className="font-bold text-5xl leading-[72px]">
                Project Management
              </h1>
              <p className="font-normal text-lg leading-7">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them to a note.
              </p>
            </div>
            <div className="gap-10 my-8">
              <Button
                btnBg="bg-[#4F9CF9]"
                btnTitleColor="text-white"
                btnTitle="Get Started ->"
              />
            </div>
          </div>
          <div className="w-[50vw]">
            <div className="bg-[#C4DEFD] h-[400px] w-[500px]"></div>
          </div>
        </div>
      </div>
      <div className=" bg-white">
        <div className="flex justify-center items-center w-screen h-screen">
          <div className="w-[40vw]">
            <div className=" h-[400px] w-[500px]">
              <Image
                alt="work-together"
                width={500}
                height={400}
                src="/Work_Together.png"
              />
            </div>
          </div>
          <div className="w-[40vw]">
            <div className="text-black">
              <h1 className="font-bold text-5xl leading-[72px]">
                Project Management
              </h1>
              <p className="font-normal text-lg leading-7">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them to a note.
              </p>
            </div>
            <div className="gap-10 my-8">
              <Button
                btnBg="bg-[#4F9CF9]"
                btnTitleColor="text-white"
                btnTitle="Try it now ->"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#043873]">
        <div className="flex justify-center items-center ml-[100px] w-screen h-screen">
          <div className="w-[40vw]">
            <div className="text-white">
              <h1 className="font-bold text-5xl leading-[72px]">
                Use as Extension
              </h1>
              <p className="font-normal text-lg leading-7">
                Use the web clipper extension, available on Chrome and Firefox,
                to save web pages or take screenshots as notes.
              </p>
            </div>
            <div className="gap-10 my-8">
              <Button
                btnBg="bg-[#4F9CF9]"
                btnTitleColor="text-white"
                btnTitle="Let Go ->"
              />
            </div>
          </div>
          <div className="w-[50vw]">
            <div className="bg-[#C4DEFD] h-[400px] w-[500px]"></div>
          </div>
        </div>
      </div>
      <div className=" bg-white">
        <div className="flex justify-center items-center w-screen h-screen">
          <div className="w-[40vw]">
            <div className="bg-[#C4DEFD] h-[400px] w-[500px]"></div>
          </div>
          <div className="w-[40vw]">
            <div className="text-black">
              <h1 className="font-bold text-5xl leading-[72px]">
                Customise it to your needs
              </h1>
              <p className="font-normal text-lg leading-7">
                Customise the app with plugins, custom themes and multiple text
                editors (Rich Text or Markdown). Or create your own scripts and
                plugins using the Extension API.
              </p>
            </div>
            <div className="gap-10 my-8">
              <Button
                btnBg="bg-[#4F9CF9]"
                btnTitleColor="text-white"
                btnTitle="Get Started ->"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#043873]">
        <div className="flex justify-center items-center w-screen h-[70vh]">
          <div className="w-[80vw]">
            <div className="text-white text-center">
              <h1 className="font-bold text-5xl leading-[72px]">
              Your work, everywhere you are
              </h1>
              <p className="font-normal text-lg leading-7">
              Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
              </p>
            </div>
            <div className="gap-10 my-8 flex justify-center items-center">
              <Button
                btnBg="bg-[#4F9CF9]"
                btnTitleColor="text-white"
                btnTitle="Try Taskey ->"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white">
        <div className="flex justify-center items-center w-screen h-[60vh]">
          <div className="w-[80vw]">
            <div className="text-black text-center">
              <h1 className="font-bold text-5xl leading-[72px] text-[#212529] mb-10">
              Our Sponsors
              </h1>
              <div className="flex justify-center items-center gap-[100px]">
                <Image alt="" src='/Apple.png' height={68} width={50} />
                <Image alt="" src='/Microsoft.png' height={68} width={240} />
                <Image alt="" src='/Slack.png' height={68} width={220} />
                <Image alt="" src='/Google.png' height={68} width={220} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}