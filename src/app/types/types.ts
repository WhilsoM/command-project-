export interface IUseGeolocation {
  latitude: number;
  longitude: number;
}

export interface IWeather {
  location: {
    name: string;
    lat: number;
    lon: number;
    localtime: string;
  };
  current: {
    temp_c: number;
    is_day: number;
    humidity: number;
    condition: {
      icon: string;
      text: string;
    };
    wind_mph: number;
  };
}

export interface AdData {
  id: string;
  img: string;
  title: string;
  text: string;
  link: string;
}

export interface MemeCardProps {
  id: string;
  imageUrl: string;
  userName: string;
  createdAt: string;
  title: string;
}

export interface ISearch {
  inpValue: string;
  setInpValue: (e: string) => void;
}

export interface IModal {
  children?: React.ReactNode;
  handleClick?: () => void;
}

export interface IRenderMemes {
  memeCards: any[];
  handleEdit: (arg: any) => void;
  handleDelete: (arg: any) => void;
}
export interface IAddMemeForm {
  handleSubmit: (e: React.FormEvent) => void;
  imageUrl: string;
  setImageUrl: (e: any) => void;
  userName: string;
  setUserName: (e: any) => void;
  title: string;
  setTitle: (e: any) => void;
  editingCard: any;
  setEditingCard: any;
  handleClick: () => void;
}
