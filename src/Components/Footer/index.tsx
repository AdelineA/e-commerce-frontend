import footer from "../../data/footer.json";
import { FooterSection } from "../../../types/Footer";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 font-inter text-xs">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 content-wrapper">
        {footer.sections.map((section: FooterSection, index: number) => (
          <div key={index}>
            <h3 className="font-bold text-lg mb-4">{section.title}</h3>
            {section.content?.description && (
              <div>
                <p className="text-gray-300 mb-4 whitespace-pre-line">
                  {section.content.description}
                </p>
                {section.content.inputPlaceholder && (
                  <div className="flex items-center justify-between p-2 border border-white w-4/5- rounded-md w-fit">
                    <input
                      type="text"
                      placeholder={section.content.inputPlaceholder}
                      className="rounded-l-md w-1/2 focus:outline-none bg-black"
                    />
                    <button>{section.content.buttonText}</button>
                  </div>
                )}
              </div>
            )}
            {section.content?.address && (
              <div className="text-gray-300">
                <p>{section.content.address}</p>
                <p>{section.content.email}</p>
                <p>{section.content.phone}</p>
              </div>
            )}
            {section.links && (
              <ul className="text-gray-300 space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} className="hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {section.content?.qrCodes && (
              <div>
                <div className="flex gap-4">
                  {section.content.qrCodes.map((qr, i) => (
                    <a href={qr.url} key={i} className="block">
                      <img
                        src={qr.image}
                        alt={`${qr.platform} QR`}
                        className="w-20 h-20"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}
            {section.socialMedia && (
              <div className="flex gap-4 mt-4">
                {section.socialMedia.map((social, i) => (
                  <a href={social.url} key={i} className="hover:opacity-80">
                    <img
                      src={social.icon}
                      alt={social.platform}
                      className="w-6 h-6"
                    />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-10 text-center text-gray-500">{footer.footerNote}</div>
    </footer>
  );
};

export default Footer;
