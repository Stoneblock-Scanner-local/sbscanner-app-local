"use client";

import { useEffect } from "react";
import viewsApi from "@/api/views/client";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
  nominationId: string;
}

const SetView = ({ nominationId }: Props) => {
  const queryClient = useQueryClient();

  const { mutateAsync: setView } = useMutation({
    mutationFn: async (nominationId: string) =>
      await viewsApi.setNominationView(nominationId),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: ["views-nomination-count", nominationId],
      }),
  });

  useEffect(() => {
    setView(nominationId);
  }, [setView, nominationId]);

  return null;
};

export default SetView;
