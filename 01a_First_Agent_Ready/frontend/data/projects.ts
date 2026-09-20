export type ProjectCategory = "exhibition" | "hospitality" | "commercial" | "office" | "residential" | "renovation";

export type Project = {
  slug: string; titleCN: string; titleEN?: string; category: ProjectCategory; coverImage: string;
  gallery: { src: string; type?: "full" | "medium" | "small"; orientation?: "landscape" | "portrait" }[];
  planImages?: string[]; descriptionCN?: string; descriptionEN?: string; location?: string; year?: string;
  area?: string; client?: string; scope?: string; status?: string;
};

const images = {
  gallery: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1800&q=85",
  office: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
  hall: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=85",
  tech: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85",
  mall: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1800&q=85",
  home: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
  tour: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1800&q=85",
};

export const projects: Project[] = [
  { slug:"huaying-art-gallery", titleCN:"华影艺术馆", titleEN:"HUAYING ART GALLERY", category:"exhibition", coverImage:images.gallery, descriptionCN:"空间以克制的材料与连续的动线，建立观看、停留与交流之间的关系。光线成为展览叙事的一部分，让艺术与空间彼此留有余地。", gallery:[{src:images.gallery,type:"full"},{src:images.hall,type:"medium"},{src:images.tech,type:"small"},{src:images.office,type:"medium"}] },
  { slug:"group-headquarters", titleCN:"地产集团总部办公", category:"office", coverImage:images.office, gallery:[{src:images.office,type:"full"},{src:images.tech,type:"medium"}] },
  { slug:"lirun-fuda-sales-center", titleCN:"立润富达广场营销中心", category:"commercial", coverImage:images.hall, gallery:[{src:images.hall,type:"full"}] },
  { slug:"yihaa-fintech-museum", titleCN:"怡化智能金融科技馆", category:"exhibition", coverImage:images.tech, gallery:[{src:images.tech,type:"full"}] },
  { slug:"imix-park", titleCN:"印象城 · 5万㎡商业空间", category:"commercial", coverImage:images.mall, gallery:[{src:images.mall,type:"full"}] },
  { slug:"shenzhen-residence", titleCN:"深圳大平层私宅", category:"residential", coverImage:images.home, gallery:[{src:images.home,type:"full"}] },
  { slug:"danny-art-20th-tour", titleCN:"丹尼爱特品牌20周年全国巡展", category:"exhibition", coverImage:images.tour, gallery:[{src:images.tour,type:"full"}] },
];

export const categoryNames: Record<ProjectCategory,string> = { exhibition:"展示", hospitality:"酒店与旅居", commercial:"商业", office:"办公", residential:"居住", renovation:"改造" };
