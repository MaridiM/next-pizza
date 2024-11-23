import { HomeScreen } from '@/screens';
import { GetSearchParams } from '@/shared/lib/helpers';

export default function Home({ searchParams }: { searchParams: GetSearchParams }) {
    return <HomeScreen searchParams={searchParams} />;
}
