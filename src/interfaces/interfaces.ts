
export interface ImageDataInterface {
    
        alt_description: string;
        blur_hash: string;
        breadcrumbs: any[];
        color: string;
        created_at: string;
        current_user_collections: any[]; 
        description: string;
        height: number;
        id: string;
        liked_by_user: boolean;
        likes: number;
        links: {
            download: string;
            download_location: string;
            html: string;
            self: string;
        };
        promoted_at: string | null;
        slug: string;
        sponsorship: any;
        tags: {
            title: string;
            type: string;
        }[];
        topic_submissions: any;
        updated_at: string;
        urls: {
            full: string;
            raw: string;
            regular: string;
            small: string;
            small_s3: string;
            thumb: string;
        };
        user: {
            accepted_tos: boolean;
            bio: string;
            first_name: string;
            for_hire: boolean;
            id: string;
            instagram_username: string;
            last_name: string;
            links: {
                self: string;
                html: string;
                photos: string;
                likes: string;
                portfolio: string;
                twitter: string;
                following: string;
                followers: string;
            };
            location: string;
            name: string;
            portfolio_url: string;
            profile_image: {
                small: string;
                medium: string;
                large: string;
            };
            social: {
                instagram_username: string;
                portfolio_url: string;
                twitter_username: string;
                paypal_email: string | null;
            };
            total_collections: number;
            total_likes: number;
            total_photos: number;
            total_promoted_photos: number;
            twitter_username: string;
            updated_at: string;
            username: string;
        };
        width: number;
    
    
    [Symbol.iterator](): IterableIterator<ImageDataInterface>
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