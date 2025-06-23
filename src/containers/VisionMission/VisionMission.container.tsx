import { styleConfig } from './VisionMission.config';

import { Title } from '../../components/atoms';
import { VisiMisiContent } from '../../components/organism';

const VisionMision = () => {
  return (
    <section className={styleConfig.wrapper}>
      <div>
        <Title items="Visi & Misi Content" type="headerTitle" />
        <Title
          items="Silakan lakukan perubahan sesuai kebutuhan Anda. Data yang diubah akan
          disimpan secara otomatis dan dapat dilihat di halaman Visi & Misi."
          type="subHeaderTitle"
        />
      </div>
      <div className={styleConfig.container}>
        <VisiMisiContent />
      </div>
    </section>
  );
};

export default VisionMision;
