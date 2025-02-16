import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { LoadingScreen } from "src/components/Loading/LoadingScreen";
import { Task } from "src/components/Tasks/Task";
import { useLabelPrompterReplyTask } from "src/hooks/tasks/useLabelingTask";

const LabelPrompterReply = () => {
  const { tasks, isLoading, trigger, reset } = useLabelPrompterReplyTask();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (tasks.length === 0) {
    return <Container className="p-6 text-center text-gray-800">No tasks found...</Container>;
  }

  return (
    <>
      <Head>
        <title>Label Prompter Reply</title>
        <meta name="description" content="Label Prompter Reply" />
      </Head>
      <Task key={tasks[0].task.id} frontendId={tasks[0].id} task={tasks[0].task} trigger={trigger} mutate={reset} />
    </>
  );
};

export default LabelPrompterReply;
