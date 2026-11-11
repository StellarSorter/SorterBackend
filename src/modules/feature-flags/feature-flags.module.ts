import { Module } from "@nestjs/common";
import { FeatureFlagsService } from "./feature-flags.service";
import { FeatureFlagsController } from "./feature-flags.controller";
import { PrismaModule } from "../../common/prisma/prisma.module";
import { AppCacheModule } from "../../common/cache/cache.module";

@Module({
  imports: [PrismaModule, AppCacheModule],
  providers: [FeatureFlagsService],
  controllers: [FeatureFlagsController],
  exports: [FeatureFlagsService],
})
export class FeatureFlagsModule {}
