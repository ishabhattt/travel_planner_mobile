import FlightCard from "@/components/molecules/FlightCard";
import { FlatList, ScrollView } from "react-native-gesture-handler";

interface ticketObjType {
  fare: number;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  departureCode: string;
  arrivalCode: string;
}

const ticketArr: ticketObjType[] = [
  {
    fare: 233,
    departureTime: "22:25",
    arrivalTime: "01:25",
    duration: "3 hr 20 min",
    departureCode: "SPG",
    arrivalCode: "TNG",
  },
];
const TicketSelection = () => {
  const renderTickets = ({ item }: ticketObjType) => {
    return <FlightCard data={item} />;
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      bounces={true}
    >
      <FlatList
        data={Array.from({ length: 10 }, () => ticketArr[0])}
        renderItem={renderTickets}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          width: "100%",
        }}
      />
    </ScrollView>
  );
};

export default TicketSelection;
