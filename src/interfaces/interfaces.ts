
export interface Breadcrumb {
    slug: string;
    title: string;
    index: number;
    type: string;
}

export interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}

export interface Links {
    self: string;
    html: string;
    download: string;
    download_location: string;
}

export interface ProfileImage {
    small: string;
    medium: string;
    large: string;
}

export interface User {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string | null;
    portfolio_url: string | null;
    bio: string | null;
    location: string | null;
    links: {
        self: string;
        html: string;
        photos: string;
        likes: string;
        portfolio: string;
        following: string;
        followers: string;
    };
    profile_image: ProfileImage;
    instagram_username: string | null;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    total_promoted_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: {
        instagram_username: string | null;
        portfolio_url: string | null;
        twitter_username: string | null;
        paypal_email: string | null;
    };
}

export interface Tag {
    type: string;
    title: string;
    source?: {
        ancestry: {
            type: {
                slug: string;
                pretty_slug: string;
            };
            category: {
                slug: string;
                pretty_slug: string;
            };
            subcategory: {
                slug: string;
                pretty_slug: string;
            };
        };
        title: string;
        subtitle: string;
        description: string;
        meta_title: string;
        meta_description: string;
        cover_photo: {
            id: string;
            slug: string;
            created_at: string;
            updated_at: string;
            promoted_at: string | null;
            width: number;
            height: number;
            color: string;
            blur_hash: string;
            description: string | null;
            alt_description: string;
            breadcrumbs: Breadcrumb[];
            urls: Urls;
            links: Links;
            likes: number;
            liked_by_user: boolean;
            current_user_collections: any[];
            sponsorship: null;
            topic_submissions: any;
            user: User;
        };
    };
}

export interface ImageDataInterface {
    id: string;
    slug: string;
    created_at: string;
    updated_at: string;
    promoted_at: string | null;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string | null;
    alt_description: string | null;
    breadcrumbs: Breadcrumb[];
    urls: Urls;
    links: Links;
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship: null;
    topic_submissions: any;
    user: User;
    tags: Tag[];
}

             
export interface MainComponentProps {
    searchQuery : string; 
    handleSearch: (query: string) => void ;
    imageData : ImageDataInterface[];
    setImageData : (data: ImageDataInterface[]) => void; 
    loading: boolean;
}
             

export interface HistoryProps {
    searchItems: string[];
  }